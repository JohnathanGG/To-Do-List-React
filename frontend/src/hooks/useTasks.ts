import axios from "axios";
import { useAtom, atom } from "jotai";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import type Task from "../utils/types";

const api = "/api/tasks";

export const tasks = atom<Task[]>([]);
export const useTasks = () => {
  const [taskList, setTasks] = useAtom(tasks);
  return {
    taskList,
    setTasks,
  };
};

const getTasks = async () => {
  const res = await axios.get(api);
  const data = await res.data;
  return data;
};

const createTask = async (newTask: Task) => {
  const res = await axios.post(api, { body: newTask });
  const data = await res.data;
  return data;
};

const updateTask = async (newTask: Task, id: string) => {
  const res = await axios.put(api + "/" + id, { body: newTask });
  const data = await res.data;
  return data;
};

const deleteTasks = async () => {
  const res = await axios.delete(api+"/completed");
  const data = await res.data;
  return data;
};

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
};

export const useTaskActions = () => {
  const queryClient = useQueryClient();

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: ["tasks"] });

  return {
    createTask: async (newTask: Task) => {
      await createTask(newTask);
      invalidate();
    },
    updateTask: async (newTask: Task, id: string) => {
      await updateTask(newTask, id);
      invalidate();
    },
    deleteTasks: async () => {
      await deleteTasks();
      invalidate();
    },
    // expose queryClient methods directly
    refetch: () => queryClient.refetchQueries({ queryKey: ["tasks"] }),
    reset: () => queryClient.resetQueries({ queryKey: ["tasks"] }),
    clear: () => queryClient.clear(),
    invalidate,
  };
};