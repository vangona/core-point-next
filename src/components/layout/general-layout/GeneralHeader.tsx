'use client';

import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import StyledLink from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useParams, usePathname, useRouter } from 'next/navigation';
import HideOnScroll from '@/components/common/hide-on-scroll/HideOnScroll';
import ProgressBackdrop from '@/components/common/progress-backdrop/ProgressBackdrop';
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
  const params = useParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBackdrop, setIsBackdrop] = useState(false);
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const openBackdrop = () => {
    setIsBackdrop(true);
  };

  const handleNavClick = (newHref: string) => {
    openBackdrop();
    router.push(newHref);
  };

  const onLogoClick = () => {
    if (pathname === CorePointRoutes.HOME) return;

    openBackdrop();
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
    paddingX: !isSmall ? 2 : 0,
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
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
      '&:hover': {
        transform: 'scale(1.03) translateX(24px)',
        cursor: 'pointer',
      },
    },
  };

  const rightAreaSx: SxProps = {
    height: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  };

  const LinkSx: SxProps = {
    ...hoverSx,
  };

  // 경로나 param이 변경되면 backdrop 닫음
  useEffect(() => {
    setIsBackdrop(false);
  }, [pathname, params]);

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
          <Box sx={leftAreaSx} fontFamily='NanumSquare' fontWeight='700'>
            {'창업을 위한 '}
            <Typography fontWeight='900' display='inline' color='primary'>
              열쇠
            </Typography>
            가 되어드리겠습니다
          </Box>
          {/* center area */}
          <Box sx={logoSx} onClick={onLogoClick}>
            <Image
              width={60}
              height={60}
              src={'/core-icon.png'}
              alt='열쇠 모양에 Core Company라는 글자가 적혀있는 코어 창업 로고'
            />
            {!isSmall && (
              <Typography
                variant='h5'
                component='h1'
                fontFamily='NanumSquare'
                fontWeight='bold'
              >
                코어창업
              </Typography>
            )}
          </Box>
          {/* right area */}
          <Box sx={rightAreaSx}>
            {NAV_DATA_ARR.map((navData, index) => (
              <>
                <StyledLink
                  onClick={() => handleNavClick(navData.href)}
                  key={'nav' + navData.href}
                  underline='none'
                  sx={LinkSx}
                  color={pathname === navData.href ? 'primary' : 'black'}
                  fontSize='1.1rem'
                  fontFamily='NanumSquare'
                  fontWeight={pathname === navData.href ? '900' : 'bold'}
                >
                  {navData.label}
                </StyledLink>
                {index !== NAV_DATA_ARR.length - 1 && (
                  <Divider
                    orientation='vertical'
                    sx={{
                      display: 'flex',
                      flexShrink: 0,
                      flexGrow: 1,
                      height: '100%',
                    }}
                  />
                )}
              </>
            ))}
          </Box>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={openDrawer}
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
          onClose={closeDrawer}
          navDataArr={NAV_DATA_ARR}
          onNavClick={handleNavClick}
        />
        <ProgressBackdrop open={isBackdrop} />
      </AppBar>
    </HideOnScroll>
  );
};

export default GeneralHeader;
