import { Button } from "@mui/material";

import { useDeleteTasks, useGetTasks } from "../hooks/useTasks";
import type Task from "../utils/types";

export default function DeleteAllButton() {
  const { data: taskList } = useGetTasks();
  const deleteTasks = useDeleteTasks();

  const handleDeleteTasks = () => {
    deleteTasks(taskList.map((task: Task) => task.id) ?? []);
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleDeleteTasks}>
      Delete All Tasks
    </Button>
  );
}
