import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { default as StyledLink } from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { DEFAULT_FOOTER_HEIGHT, DEFAULT_LAYOUT_WIDTH } from './constants';

const GeneralFooter = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: DEFAULT_FOOTER_HEIGHT,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main',
      }}
    >
      <Box
        sx={{
          width: DEFAULT_LAYOUT_WIDTH,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          color: 'primary.contrastText',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center ',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Image
              width={30}
              height={30}
              src='/core-icon-white.svg'
              alt='열쇠 모양에 Core Company라는 글자가 적혀있는 코어 창업 로고'
            />
            <Typography variant='subtitle1'>Core Point</Typography>
          </Box>
          <Typography variant='caption'>
            &copy; {new Date().getFullYear()} 코어컴퍼니
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 5,
            justifyContent: 'space-evenly',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Typography variant='subtitle2'>회사정보</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='caption'>사업자명 | 코어컴퍼니</Typography>
              <Typography variant='caption'>대표 | 조석훈</Typography>
            </Box>
          </Box>
          <Divider
            orientation='vertical'
            flexItem
            sx={{ height: '100%', backgroundColor: 'primary.dark' }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Typography variant='subtitle2'>연락처</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='caption'>
                전화번호 | 010-4537-5739
              </Typography>
              <Typography variant='caption'>
                이메일 | corepoint0905@naver.com
              </Typography>
            </Box>
          </Box>
          <Divider
            orientation='vertical'
            flexItem
            sx={{ height: '100%', backgroundColor: 'primary.dark' }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Typography variant='subtitle2'>SNS</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link legacyBehavior href='https://blog.naver.com/corepoint_'>
                <StyledLink color='primary.contrastText' variant='caption'>
                  네이버 블로그
                </StyledLink>
              </Link>
              <Link legacyBehavior href='https://open.kakao.com/o/stsH1PSf'>
                <StyledLink color='primary.contrastText' variant='caption'>
                  카카오톡 오픈채팅
                </StyledLink>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralFooter;
