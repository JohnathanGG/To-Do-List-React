import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline'

import NewTask from './components/NewTask'
import ToDoList from './components/ToDoList'
import type { Task } from './utils/types';

const theme = createTheme()

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    const newTask: Task = { taskName, complete: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewTask onAddTask={addTask} />
      <ToDoList tasks={tasks} />
    </ThemeProvider>
  )
}