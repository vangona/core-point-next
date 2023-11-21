'use client';

import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import StyledLink from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import HideOnScroll from '@/components/common/hide-on-scroll/HideOnScroll';
import { hoverSx } from '@/components/styles/interactionSx';
import { OFF_WHITE_COLOR } from '@/constants/color';
import { CorePointRoutes } from '@/constants/routes';
import { DEFAULT_HEADER_HEIGHT, NAV_DATA_ARR } from './constants';
import NavDrawer from './NavDrawer';
import type { SxProps } from '@mui/material';

interface GeneralHeaderProps {
  sx?: SxProps;
}
const GeneralHeader = (props: GeneralHeaderProps) => {
  const { sx } = props;
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  const onLogoClick = () => {
    router.push(CorePointRoutes.HOME);
  };

  const appbarSx: SxProps = {
    position: 'sticky',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: OFF_WHITE_COLOR,
    zIndex: 99,
  };

  const toolbarSx: SxProps = {
    maxWidth: '100%',
    width: '100%',
    height: DEFAULT_HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-between',
    ...sx,
  };

  const leftAreaSx: SxProps = {
    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  };

  const logoSx: SxProps = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    transition: 'all 0.3s ease-in-out',
    ...hoverSx,
    '&:hover': {
      transform: 'scale(1.03) translateX(-50%)',
      cursor: 'pointer',
    },
    [theme.breakpoints.down('lg')]: {
      position: 'static',
    },
    [theme.breakpoints.down('md')]: {
      left: '0%',
      transform: 'translate(24px)',
    },
  };

  const rightAreaSx: SxProps = {
    display: 'flex',
    gap: 3,
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  };

  const LinkSx: SxProps = {
    ...hoverSx,
  };

  return (
    <HideOnScroll>
      <AppBar
        color='transparent'
        position='static'
        component='nav'
        sx={appbarSx}
      >
        <Toolbar sx={toolbarSx}>
          {/* left area */}
          <Box sx={leftAreaSx}>
            {'창업을 위한 '}
            <Typography fontWeight='bold' display='inline' color='primary'>
              열쇠
            </Typography>
            가 되어드리겠습니다
          </Box>
          {/* center area */}
          <Box sx={logoSx} onClick={onLogoClick}>
            <Image
              width={120}
              height={60}
              src='/logo.png'
              alt='열쇠 모양에 Core Company라는 글자가 적혀있는 코어 창업 로고'
            />
          </Box>
          {/* right area */}
          <Box sx={rightAreaSx}>
            {NAV_DATA_ARR.map((navData) => (
              <Link
                key={'nav' + navData.href}
                passHref
                legacyBehavior
                href={navData.href}
              >
                <StyledLink
                  underline='none'
                  sx={LinkSx}
                  color={pathname === navData.href ? 'primary' : 'black'}
                  fontWeight={pathname === navData.href ? 'bold' : 'normal'}
                >
                  {navData.label}
                </StyledLink>
              </Link>
            ))}
          </Box>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={toggleDrawer}
            sx={(theme) => ({
              mr: 3,
              display: 'none',
              [theme.breakpoints.down('lg')]: { display: 'block' },
            })}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <NavDrawer
          isOpen={isDrawerOpen}
          onClose={toggleDrawer}
          navDataArr={NAV_DATA_ARR}
        />
      </AppBar>
    </HideOnScroll>
  );
};

export default GeneralHeader;
