import { useEffect, useState, type ReactNode } from 'react';
import { StatusesContext, type Status } from './statusContext';
import { DEAULT_STATUSES } from './defaultStatuses';

export const STATUSES_STORAGE_KEY = 'statuses'

interface StatusesProviderProps {
    children: ReactNode;
}


const storedStatuses = localStorage.getItem(STATUSES_STORAGE_KEY);

const statusesData = storedStatuses ? JSON.parse(storedStatuses) as Status[] : DEAULT_STATUSES;

export const StatusesProvider = ({ children }: StatusesProviderProps) => {

    const [statuses, setStatuses] = useState<Status[] | null>(statusesData)

    useEffect(() => {
        if (statuses) {
            localStorage.setItem(STATUSES_STORAGE_KEY, JSON.stringify(statuses))
        } else {
            localStorage.removeItem(STATUSES_STORAGE_KEY)
        }
    }, [statuses])

    return (
        <StatusesContext.Provider value={{ statuses, setStatuses }}>
            {children}
        </StatusesContext.Provider>
    );
};