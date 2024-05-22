import {LoaderFunctionArgs, redirect} from 'react-router-dom';
import {QueryClient} from "@tanstack/react-query";


export const createTask =
    (queryClient: QueryClient) =>
        async ({request, params}: LoaderFunctionArgs) => {
            const formData = await request.formData();

            const newTask = {
                title: formData.get('title'),
                product: formData.get('product'),
                route: formData.get('route'),
                description: formData.get('description'),
                owner: formData.get('owner'),
                deadline: formData.get('deadline'),
                delivery_status: formData.get('delivery_status'),
                driver: formData.get('driver'),
                urgency: formData.get('urgency'),
                isActive: formData.get('isActive'),
                status: formData.get('status'),
                draft: formData.get('draft')
            };

            try {
                await fetch(`http://127.0.0.1:8000/api/tasks_all/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newTask)
                });
                await queryClient.refetchQueries({queryKey: ['tasks']});
            } catch (error) {
                throw error;
            }

            if (newTask.draft === 'true') {
                return redirect('/tasks/draft-tasks')
            }
            if (newTask.draft === 'false') {
                return redirect('/tasks/current-tasks')
            }


        };
