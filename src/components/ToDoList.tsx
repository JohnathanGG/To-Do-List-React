import { Checkbox, List, ListItem } from "@mui/material";
import { useAtomValue } from "jotai";

import { tasks } from "../utils/atoms";
import type { Task } from "../utils/types";

function TaskItem({ task }: { task: Task }) {
  return (
    <ListItem>
      <Checkbox />
      {task.taskName}
    </ListItem>
  );
}

export default function ToDoList() {
  const taskList = useAtomValue(tasks);
  return (
    <List>
      {taskList.map((taskItem: Task, index: number) => (
        <TaskItem key={index} task={taskItem} />
      ))}
    </List>
  );
}
