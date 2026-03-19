import { Box, Container, Typography } from "@mui/material";
import NewTask from "./NewTask";
import DeleteButton from "./DeleteButton";
import ToDoList from "./ToDoList";
import { useGetTasks } from "../hooks/useTasks";

export default function ToDoListPage() {
  const { data: taskList } = useGetTasks();
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        To-Do List
      </Typography>

      <Box sx={{ mb: 3 }}>
        <NewTask />
      </Box>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <DeleteButton />
      </Box>

      <ToDoList taskList={taskList} />
    </Container>
  );
}
