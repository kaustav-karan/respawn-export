import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import RespawnFallBackPage from '@/pages/Respawn/RespawnFallBackPage';
import RespawnPage from '@/pages/Respawn';
import SinuSuspense from './SinuSuspense';

function Routing() {
  return (
    <Suspense fallback={<SinuSuspense />}>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/respawn/*" element={<RespawnFallBackPage />} />
        <Route path="/respawn/:game" element={<RespawnPage />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
      </Routes>
    </Suspense>
  );
}

export default Routing;
