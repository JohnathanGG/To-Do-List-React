import { List } from "@mui/material";

import type Task from "../utils/types";
import { TaskItem } from "./TaskItem";

export default function ToDoList({ taskList }: { taskList: Task[] }) {
  return (
    <List>
      {taskList.map((taskItem: Task) => (
        <TaskItem key={taskItem.id} task={taskItem} />
      ))}
    </List>
  );
}
