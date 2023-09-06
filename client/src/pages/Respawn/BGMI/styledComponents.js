import styled from 'styled-components';
import {
  Card,
  Grid,
  Input,
  InputBase,
  TextField,
  styled as muiStyled,
} from '@mui/material';

export const FormContainer = muiStyled('div')(({ theme }) => ({}));
export const FormInput = muiStyled(TextField)(({ theme }) => ({
  background: theme.palette.background.paper,
}));

export const StyledPlayersDetailsSection = muiStyled('div')(({ theme }) => ({
  padding: '10px 0px',
}));

export const FormSectionHeading = muiStyled('h4')(({ theme }) => ({
  margin: '10px 0px 20px 0px',
}));
