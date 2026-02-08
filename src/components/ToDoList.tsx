import { List } from "@mui/material";

import type { Task } from "../utils/types";
import { useTasks } from "../hooks/useTasks";
import { TaskItem } from "./TaskItem";

export default function ToDoList() {
  const { taskList } = useTasks();

  return (
    <List>
      {taskList.map((taskItem: Task, index: number) => (
        <TaskItem key={index} task={taskItem} index={index} />
      ))}
    </List>
  );
}
