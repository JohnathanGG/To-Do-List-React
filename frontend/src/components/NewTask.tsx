import { TextField, Button } from "@mui/material";
import { Form, Formik, type FormikHelpers } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { v4 as uuidv4 } from "uuid";

import type { Task } from "../utils/types";
import { useTasks } from "../hooks/useTasks";
import { taskInitialValues, taskSchema } from "../utils/consts";

export default function NewTask() {
  const { setTasks } = useTasks();
  const handleSubmit = (values: Task, { resetForm }: FormikHelpers<Task>) => {
    const newTask: Task = {
      taskName: values.taskName,
      complete: values.complete,
      id: uuidv4(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    resetForm();
    
  };
  return (
    <Formik
      initialValues={taskInitialValues}
      validationSchema={toFormikValidationSchema(taskSchema)}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <TextField
            label="Add New Task"
            name="taskName"
            value={formik.values.taskName}
            onChange={formik.handleChange}
            error={formik.touched.taskName && Boolean(formik.errors.taskName)}
            helperText={formik.touched.taskName && formik.errors.taskName}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
