import styled from 'styled-components';
import { Card, CardContent, Grid, styled as muiStyled } from '@mui/material';

export const StyledRespawnGameCard = muiStyled(Card)(({ theme }) => ({
  background: theme.palette.background.cardBackground,
}));
export const RespawnGameCardHoverBorder = muiStyled('div')(({ theme }) => ({
  padding: '2px',
  borderRadius: '4px',
  transition: 'linear 200ms  background',
  ':hover': {
    background: theme.palette.primary.main,
  },
}));

export const RespawnContainer = muiStyled('div')(
  ({ theme, backgroundImage }) => ({
    position: 'relative',
    padding: '20px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    '::before': {
      content: '""',
      opacity: 0.1,
      position: 'absolute',
      height: '100%',
      width: '100%',
      background: `url(${backgroundImage})`,
    },
  }),
  // ({h1}) => ({
  //   position: 'absolute',
  //   alignContent: 'center'
  // })
);
export const RegisterationsContainer = muiStyled('div')(
  ({ theme, backgroundImage }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3px',
  }),
  // ({h1}) => ({
  //   position: 'absolute',
  //   alignContent: 'center'
  // })
);

export const SectionHeading = styled.h1`
  font-size: 44px;
  font-family: 'Bakbak One';
`;

export const RespawnDetails = muiStyled('div')(
  ({ theme }) => `
  > .resp-header {
    font-size: ${theme.typography.h1.fontSize};
    font-weight: ${theme.typography.h1.fontWeight};
  };
  > .respawn-info {
    font-size: ${theme.typography.body2.fontSize};
    font-weight: ${theme.typography.body2.fontWeight};
  };
  > .titleImg {
    border-radius: 15px;
  };
`,
);
export const SkoreInformation = muiStyled('div')(
  ({ theme }) => `
  box-sizing: border-box;
  > .resp-header {
    font-size: ${theme.typography.h1.fontSize};
    font-weight: ${theme.typography.h1.fontWeight};
  };
  > .respawn-info {
    font-size: ${theme.typography.body2.fontSize};
    font-weight: ${theme.typography.body2.fontWeight};
  };

`,
);

export const GameCardContainer = muiStyled(CardContent)(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  padding: 10px 0px 5px 0px;
`,
);
