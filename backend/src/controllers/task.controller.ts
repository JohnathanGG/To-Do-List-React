import getTaskCollection from "../models/task.model";
import { Request, Response } from "express";

export const getTasks = async (res: Response) => {
  const tasks = await getTaskCollection().find().toArray();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const result = await getTaskCollection().insertOne(req.body);
  res.status(201).json(result);
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await getTaskCollection().findOneAndUpdate(
      { id },
      { $set: req.body },
      { returnDocument: "after" },
    );

    if (!result) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Invalid ID or server error", error });
  }
};

export const deleteManyTasks = async (req: Request, res: Response) => {
  try {
    const { ids } = req.body;
    const result = await getTaskCollection().deleteMany({ id: { $in: ids } });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: "No tasks found" });
      return;
    }

    res.json({ message: `Deleted ${result.deletedCount} tasks` });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
