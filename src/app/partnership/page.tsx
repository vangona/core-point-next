import Box from '@mui/material/Box';
import { Metadata } from 'next';
import GeneralHero from '@/components/layout/general-layout/GeneralHero';

export const metadata: Metadata = {
  title: '코어창업 | 협업 신청',
  description: '코어창업 협업 브랜드 신청',
};

export default function Partnership() {
  return (
    <>
      <GeneralHero />
      <Box>내용 확인 필요함</Box>
    </>
  );
}
