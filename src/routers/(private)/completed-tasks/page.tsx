import React from 'react';
import {useLoaderData} from 'react-router-dom';
import TableTasks from "../../../components/table/TableTasks";
import {ITask} from "../../../models/ITask";


export function TasksInCompletedPage() {
    const tasks = useLoaderData() as ITask[];
    console.log(tasks)


    return <>{tasks && <TableTasks  tasks={tasks} date={'Дата завершения'} updateDate={'update_data'}
                                   title={'Завершенные задачи'}/>}</>;
}

