import { useState, type ChangeEvent } from "react";
import { useSetAtom } from 'jotai'
import { TextField, Button } from "@mui/material";

import { tasks } from "../utils/atoms";
import type { Task } from "../utils/types";


export default function NewTask() {
  const [formData, setFormData] = useState<string>("");
  const setTaskList = useSetAtom(tasks);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData(value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask: Task = { taskName: formData, complete: false };
    setTaskList((prevTasks) => [...prevTasks, newTask]);
    setFormData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Add New Task"
        name="taskname"
        value={formData}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}
