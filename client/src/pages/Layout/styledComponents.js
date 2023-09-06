import { styled } from 'styled-components';
import { styled as muiStyled } from '@mui/material';
import { Container } from 'react-bootstrap';

export const DefaultLayoutContainer = muiStyled('div')(
  ({ theme, backgroundImage }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: backgroundImage
      ? `url(${backgroundImage})`
      : theme.palette.background.body,
  }),
);

export const DefaultLayoutChildren = styled.div``;

export const RoutesContainer = muiStyled(Container)(({ theme }) => ({
  minHeight: '70vh',
}));
