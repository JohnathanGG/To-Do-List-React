import { ThemeProvider, createTheme } from "@mui/material/styles";

import NewTask from "./components/NewTask";
import ToDoList from "./components/ToDoList";
import DeleteButton from "./components/DeleteButton";
import DeleteAllButton from "./components/DeleteAllButton";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewTask />
      
      <DeleteButton/> <DeleteAllButton />
      <ToDoList />
    </ThemeProvider>
  );
}
