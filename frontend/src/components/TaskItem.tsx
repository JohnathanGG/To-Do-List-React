import { Checkbox, ListItem, Typography } from "@mui/material";
import { useUpdateTask } from "../hooks/useTasks";
import type Task from "../utils/types";

export const TaskItem = ({ task }: { task: Task }) => {
  const updateTask = useUpdateTask();
  const handleChange = async () => {
    await updateTask({ ...task, complete: !task.complete }, task.id);
  };

  return (
    <ListItem>
      <Checkbox checked={task.complete} onChange={handleChange} />
      <Typography
        sx={{
          color: task.complete ? "darkgrey" : "inherit",
          textDecoration: task.complete ? "line-through" : "none",
        }}
      >
        {task.taskName}
      </Typography>
    </ListItem>
  );
};
