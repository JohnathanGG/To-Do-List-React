import { Collection } from "mongodb";
import { client } from "../config/connection DB";
import Task from "../utils/types";

const getTaskCollection = (): Collection<Task> => {
  return client.db("ToDoList").collection<Task>("tasks");
};

export default getTaskCollection;
