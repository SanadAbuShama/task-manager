import './App.css'
import { Route, Routes } from 'react-router'
import { lazy } from 'react'
import AuthLayout from './components/layouts/auth/AuthLayout';
import DefaultLayout from './components/layouts/DefaultLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AppRoutes } from './AppRoutes';
import LoggedInRoute from './components/auth/LoggedInRoute';

const SignInPage = lazy(() => import('./pages/SignIn'));
const SignUpPage = lazy(() => import('./pages/Singup'));
const TasksPage = lazy(() => import('./pages/TasksPage'));


function Router() {
    return (
        <Routes>
            <Route element={
                <LoggedInRoute>
                    <AuthLayout />
                </LoggedInRoute>
            }>
                <Route index element={<SignInPage />} />
                <Route path={AppRoutes.signIn} element={<SignInPage />} />
                <Route path={AppRoutes.signUp} element={<SignUpPage />} />
            </Route>
            <Route element={
                <ProtectedRoute>
                    <DefaultLayout />
                </ProtectedRoute>
            }>
                <Route index element={<TasksPage />} />
                <Route path={AppRoutes.tasks} element={<TasksPage />} />
            </Route>
            <Route path="*" element={<div>404</div>} />
        </Routes>
    )
}

export default Router;
