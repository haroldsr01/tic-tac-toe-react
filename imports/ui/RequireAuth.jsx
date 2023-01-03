import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Layout } from './pages/Layout.jsx';
import { LoginForm } from './components/LoginForm.jsx';
import useAuth from "./components/useAuth.jsx";

export const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth.user)
    return (
        auth?.user
                ? <Outlet />                
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}