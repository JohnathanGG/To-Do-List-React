import { Router } from "express";
import {
  createTask,
  deleteCompletedTasks,
  getTasks,
  updateTask,
} from "../controllers/task.controller";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/completed", deleteCompletedTasks);

export default router;
