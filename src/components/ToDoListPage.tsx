import { Box, Container, Typography } from "@mui/material";
import NewTask from "./NewTask";
import DeleteButton from "./DeleteButton";
import DeleteAllButton from "./DeleteAllButton";
import ToDoList from "./ToDoList";


export default function ToDoListPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom align="center">
            To-Do List
        </Typography>
        
        <Box sx={{ mb: 3 }}>
            <NewTask />
        </Box>
        
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <DeleteButton />
            <DeleteAllButton />
        </Box>
        
        <ToDoList />
    </Container>
  );
}