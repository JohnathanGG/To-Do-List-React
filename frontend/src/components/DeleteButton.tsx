import { Button } from "@mui/material";

import { useTaskActions } from "../hooks/useTasks";

export default function DeleteButton() {
  const { deleteTasks } = useTaskActions();

  const handleDeleteTasks = () => {
    deleteTasks();
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
