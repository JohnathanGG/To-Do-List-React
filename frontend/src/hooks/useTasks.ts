import { useAtom, atom } from "jotai";

import type Task from "../utils/types";

export const tasks = atom<Task[]>([]);
export const useTasks = () => {
  const [taskList, setTasks] = useAtom(tasks);
  return {
    taskList,
    setTasks,
  };
};
