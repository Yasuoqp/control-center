import React from 'react';
import {useLoaderData} from 'react-router-dom';
import TableTasks from "../../../components/table/TableTasks";
import {ITask} from "../../../models/ITask";


export function TasksInCurrentPage() {
    const tasks = useLoaderData() as ITask[];


    return <>{tasks && <TableTasks tasks={tasks} date={'Дата создания'} title={'Текущие задачи'}></TableTasks>}</>;
}

