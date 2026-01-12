import { Button } from "@mui/material";
import {useSetAtom } from "jotai";

import { tasks } from "../utils/atoms";

export default function DeleteAllButton() {
    const setTaskList = useSetAtom(tasks);

    const DeleteTasks = () => {
        setTaskList([]);
    }
    return (
        <Button type="button" variant="contained" color="secondary" onClick={DeleteTasks}>
        Delete All Tasks
      </Button>
    )
}