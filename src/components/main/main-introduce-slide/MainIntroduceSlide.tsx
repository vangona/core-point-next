import { keyframes, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const INTRO_ANIMATION_DURATION = '1s';
const FONT_SIZE_DURATION = '300ms';
const INTRO_ANIMATION_DURATION_AFTER = '1.3s';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const zoomIn = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
`;

const slideRightIn = keyframes`
  0% { opacity: 0; transform: translateX(0); }
  100% { opacity: 1; transform: translateX(-10px); }
`;

const slideLeftIn = keyframes`
  0% { opacity: 0; transform: translateX(0); }
  100% { opacity: 1; transform: translateX(10px); }
`;

const MainIntroduceSlide = () => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isDownSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const titleSize = (() => {
    if (isDownSmall) return 'h6';
    if (isDownMedium) return 'h5';
    return 'h4';
  })();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9,
          color: 'primary.contrastText',
          gap: 8,
          padding: isDownMedium ? 3 : undefined,
        }}
      >
        <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
          <Box
            sx={{
              display: 'flex',
              animation: `${slideRightIn} ${INTRO_ANIMATION_DURATION} ease-in-out forwards`,
            }}
          >
            <Typography variant={titleSize} component='h5' mr={1}>
              코어창업이
            </Typography>
            <Typography
              display='inline'
              color='primary.main'
              fontWeight='bold'
              variant={titleSize}
              component='h5'
              sx={{
                mx: 1,
                animation: `${zoomIn} ${FONT_SIZE_DURATION} ease-in-out forwards`,
                animationDelay: INTRO_ANIMATION_DURATION,
              }}
            >
              창업의 문
            </Typography>
            <Typography mr={1} variant={titleSize} component='h5'>
              을 여는{' '}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              animation: `${slideLeftIn} ${INTRO_ANIMATION_DURATION} ease-in-out forwards`,
            }}
          >
            <Typography
              display='inline'
              color='primary.main'
              fontWeight='bold'
              variant={titleSize}
              component='h5'
              sx={{
                mx: 1,
                animation: `${zoomIn} ${FONT_SIZE_DURATION} ease-in-out forwards`,
                animationDelay: INTRO_ANIMATION_DURATION_AFTER,
              }}
            >
              열쇠
            </Typography>
            <Typography variant={titleSize} component='h5'>
              가 되어 드리겠습니다.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          '&:after': {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            content: '""',
            opacity: 0.8,
            background: 'linear-gradient(45deg, #FFFFFF 30%, #000000 90%)',
            backgroundSize: '200% 200%',
            animation: `${gradientAnimation} 3s ease forwards`,
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            fill
            objectFit='cover'
            src={'/main-hero.webp'}
            alt='hero image'
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainIntroduceSlide;
