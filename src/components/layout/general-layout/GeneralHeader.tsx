'use client';

import { Box, Link as StyledLink } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { hoverSx } from '@/components/styles/interactionSx';
import { CorePointRoutes } from '@/constants/routes';
import { DEFAULT_HEADER_HEIGHT, DEFAULT_LAYOUT_WIDTH } from './constants';
import type { SxProps } from '@mui/material';

interface GeneralHeaderProps {
  sx?: SxProps;
}
const GeneralHeader = (props: GeneralHeaderProps) => {
  const { sx } = props;
  const router = useRouter();
  const pathname = usePathname();

  const onLogoClick = () => {
    router.push(CorePointRoutes.HOME);
  };
  const logoSx: SxProps = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    ...hoverSx,
    '&:hover': {
      transform: 'scale(1.03) translateX(-50%)',
      cursor: 'pointer',
    },
  };

  const LinkSx: SxProps = {
    ...hoverSx,
  };

  return (
    <Box
      sx={{
        maxWidth: DEFAULT_LAYOUT_WIDTH,
        width: DEFAULT_LAYOUT_WIDTH,
        height: DEFAULT_HEADER_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...sx,
      }}
    >
      {/* left area */}
      <Box>코어창업이 열쇠가 되어드리겠습니다.</Box>
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
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Link passHref legacyBehavior href={CorePointRoutes.STORE}>
          <StyledLink
            underline='none'
            sx={LinkSx}
            color={pathname === CorePointRoutes.STORE ? 'primary' : 'black'}
            fontWeight={pathname === CorePointRoutes.STORE ? 'bold' : 'normal'}
          >
            매물 정보
          </StyledLink>
        </Link>
        <Link passHref legacyBehavior href={CorePointRoutes.OPENING_CONSULTING}>
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
    </Box>
  );
};

export default GeneralHeader;
