import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';

export type Task = {
    id: string,
    title: string,
    description: string,
    status: string
}

export interface TasksContextType {
    tasks: Task[];
    filteredTasks?: Task[];
    setFilters: Dispatch<SetStateAction<{
        status?: string;
        search?: string;
    } | undefined>>
    setTasks: Dispatch<SetStateAction<Task[]>>
}

export const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const useTasks = (): TasksContextType => {
    const context = useContext(TasksContext);
    if (context === undefined) {
        throw new Error('useTasks must be used within an TasksProvider');
    }
    return context;
};