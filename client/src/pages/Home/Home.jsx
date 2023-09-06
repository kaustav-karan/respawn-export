import React, { Suspense, useEffect, useState } from 'react';
import {
  Typography,
  Stack,
  Container,
  CircularProgress,
  Box,
} from '@mui/material';
import Spline from '@splinetool/react-spline';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [loading, setLoading] = useState({
    mascot: true,
  });
  const navigate = useNavigate();

  function handleChangeLoading(id, value) {
    setLoading((prev) => ({ ...prev, [id]: value }));
  }

  useEffect(() => {
    navigate('respawn');
  });

  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      {/* {loading.mascot && (
        <Box
          height="550px"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      )} */}
      <LoadingOverlay active={loading?.mascot} spinner>
        <Spline
          scene="https://prod.spline.design/7FCuvubpOHGUbSuV/scene.splinecode"
          onLoad={() => {
            handleChangeLoading('mascot', false);
          }}
          style={{
            height: '550px',
            width: '100%',
          }}
        />
      </LoadingOverlay>
      {/* <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Viterjs-template
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          React + Redux + MuI + Axios + ESlint + Prettier
        </Typography>
      </Stack>
      <TemplateTester />
      <Counter /> */}
    </Container>
  );
}

export default Home;
