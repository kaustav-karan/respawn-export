import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import Routing from './routes/Routing';
import DefaultLayout from './pages/Layout/DefaultLayout';
import SinuSuspense from './routes/SinuSuspense';
import { Slide, ToastContainer } from 'react-toastify';
import { selectMode } from './features/user/userSlice';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const themeMode = useSelector(selectMode);
  return (
    <BrowserRouter>
      <Suspense fallback={<SinuSuspense />}>
        <CssBaseline />
        <DefaultLayout />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          theme={themeMode}
          pauseOnFocusLoss
          draggable
          transition={Slide}
          pauseOnHover
        />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
