import { TextField, Button } from "@mui/material";
import { Form, Formik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

import type { Task } from "../utils/types";
import { useTasks } from "../hooks/useTasks";

const validateTask = z.object({
  taskName: z.string().min(3, "Task name must be at least 3 characters"),
  complete: z.boolean(),
});

export default function NewTask() {
  const { setTasks } = useTasks();

  return (
    <Formik
      initialValues={{
        taskName: "",
        complete: false,
      }}
      validationSchema={toFormikValidationSchema(validateTask)}
      onSubmit={(values, { resetForm }) => {
        const newTask: Task = {
          taskName: values.taskName,
          complete: values.complete,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        resetForm();
      }}
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
