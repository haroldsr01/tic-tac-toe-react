import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Lobby } from "../components/Lobby";
import { Play } from "../components/Play";
import { RequireAuth } from "../RequireAuth";
import { MainLayout } from "../pages/MainLayout";

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route element={<RequireAuth />}>
                <Route element={<MainLayout />}>
                    <Route path='lobby' element={<Lobby />} />
                    <Route path='play/room/:roomId' element={<Play />} />
                    <Route path='play' element={<Play />} />
                </Route>
            </Route>
        </Routes>
    )
}
