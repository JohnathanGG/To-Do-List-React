import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import NewTask from './components/NewTask'
import ToDoList from './components/ToDoList'
import DeleteButton from './components/DeleteButton'

const theme = createTheme()

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NewTask/>
      <ToDoList/>
      <DeleteButton/>
    </ThemeProvider>
  )
}