import { Checkbox, ListItem, Typography } from "@mui/material";
import type Task from "../utils/types";
import { useTaskActions } from "../hooks/useTasks";

export const TaskItem = ({ task }: { task: Task }) => {
  const {updateTask} = useTaskActions();
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
