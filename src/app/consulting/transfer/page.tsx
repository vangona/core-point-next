import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '코어창업 | 양도 컨설팅',
  description: '코어창업 양도 컨설팅 신청',
};

export default function Transfer() {
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
      <TextField label='성함' variant='outlined' />
      <TextField label='연락처' variant='outlined' />
      <TextField label='사업체 위치' variant='outlined' />
      <TextField label='사업체 크기' variant='outlined' />
      <TextField label='상호' variant='outlined' />
      <TextField label='업종' variant='outlined' />
      <TextField label='문의사항' variant='outlined' multiline fullWidth />
      <Box>신청 후 담당자 배정하여 연락 드릴 예정입니다.</Box>
      <Button size='large' variant='contained'>
        컨설팅 신청하기
      </Button>
    </Box>
  );
}
