import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm'
import { UserReg } from '../components/UserReg'

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route index element={<LoginForm />} />
            <Route path='login' element={<LoginForm />} />
            <Route path='register' element={<UserReg />} />
        </Routes>
    )
}