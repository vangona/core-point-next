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
import { hoverSx } from '@/components/styles/interactionSx';
import { CorePointRoutes } from '@/constants/routes';
import { DEFAULT_HEADER_HEIGHT, DEFAULT_LAYOUT_WIDTH } from './constants';
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const toolbarSx: SxProps = {
    maxWidth: DEFAULT_LAYOUT_WIDTH,
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
    <AppBar color='transparent' position='static' component='nav' sx={appbarSx}>
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
          <Link passHref legacyBehavior href={CorePointRoutes.STORE}>
            <StyledLink
              underline='none'
              sx={LinkSx}
              color={pathname === CorePointRoutes.STORE ? 'primary' : 'black'}
              fontWeight={
                pathname === CorePointRoutes.STORE ? 'bold' : 'normal'
              }
            >
              매물 정보
            </StyledLink>
          </Link>
          <Link
            passHref
            legacyBehavior
            href={CorePointRoutes.OPENING_CONSULTING}
          >
            <StyledLink
              underline='none'
              sx={LinkSx}
              color={
                pathname === CorePointRoutes.OPENING_CONSULTING
                  ? 'primary'
                  : 'black'
              }
              fontWeight={
                pathname === CorePointRoutes.OPENING_CONSULTING
                  ? 'bold'
                  : 'normal'
              }
            >
              창업 컨설팅
            </StyledLink>
          </Link>
          <Link
            passHref
            legacyBehavior
            href={CorePointRoutes.TRANSFER_CONSULTING}
          >
            <StyledLink
              underline='none'
              sx={LinkSx}
              color={
                pathname === CorePointRoutes.TRANSFER_CONSULTING
                  ? 'primary'
                  : 'black'
              }
              fontWeight={
                pathname === CorePointRoutes.TRANSFER_CONSULTING
                  ? 'bold'
                  : 'normal'
              }
            >
              양도 컨설팅
            </StyledLink>
          </Link>
          <Link passHref legacyBehavior href={CorePointRoutes.PARTNERSHIP}>
            <StyledLink
              underline='none'
              sx={LinkSx}
              color={
                pathname === CorePointRoutes.PARTNERSHIP ? 'primary' : 'black'
              }
              fontWeight={
                pathname === CorePointRoutes.PARTNERSHIP ? 'bold' : 'normal'
              }
            >
              협업 신청
            </StyledLink>
          </Link>
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
      <NavDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </AppBar>
  );
};

export default GeneralHeader;
