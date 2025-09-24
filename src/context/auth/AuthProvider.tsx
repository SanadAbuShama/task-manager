import { useEffect, useState, type ReactNode } from 'react';
import { AuthContext, type User } from './authContext';

const USER_LOCAL_STORAGE_KEY = 'user-auth';

interface AuthProviderProps {
    children: ReactNode;
}

const loggedInUser = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

const loggedInUserData = loggedInUser ? JSON.parse(loggedInUser) as User : null;

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useState<User | null>(loggedInUserData)


    useEffect(() => {
        if (user) {
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user))
        } else {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
        }
    }, [user])

    const login = (userData: User) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null)
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};