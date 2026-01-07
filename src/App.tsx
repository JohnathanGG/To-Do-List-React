import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import NewTask from './components/NewTask'
import ToDoList from './components/ToDoList'

const theme = createTheme()

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewTask/>
      <ToDoList/>
    </ThemeProvider>
  )
}