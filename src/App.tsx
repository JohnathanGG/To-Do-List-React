import { ThemeProvider, createTheme } from "@mui/material/styles"; 

import {CssBaseline } from "@mui/material";
import ToDoListPage from "./components/ToDoListPage";

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
      <ToDoListPage/>
    </ThemeProvider>
  );
}
