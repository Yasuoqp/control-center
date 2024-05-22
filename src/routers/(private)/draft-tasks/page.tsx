import React from "react";
import {useLoaderData} from "react-router-dom";
import DraftTasks from "../../../components/draft/DraftTasks";

export function DraftTasksPage() {

    const tasks = useLoaderData();
    return <DraftTasks tasks={tasks}/>
}