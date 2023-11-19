import Box from '@mui/material/Box';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '코어창업 | 협업 신청',
  description: '코어창업 협업 브랜드 신청',
};

export default function Partnership() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        alignItems: 'flex-start',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
      }}
    >
      내용 확인 필요함
    </Box>
  );
}
