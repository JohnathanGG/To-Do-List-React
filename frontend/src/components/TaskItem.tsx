import { Checkbox, ListItem, Typography } from "@mui/material";
import { useTasks } from "../hooks/useTasks";
import type { Task } from "../utils/types";

export const TaskItem = ({ task, index }: { task: Task; index: number }) => {
  const { setTasks } = useTasks();

  const handleChange = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task, taskIndex) =>
        taskIndex === index ? { ...task, complete: !task.complete } : task,
      ),
    );
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
