import React from 'react';
import {Routes, Route} from "react-router-dom";
import { Layout } from './pages/Layout.jsx';
import { PublicRoutes } from './routes/PublicRoutes.jsx';
import { PrivateRoutes } from './routes/PrivateRoutes.jsx';

export const App = () => {  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/auth/*" element={<PrivateRoutes />}/>
      </Route>
    </Routes>
    )
  }
  