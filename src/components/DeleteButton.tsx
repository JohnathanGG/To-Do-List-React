import { Button } from "@mui/material";
import { useAtom } from "jotai";

import { tasks } from "../utils/atoms";
import type { Task } from "../utils/types";

export default function DeleteButton() {
    const [taskList, setTaskList] = useAtom(tasks);

    const DeleteTasks = () => {
        setTaskList(taskList.filter((task: Task) => !task.complete)
        );
    }
    return (
        <Button type="button" variant="contained" color="warning" onClick={DeleteTasks}>
        Delete Completed Tasks
      </Button>
    )
}