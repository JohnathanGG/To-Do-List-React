import { ThemeProvider, createTheme } from "@mui/material/styles";

import NewTask from "./components/NewTask";
import ToDoList from "./components/ToDoList";
import DeleteButton from "./components/DeleteButton";
import DeleteAllButton from "./components/DeleteAllButton";
import { Box, Container, CssBaseline, Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark", 
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
    },
  },
  spacing: 8,
});


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}
