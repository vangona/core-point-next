import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { SectionTitle } from '@/components/common/section-title';
import { SectionLayout } from '../section-layout';

const ManagerSection = () => {
  const [currManager, setCurrManager] = useState(0);

  return (
    <SectionLayout>
      <SectionTitle label='매니저 소개' />
      <ParagraphDivider />
      <Box
        sx={{ width: '100%', height: '650px', display: 'flex', mt: 5, gap: 3 }}
      >
        {currManager === 0 && (
          <Box
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
            <Image
              fill
              objectFit='cover'
              src='/manager-test.png'
              alt='manager image'
            />
            <Box sx={{ position: 'absolute', top: '30px' }}>
              <Rating value={4} />
              <Typography color='white' variant='h4' component='h5'>
                김관경 매니저
              </Typography>
            </Box>
            <Box sx={{ position: 'absolute', bottom: '50px' }}>
              <Typography color='white'>전설의 포켓몬</Typography>
              <Typography variant='h5' color='white' component='h6'>
                김관경 | 010-6232-4393
              </Typography>
              <Typography color='white' mt={2}>
                아이스크림 ﹒ 치킨 ﹒ 카페 전문 매니저
              </Typography>
              <Typography color='white' mt={2}>
                친절한 상담을 돕겠습니다.
              </Typography>
            </Box>
          </Box>
        )}
        {currManager === 1 && (
          <Box
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
