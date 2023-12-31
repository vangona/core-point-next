import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';
import { ADMIN_PAGE_NAME, ADMIN_PATH } from '../constants';

interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
  const { onDrawerToggle } = props;
  const pathname = usePathname() as ADMIN_PATH;
  const [title, setTitle] = useState(ADMIN_PAGE_NAME.OVERVIEW);

  useEffect(() => {
    switch (pathname) {
      case ADMIN_PATH.OVERVIEW:
        setTitle(ADMIN_PAGE_NAME.OVERVIEW);
        break;
      case ADMIN_PATH.STORE:
        setTitle(ADMIN_PAGE_NAME.STORE);
        break;
      case ADMIN_PATH.MAIN_HERO:
        setTitle(ADMIN_PAGE_NAME.MAIN_HERO);
        break;
      case ADMIN_PATH.MAIN_INFORMATION:
        setTitle(ADMIN_PAGE_NAME.MAIN_INFORMATION);
        break;
      case ADMIN_PATH.MAIN_SUCCESS_EXAMPLE:
        setTitle(ADMIN_PAGE_NAME.MAIN_SUCCESS_EXAMPLE);
        break;
      case ADMIN_PATH.MAIN_MANAGER:
        setTitle(ADMIN_PAGE_NAME.MAIN_MANAGER);
        break;
      case ADMIN_PATH.MAIN_BRAND:
        setTitle(ADMIN_PAGE_NAME.MAIN_BRAND);
        break;
      case ADMIN_PATH.PAGE_HERO:
        setTitle(ADMIN_PAGE_NAME.PAGE_HERO);
        break;
      case ADMIN_PATH.FOOTER:
        setTitle(ADMIN_PAGE_NAME.FOOTER);
        break;
      case ADMIN_PATH.PRIVATE_RULE:
        setTitle(ADMIN_PAGE_NAME.PRIVATE_RULE);
        break;
    }
    return () => {}; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <React.Fragment>
      <AppBar color='primary' position='sticky' elevation={0}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={onDrawerToggle}
            edge='start'
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBar
        component='div'
        color='primary'
        position='static'
        elevation={0}
        sx={{ pb: 3, zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems='center' spacing={1}>
            <Grid item xs>
              <Typography color='inherit' variant='h5' component='h1'>
                {title}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <AppBar
        component='div'
        position='static'
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={0} textColor='inherit'>
          <Tab label='Users' />
          <Tab label='Sign-in method' />
          <Tab label='Templates' />
          <Tab label='Usage' />
        </Tabs>
      </AppBar> */}
    </React.Fragment>
  );
}
