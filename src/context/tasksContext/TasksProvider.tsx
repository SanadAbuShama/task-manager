import { useCallback, useEffect, useState, type ReactNode } from 'react';
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

    const [filteredTasks, setFilteredTasks] = useState<Task[]>();

    const filterTasks = useCallback((statusFilter: string) => {
        setFilteredTasks(tasks.filter((task) => task.status === statusFilter))
    }, [tasks])

    useEffect(() => {
        if (tasks) {
            localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
        } else {
            localStorage.removeItem(TASKS_STORAGE_KEY)
        }
    }, [tasks])

    return (
        <TasksContext.Provider value={{ tasks, filteredTasks, filterTasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
};