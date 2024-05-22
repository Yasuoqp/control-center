import './style/App.css'
import React from 'react';
import {QueryClient} from "@tanstack/react-query";
import {createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider} from 'react-router-dom';
import LayoutApp from "./components/LayoutApp";
import {CreatTask} from "./routers/(private)/create-task/page";
import {createTask} from "./routers/(private)/create-task/action";
import {loaderTasksInCurrent, TasksInCurrentPage} from "./routers/(private)/current-tasks";
import {loaderTasksInComplete,TasksInCompletedPage} from "./routers/(private)/completed-tasks";
import {DraftTasksPage, loaderTasksInDraft} from "./routers/(private)/draft-tasks";
import {editTask} from "./routers/(private)/draft-tasks/action";


function App({queryClient}: { queryClient: QueryClient }) {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<LayoutApp/>}>
                <Route index loader={() => redirect('/tasks/createTask')}/>
                <Route path={'tasks'}>
                    <Route path={'createTask'} action={createTask(queryClient)} element={<CreatTask/>}/>
                    <Route path={'draft-tasks'} action={editTask(queryClient)} loader={loaderTasksInDraft(queryClient)} element={<DraftTasksPage/>}/>
                    <Route path={'current-tasks'} loader={loaderTasksInCurrent(queryClient)}
                           element={<TasksInCurrentPage/>}/>
                    <Route path={'completed-tasks'} loader={loaderTasksInComplete(queryClient)} element={<TasksInCompletedPage/>}/>
                </Route>
            </Route>
        ),
        {basename: '/'}
    )
    return <RouterProvider router={router}/>;
}

export default App;
