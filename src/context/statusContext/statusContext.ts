import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';

export type Status = {
    id: string
    title: string,
    color: string,
}

export interface StatusesContextType {
    statuses: Status[] | null;
    setStatuses: Dispatch<SetStateAction<Status[] | null>>
}

export const StatusesContext = createContext<StatusesContextType | undefined>(undefined);

export const useStatuses = (): StatusesContextType => {
    const context = useContext(StatusesContext);
    if (context === undefined) {
        throw new Error('useStatuses must be used within an StatusesProvider');
    }
    return context;
};