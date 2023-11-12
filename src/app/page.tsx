'use client';

import { ArrowUpwardRounded } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { SectionTitle } from '@/components/common/section-title';
import NewlyAddedStore from '@/components/main/newly-added-store/NewlyAddedStore';
import RecommendedStore from '@/components/main/recommended-store/RecommendedStore';
import { SectionLayout } from '@/components/main/section-layout';
import SuccessExample from '@/components/main/success-example-store/SuccessExampleStore';

export default function Home() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: 3,
        paddingBottom: 10,
      }}
    >
      <SectionLayout
        color='white'
        height='300px'
        disableDivider
        sx={{ my: 5 }}
        innerSx={{ gap: 1 }}
      >
        <Box>
          <Typography variant='h4' component='h3' fontWeight='bold'>
            <Box display='inline' color='primary.main'>
              코어창업
            </Box>
            {'이 '}
            <Box display='inline' color='primary.main'>
              창업의 문
            </Box>
            을 여는
          </Typography>
        </Box>
        <Box>
          <Typography variant='h4' component='h3' fontWeight='bold'>
            <Box display='inline' color='primary.main'>
              열쇠
            </Box>
            가 되어 드리겠습니다.
          </Typography>
        </Box>
      </SectionLayout>
      <RecommendedStore />
      <SuccessExample />
      <NewlyAddedStore />
      <SectionLayout color='white'>
        <SectionTitle label='협업 브랜드' />
      </SectionLayout>
      <SectionLayout color='white' disableDivider innerSx={{ gap: 8 }}>
        <Typography variant='h4' component='h3' fontWeight='bold'>
          {'창업의 문을 여는 열쇠, '}
          <Box display='inline' color='primary.main'>
            코어창업
          </Box>
        </Typography>
        <Button variant='contained' size='large' sx={{ fontWeight: 'bold' }}>
          상담 신청하기
        </Button>
      </SectionLayout>
      <IconButton
        sx={{ alignSelf: 'center' }}
        onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpwardRounded />
      </IconButton>
    </Box>
  );
}
