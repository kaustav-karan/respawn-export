import styled from 'styled-components';
import { AppBar, Box, Drawer, Link, styled as muiStyled } from '@mui/material';
import { Col, Container } from 'react-bootstrap';
import footerBackground from '@/assets/img/website/background/bg-footer.jpg';
import { Menu } from '@mui/icons-material';

export const FooterContainer = styled.footer`
  padding: 61px 0 40px;
  background: url(${footerBackground});
  color: 'white';
`;
export const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const BottomFooter = styled.footer``;
export const WidgetContainer = styled.div``;
export const LogoContainer = styled.div`
  margin-bottom: 13px;
`;
export const SinuLogo = styled.img``;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const FestInfo = styled(Col)`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
export const SiteInfo = styled(Col)`
  display: flex;
  jusitfy-content: center;
  align-items: center;
`;

export const EventTagLine = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
`;

export const SinuLogoHeader = styled.img`
  height: 100px;
  max-width: 100%;
`;

export const HeaderBar = muiStyled(AppBar)(({ theme }) => ({
  background: `${theme.palette.background.paper} !important`,
  paddingTop: 20,
  paddingBottom: 20,
}));

export const HeaderLink = muiStyled(Link)(({ theme }) => ({
  fontFamily: 'Bakbak One',
  my: 2,
  color: theme.palette.text.primary,
  display: 'block',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  ':hover': {
    color: theme.palette.primary.main,
  },
  ':hover::before': {
    opacity: 6,
  },
  '::before': {
    opacity: 0,
    position: 'absolute',
    bottom: -4,
    height: '2px',
    content: '""',
    width: '100%',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    transition: `all 0.3s ease`,
  },
  transition: `all 0.3s ${theme.transitions.easing.easeInOut}`,
}));

export const HeaderLinkContainer = muiStyled('div')(({ theme }) => ({
  position: 'relative',
}));

export const FooterLink = muiStyled(Link)(({ theme }) => ({
  color: '#C2C3C5',
  font: '14px "Poppins", sans-serif',
  width: '130px',
}));

export const FooterHeader = muiStyled('h5')(({ theme }) => ({
  color: '#C2C3C5',
  fontFamily: '"Bakbak One", sans-serif',
  width: '130px',
}));

export const HeaderHamburger = muiStyled(Menu)(
  ({ theme }) => `
  color: ${theme.palette.text.primary},
`,
);

export const AppNavDrawer = muiStyled(Drawer)(
  ({ theme }) => `
  background: ${theme.palette.background.paper},
`,
);

export const DrawerLink = muiStyled(Link)(
  ({ theme }) => `
  color: ${theme.palette.text.primary};
`,
);

export const HeaderHamburgerContainer = muiStyled(Box)(
  ({ theme }) => `
  display: block;
  @media (min-width: 1200px){
    display: none;
  }
`,
);
