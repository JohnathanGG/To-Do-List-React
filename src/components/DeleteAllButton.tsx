import { Button } from "@mui/material";

import { useTasks } from "../hooks/useTasks";

export default function DeleteAllButton() {
  const { setTasks } = useTasks();

  const deleteTasks = () => {
    setTasks([]);
  };

  return (
    <Button variant="contained" color="secondary" onClick={deleteTasks}>
      Delete All Tasks
    </Button>
  );
}
