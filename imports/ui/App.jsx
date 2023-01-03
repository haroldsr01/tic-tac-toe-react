import React from 'react';
import {Routes, Route} from "react-router-dom";
import { LoginForm } from './components/LoginForm.jsx';
import { UserReg } from './components/UserReg.jsx';
import { Lobby } from './components/Lobby.jsx';
import { Play } from './components/Play.jsx';
import { Layout } from './pages/Layout.jsx';
import { MainLayout } from './pages/MainLayout.jsx';
import { RequireAuth } from './RequireAuth.jsx';

export const App = () => {  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginForm />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<UserReg />} />
        <Route element={<RequireAuth />}>
          <Route element={<MainLayout />}>
            <Route path='lobby' element={<Lobby />} />
            <Route path='play/room/:roomId' element={<Play />} />
          </Route>
        </Route>
      </Route>
    </Routes>
    )
  }
