import styled from 'styled-components';
import {
  ButtonBase,
  Card,
  Grid,
  Input,
  InputBase,
  TextField,
  styled as muiStyled,
} from '@mui/material';

export const FormContainer = muiStyled('form')(({ theme }) => ({}));
export const FormInput = muiStyled(TextField)(({ theme }) => ({
  background: theme.palette.background.paper,
}));

export const StyledPlayersDetailsSection = muiStyled('div')(({ theme }) => ({
  padding: '10px 0px',
}));

export const FormSectionHeading = muiStyled('h4')(({ theme }) => ({
  margin: '10px 0px 20px 0px',
}));

export const IDImage = styled.img`
  width: 300px;
`;

export const ImagePlaceholder = muiStyled(ButtonBase)(({ theme }) => ({
  background: theme.palette.grey[600],
  borderRadius: '10px',
  padding: '10px',
  width: '300px',
  height: '300px',
  fontSize: '20px',
}));
export const ImageButtonContainer = muiStyled(ButtonBase)(({ theme }) => ({
  background: 'transparent',
  borderRadius: '10px',
  overflow: 'hidden',
  fontSize: '20px',
}));


