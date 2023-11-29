import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      <AppBar color='primary' position='sticky' elevation={0}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={onDrawerToggle}
            edge='start'
            sx={{ display: { sm: 'none', xs: 'block' } }}
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
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems='center' spacing={1}>
            <Grid item xs>
              <Typography color='inherit' variant='h5' component='h1'>
                Authentication
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
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
      </AppBar>
    </React.Fragment>
  );
}
