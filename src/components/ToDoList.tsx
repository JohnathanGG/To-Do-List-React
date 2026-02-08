import { Checkbox, List, ListItem, Typography } from "@mui/material";

import type { Task } from "../utils/types";
import { useTasks } from "../hooks/useTasks";

export default function ToDoList() {
  const { taskList, setTasks } = useTasks();

  const TaskItem = ({ task, index }: { task: Task; index: number }) => {
    const handleChange = () => {
      setTasks((prevTasks) =>
        prevTasks.map((t, i) =>
          i === index ? { ...t, complete: !t.complete } : t,
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

  return (
    <List>
      {taskList.map((taskItem: Task, index: number) => (
        <TaskItem key={index} task={taskItem} index={index} />
      ))}
    </List>
  );
}
