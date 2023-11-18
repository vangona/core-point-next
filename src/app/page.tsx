'use client';

import ArrowUpwardRounded from '@mui/icons-material/ArrowUpwardRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useGetStore } from '@/api/store';
import { SectionTitle } from '@/components/common/section-title';
import NewlyAddedStore from '@/components/main/newly-added-store/NewlyAddedStore';
import RecommendedStore from '@/components/main/recommended-store/RecommendedStore';
import { SectionLayout } from '@/components/main/section-layout';
import SuccessExample from '@/components/main/success-example-store/SuccessExampleStore';

export default function Home() {
  const { data, isLoading } = useGetStore({ page: '1', limit: '20' });

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
      <RecommendedStore storeDataArr={data.data} isLoading={isLoading} />
      <SuccessExample />
      <NewlyAddedStore storeDataArr={data.data} isLoading={isLoading} />
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
