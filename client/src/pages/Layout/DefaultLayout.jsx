import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Footer from '@/components/layout/Footer';
import Routing from '@/routes/Routing';
import { DefaultLayoutContainer, RoutesContainer } from './styledComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/layout/Header';
import { selectBackgroundImage } from '@/features/user/userSlice';

export default function DefaultLayout() {
  const backgroundImage = useSelector(selectBackgroundImage);
  console.log(backgroundImage);

  return (
    <DefaultLayoutContainer backgroundImage={backgroundImage}>
      <Header />
      <RoutesContainer>
        <Routing />
      </RoutesContainer>
      <Footer />
    </DefaultLayoutContainer>
  );
}
