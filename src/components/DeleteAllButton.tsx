import { Button } from "@mui/material";
import { useSetAtom } from "jotai";

import { tasks } from "../utils/atoms";

export default function DeleteAllButton() {
    const setTaskList = useSetAtom(tasks);

    const deleteTasks = () => {
        setTaskList([]);
    }
    return (
        <Button variant="contained" color="secondary" onClick={deleteTasks}>
        Delete All Tasks
      </Button>
    )
}