import { useAtom } from "jotai";

import { tasks } from "../utils/atoms";

export const useTasks = () => {
  const [taskList, setTasks] = useAtom(tasks);

  return {
    taskList,
    setTasks,
  };
};
