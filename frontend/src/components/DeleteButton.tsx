import { Button } from "@mui/material";

import type Task from "../utils/types";
import { useDeleteTasks, useGetTasks } from "../hooks/useTasks";

export default function DeleteButton() {
  const { data: taskList } = useGetTasks();
  const deleteTasks = useDeleteTasks();

  const handleDeleteTasks = () => {
    deleteTasks(
      taskList
        .filter((task: Task) => task.complete)
        .map((task: Task) => task.id) ?? [],
    );
  };
  return (
    <Button
      type="button"
      variant="contained"
      color="warning"
      onClick={handleDeleteTasks}
    >
      Delete Completed Tasks
    </Button>
  );
}
