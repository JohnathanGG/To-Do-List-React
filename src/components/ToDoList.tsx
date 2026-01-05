import {Checkbox, List, ListItem } from "@mui/material";

import type { Task } from "../utils/types";

function TaskItem({ task }: { task: Task }) { 
  return (
    <ListItem>
      <Checkbox />
      {task.taskName}
    </ListItem>
  );
}

export default function ToDoList({ tasks }: { tasks: Task[] }) { 
  return (
    <List>
      {tasks.map((taskItem: Task, index: number) => (
        <TaskItem key={index} task={taskItem} /> 
      ))}
    </List>
  );
}