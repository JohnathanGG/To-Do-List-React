import { Button } from "@mui/material";

import { useTasks } from "../hooks/useTasks";

export default function DeleteAllButton() {
  const { setTasks } = useTasks();

  const handelDeleteTasks = () => {
    setTasks([]);
  };

  return (
    <Button variant="contained" color="secondary" onClick={handelDeleteTasks}>
      Delete All Tasks
    </Button>
  );
}
