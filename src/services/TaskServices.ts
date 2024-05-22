import {QueryClient} from '@tanstack/react-query';
import {ITask} from "../models/ITask";

export async function fetchTasks(filter: boolean, draft: boolean) {
    try {
        return await fetch(`http://127.0.0.1:8000/api/tasks_all/?isActive=${filter}&draft=${draft}`
        ).then((res) => res.json());
    } catch (error) {
        throw error; // обработка ошибки }
    }
}

export const tasksQuery = (filter: boolean, draft: boolean) => ({
    queryKey: ['tasks', filter, draft],
    queryFn: () => fetchTasks(filter, draft)
});
export const fetchTasksQuery = (queryClient: QueryClient, filter: boolean, draft: boolean) =>
    queryClient.ensureQueryData(tasksQuery(filter, draft));
