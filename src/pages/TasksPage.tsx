import { TasksProvider } from "@/context/tasksContext/TasksProvider";
import { StatusesProvider } from "@/context/statusContext/StatusesProvider";
import Tasks from "@/components/tasks/Tasks";

export default function TasksPage() {

    return (
        <TasksProvider>
            <StatusesProvider>
                <div className="h-full w-full flex flex-col gap-6">
                    <Tasks />
                </div>
            </StatusesProvider>
        </TasksProvider>

    );
}