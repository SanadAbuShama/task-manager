import { Navigate } from 'react-router';
import { useAuth } from '@/context/auth/authContext';
import { type ReactNode } from 'react';
import { AppRoutes } from '@/AppRoutes';

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to={AppRoutes.signIn} replace />;
    }

    return <>{children}</>;
}