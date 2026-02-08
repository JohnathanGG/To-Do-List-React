import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";

import type { Task } from "../utils/types";
import { useTasks } from "../hooks/useTasks";

export default function NewTask() {
  const { setTasks } = useTasks();

  const formik = useFormik({
    initialValues: {
      taskName: "",
    },
    onSubmit: (values) => {
      const newTask: Task = { taskName: values.taskName, complete: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      formik.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="Add New Task"
        name="taskName"
        value={formik.values.taskName}
        onChange={formik.handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
