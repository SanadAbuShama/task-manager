import { Navigate } from 'react-router';
import { useAuth } from '@/context/auth/authContext';
import { type ReactNode } from 'react';
import { AppRoutes } from '@/AppRoutes';

interface LoggedInRouteProps {
    children: ReactNode;
}

export default function LoggedInRoute({ children }: LoggedInRouteProps) {
    const { user } = useAuth();

    if (user) {
        return <Navigate to={AppRoutes.tasks} replace />;
    }

    return <>{children}</>;
}