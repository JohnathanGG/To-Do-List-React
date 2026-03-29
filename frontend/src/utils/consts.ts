import z from "zod";

export const taskSchema = z.object({
  id: z.string(),
  taskName: z.string().min(3, "Task name must be at least 3 characters"),
  complete: z.boolean(),
});

export const taskInitialValues = {
  id: "",
  taskName: "",
  complete: false,
};
