import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Brightness4, Inbox, Mail } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Container } from 'react-bootstrap';
import fullLogo from '@/assets/img/logo/home.png';
import {
  AppNavDrawer,
  DrawerLink,
  HeaderBar,
  HeaderHamburger,
  HeaderHamburgerContainer,
  HeaderLink,
  HeaderLinkContainer,
  SinuLogoHeader,
} from './styledComponents';
import { changeMode, selectMode } from '@/features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const pages = [
  { page: 'Home', href: 'https://sinusoid.in/' },
  { page: 'Events', href: 'https://sinusoid.in/events.html' },
  { page: 'Respawn', href: '/respawn' },
  {
    page: 'Previous Sponsors',
    href: 'https://sinusoid.in/sponsors.html',
  },
  // { page: 'Artists', href: '/aritsts' },
  // { page: 'Indradhanush', href: '/indradhanush' },
  { page: 'About Us', href: 'https://sinusoid.in/about.html' },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showAppDrawer, setShowAppDrawer] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <HeaderBar
        position="sticky"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-between',
          }}
          className="container g-0"
          disableGutters
        >
          <SinuLogoHeader src={fullLogo} alt="headerlogo" />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', lg: 'flex' },
              gap: '30px',
              ml: '25px',
            }}
          >
            {pages.map(({ page, href }) => (
              <HeaderLinkContainer key={page}>
                <HeaderLink
                  underline="none"
                  href={href}
                  onClick={handleCloseNavMenu}
                >
                  {page}
                </HeaderLink>
              </HeaderLinkContainer>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton onClick={() => dispatch(changeMode())}>
              <Brightness4
                sx={{
                  color: 'text.primary',
                  transition: 'transform 0.4s',
                  transform:
                    mode === 'dark' ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              />
            </IconButton>
          </Box>
          <HeaderHamburgerContainer
            sx={{
              flexGrow: 0,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton onClick={() => setShowAppDrawer((prev) => !prev)}>
              <HeaderHamburger />
            </IconButton>
          </HeaderHamburgerContainer>
        </Toolbar>
      </HeaderBar>
      <AppNavDrawer
        anchor="top"
        onClose={() => setShowAppDrawer((prev) => false)}
        open={showAppDrawer}
      >
        <Box sx={{ height: '140px' }} />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {pages.map(({ page, href }) => (
              <ListItem
                component={DrawerLink}
                href={href}
                key={page}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText primary={page} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </AppNavDrawer>
    </>
  );
}
export default Header;
