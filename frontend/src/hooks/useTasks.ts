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

const deleteTasks = async (ids: string[]) => {
  const res = await axios.delete(api, { data: { ids: ids } });
  const data = await res.data;
  return data;
};

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return async (newTask: Task) => {
    await createTask(newTask);
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
  };
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return async (newTask: Task, id: string) => {
    await updateTask(newTask, id);
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
  };
};

export const useDeleteTasks = () => {
  const queryClient = useQueryClient();

  return async (ids: string[]) => {
    await deleteTasks(ids);
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
  };
};
