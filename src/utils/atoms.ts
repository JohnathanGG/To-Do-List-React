import { atom } from "jotai";
import type { Task } from "./types";

export const tasks = atom<Task[]>([]);
