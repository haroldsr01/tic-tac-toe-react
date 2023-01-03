import React from 'react'
import { Outlet } from "react-router-dom";
import { LoginForm } from '../components/LoginForm';
import { Header } from '../components/Header';

export const Layout = () => {
    return (
        <main className="App">            
            <Outlet />
        </main>
    )
}