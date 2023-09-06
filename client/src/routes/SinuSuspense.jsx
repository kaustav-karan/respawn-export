import { CircularProgress } from '@mui/material';
import React from 'react';

export default function SinuSuspense() {
  return (
    <div
      style={{ height: '100vh', width: '100vw' }}
      className="d-flex justify-content-center align-items-center"
    >
      <CircularProgress />
    </div>
  );
}
