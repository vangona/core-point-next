import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { SectionTitle } from '@/components/common/section-title';
import { SectionLayout } from '../section-layout';

const ManagerSection = () => {
  const theme = useTheme();
  const [currManager, setCurrManager] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDListElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const x = e.offsetX;
    const y = e.offsetY;
    const rotateY = (1 / 40) * x - 5; // 가로로 회전
    const rotateX = (-1 / 65) * y + 5; // 세로로 회전
    cardRef.current!.style.transform = `perspective(650px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    overlayRef.current!.style.backgroundPositionX = `${x / 4}%`;
    overlayRef.current!.style.backgroundPositionY = `${y / 6}%`;
    console.log(x / 4, y / 6, x, y);
  };

  const handleMouseOut = () => {
    cardRef.current!.style.transform =
      'perspective(650px) rotateX(0deg) rotateY(0deg)';
    cardRef.current!.style.backgroundPosition = '100%';
  };

  useEffect(() => {
    const cardDom = cardRef.current;

    if (cardDom) {
      cardDom.addEventListener('mousemove', handleMouseMove);
      cardDom.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (cardDom) {
        cardDom.removeEventListener('mousemove', handleMouseMove);
        cardDom.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, [cardRef, overlayRef, currManager]);

  return (
    <SectionLayout>
      <SectionTitle label='매니저 소개' />
      <ParagraphDivider />
      <Box
        sx={{ width: '100%', height: '650px', display: 'flex', mt: 5, gap: 3 }}
      >
        {currManager === 0 && (
          <Box
            ref={cardRef}
            sx={{
              position: 'relative',
              width: '400px',
              height: '600px',
              border: '10px solid',
              borderColor: 'divider',
              borderRadius: 3,
              padding: 3,
              transition: 'transform 0.1s linear',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom right, black, white)',
              }}
            />
            <Box
              className='overlay'
              ref={overlayRef}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(120deg, transparent 40%, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, transparent 54%)`,
                backgroundSize: '150% 150%',
                filter: 'brightness(1.2) opacity(0.6)',
                mixBlendMode: 'color-dodge',
                backgroundPosition: '100%',
              }}
            />
            <Image
              fill
              objectFit='cover'
              src='/manager-test.png'
              alt='manager image'
            />
            <Box sx={{ position: 'absolute', top: '30px' }}>
              <Rating value={4} />
              <Typography
                color='white'
                variant='h4'
                component='h5'
                sx={{ userSelect: 'none', pointerEvents: 'none' }}
              >
                김관경 매니저
              </Typography>
            </Box>
            <Box sx={{ position: 'absolute', bottom: '50px' }}>
              <Typography
                color='white'
                sx={{ userSelect: 'none', pointerEvents: 'none' }}
              >
                전설의 포켓몬
              </Typography>
              <Typography
                variant='h5'
                color='white'
                component='h6'
                sx={{ userSelect: 'none', pointerEvents: 'none' }}
              >
                김관경 | 010-6232-4393
              </Typography>
              <Typography
                color='white'
                mt={2}
                sx={{ userSelect: 'none', pointerEvents: 'none' }}
              >
                아이스크림 ﹒ 치킨 ﹒ 카페 전문 매니저
              </Typography>
              <Typography
                color='white'
                mt={2}
                sx={{ userSelect: 'none', pointerEvents: 'none' }}
              >
                친절한 상담을 돕겠습니다.
              </Typography>
            </Box>
          </Box>
        )}
        {currManager === 1 && (
          <Box
            ref={cardRef}
            sx={{
              position: 'relative',
              width: '400px',
              height: '600px',
              border: '10px solid',
              borderColor: 'divider',
              borderRadius: 3,
              padding: 3,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom right, black, white)',
              }}
            />
            <Box
              className='overlay'
              ref={overlayRef}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(120deg, transparent 40%, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, transparent 54%)`,
                backgroundSize: '150% 150%',
                filter: 'brightness(1.2) opacity(0.6)',
                mixBlendMode: 'color-dodge',
                backgroundPosition: '100%',
              }}
            />
            <Image
              fill
              objectFit='cover'
              src='/manager-test2.png'
              alt='manager image'
            />
            <Box sx={{ position: 'absolute', top: '30px' }}>
              <Rating value={2} />
              <Typography color='white' variant='h4' component='h5'>
                빈센트 매니저
              </Typography>
            </Box>
            <Box sx={{ position: 'absolute', bottom: '50px' }}>
              <Typography color='white'>전설의 포켓몬</Typography>
              <Typography variant='h5' color='white' component='h6'>
                빈센트 | 010-6232-4393
              </Typography>
              <Typography color='white' mt={2}>
                파닭 ﹒ 스포츠용품 전문 매니저
              </Typography>
              <Typography color='white' mt={2}>
                친절한 상담을 안 돕겠습니다.
              </Typography>
            </Box>
          </Box>
        )}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box
            onClick={() => setCurrManager(0)}
            sx={{
              width: '200px',
              height: '200px',
              position: 'relative',
              border: '1px solid',
              borderColor: 'divider',
              transition: '0.3s all ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                cursor: 'pointer',
                filter: 'sepia(100%)',
              },
            }}
          >
            <Image
              fill
              objectFit='cover'
              src='/manager-test.png'
              alt='manager image'
            />
          </Box>
          <Box
            onClick={() => setCurrManager(1)}
            sx={{
              width: '200px',
              height: '200px',
              position: 'relative',
              border: '1px solid',
              borderColor: 'divider',
              transition: '0.3s all ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                cursor: 'pointer',
                filter: 'sepia(100%)',
              },
            }}
          >
            <Image
              fill
              objectFit='cover'
              src='/manager-test2.png'
              alt='manager image'
            />
          </Box>
        </Box>
      </Box>
    </SectionLayout>
  );
};

export default ManagerSection;
