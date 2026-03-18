import { List } from "@mui/material";

import type Task from "../utils/types";
import { useGetTasks} from "../hooks/useTasks";
import { TaskItem } from "./TaskItem";

export default function ToDoList() {
const { data: taskList } = useGetTasks();

  return (
    <List>
      {taskList.map((taskItem: Task) => (
        <TaskItem key={taskItem.id} task={taskItem} />
      ))}
    </List>
  );
}
