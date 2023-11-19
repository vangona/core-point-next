'use client';

import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useGetStore } from '@/api/store';
import HideScrollTop from '@/components/common/hide-scroll-top/HideScrollTop';
import { SectionTitle } from '@/components/common/section-title';
import NewlyAddedStore from '@/components/main/newly-added-store/NewlyAddedStore';
import RecommendedStore from '@/components/main/recommended-store/RecommendedStore';
import { SectionLayout } from '@/components/main/section-layout';
import SuccessExample from '@/components/main/success-example-store/SuccessExampleStore';

export default function Home() {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));
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
      <SectionLayout color='white' innerSx={{ gap: 8 }}>
        {isDownMedium ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant='h4' component='h3' fontWeight='bold'>
              창업의 문을 여는 열쇠
            </Typography>
            <Typography
              variant='h4'
              component='h3'
              fontWeight='bold'
              color='primary.main'
            >
              코어창업
            </Typography>
          </Box>
        ) : (
          <Typography variant='h4' component='h3' fontWeight='bold'>
            {'창업의 문을 여는 열쇠, '}
            <Box display='inline' color='primary.main'>
              코어창업
            </Box>
          </Typography>
        )}
        <Button variant='contained' size='large' sx={{ fontWeight: 'bold' }}>
          상담 신청하기
        </Button>
      </SectionLayout>
      <HideScrollTop />
    </Box>
  );
}
