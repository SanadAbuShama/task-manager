import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { TasksContext, type Task } from './tasksContext';
import { DEFAULT_TASKS } from './defaultTasks';

export const TASKS_STORAGE_KEY = 'tasks'

interface TasksProviderProps {
    children: ReactNode;
}

const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);

const tasksData = storedTasks ? JSON.parse(storedTasks) as Task[] : DEFAULT_TASKS;

export const TasksProvider = ({ children }: TasksProviderProps) => {

    const [tasks, setTasks] = useState<Task[]>(tasksData)

    const [filters, setFilters] = useState<{ status?: string, search?: string }>();

    const filteredTasks = useMemo(() => {

        if (filters?.status && filters.search) {
            return tasks.filter((task) => task.status === filters.status && task.title.toLowerCase().includes(filters.search?.toLowerCase() ?? ''))
        } else if (filters?.status) {
            return tasks.filter((task) => task.status === filters.status)
        } else if (filters?.search) {
            return tasks.filter((task) => task.title.toLowerCase().includes(filters.search?.toLowerCase() ?? ''))
        } else {
            return tasks;
        }
    }, [filters, tasks])

    useEffect(() => {
        if (tasks) {
            localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
        } else {
            localStorage.removeItem(TASKS_STORAGE_KEY)
        }
    }, [tasks])

    return (
        <TasksContext.Provider value={{ tasks, filteredTasks, setFilters, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
};