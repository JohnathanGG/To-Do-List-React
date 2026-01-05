import { useState, type ChangeEvent } from "react";
import { TextField, Button } from "@mui/material";

interface NewTaskProps {
  onAddTask: (taskName: string) => void;
}

export default function NewTask({ onAddTask }: NewTaskProps) {
  const [formData, setFormData] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData(value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask(formData);
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
