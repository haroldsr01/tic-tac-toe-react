import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { Layout } from './Layout.jsx';
import { LoginForm } from './LoginForm.jsx';
import useAuth from "./useAuth.jsx";

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