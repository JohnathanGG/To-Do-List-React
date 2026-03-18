import axios from "axios";
import { useAtom, atom } from "jotai";

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

export const getTasks = async () => {
  const res = await axios.get(api);
  const data = await res.data;
  return data;
};

export const createTask = async (newTask: Task) => {
  const res = await axios.post(api, { body: newTask });
  const data = await res.data;
  return data;
};

export const updateTask = async (newTask: Task, id: string) => {
  const res = await axios.put(api + "/" + id, { body: newTask });
  const data = await res.data;
  return data;
};

export const deleteTasks = async (ids: string[]) => {
  const res = await axios.delete(api, { data: { ids: ids } });
  const data = await res.data;
  return data;
};
