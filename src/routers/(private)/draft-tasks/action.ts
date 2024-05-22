import {LoaderFunctionArgs, redirect} from 'react-router-dom';
import {QueryClient} from "@tanstack/react-query";


export const editTask =
    (queryClient: QueryClient) =>
        async ({request, params}: LoaderFunctionArgs) => {
            const formData = await request.formData();
            let intent = formData.get("intent");

            const newTask = {
                title: formData.get('title'),
                id: formData.get('id'),
                product: formData.get('product'),
                route: formData.get('route'),
                description: formData.get('description'),
                delivery_status: formData.get('delivery_status'),
            };


            if (intent === "edit") {

                try {
                    await fetch(`http://127.0.0.1:8000/api/tasks_all/${newTask.id}/`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newTask)
                    });
                    await queryClient.refetchQueries({queryKey: ['tasks']});
                } catch (error) {
                    throw error;
                }

                return null
            }

            if (intent === 'add') {

                try {
                    await fetch(`http://127.0.0.1:8000/api/tasks_all/${newTask.id}/`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({draft:false})
                    });
                    await queryClient.refetchQueries({queryKey: ['tasks']});
                } catch (error) {
                    throw error;
                }

                return redirect('/tasks/current-tasks')
            }


        };
