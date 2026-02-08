import { Button } from "@mui/material";

import type { Task } from "../utils/types";
import { useTasks } from "../hooks/useTasks";

export default function DeleteButton() {
  const { taskList, setTasks } = useTasks();

  const DeleteTasks = () => {
    setTasks(taskList.filter((task: Task) => !task.complete));
  };
  return (
    <Button
      type="button"
      variant="contained"
      color="warning"
      onClick={DeleteTasks}
    >
      Delete Completed Tasks
    </Button>
  );
}
