import React from 'react'
import { Outlet } from "react-router-dom";
import { LoginForm } from './LoginForm';
import { Header } from './Header';

export const Layout = () => {
    return (
        <main className="App">            
            <Outlet />
        </main>
    )
}