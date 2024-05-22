import {QueryClient} from '@tanstack/react-query';
import {fetchTasksQuery} from "../../../services/TaskServices";


export const loader = (queryClient: QueryClient) => {
    return async () => {
        return await fetchTasksQuery(queryClient, false, true);
    };
};