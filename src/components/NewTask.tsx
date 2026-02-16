import { TextField, Button } from "@mui/material";
import { Form, Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import type { Task } from "../utils/types";
import { useTasks } from "../hooks/useTasks";
import dayjs from "dayjs";
import { taskInitialValues, taskSchema } from "../utils/consts";

export default function NewTask() {
  const { setTasks } = useTasks();

  return (
    <Formik
      initialValues={taskInitialValues}
      validationSchema={toFormikValidationSchema(taskSchema)}
      onSubmit={(values, { resetForm }) => {
        const newTask: Task = {
          taskName: values.taskName,
          complete: values.complete,
          id: dayjs().valueOf(),
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
