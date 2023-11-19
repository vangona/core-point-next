import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '코어창업 | 창업 컨설팅',
  description: '코어창업 창업 컨설팅 신청',
};

export default function Opening() {
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
      <TextField label='창업 희망지역' variant='outlined' />
      <TextField label='예상 창업금액' variant='outlined' />
      <TextField label='희망업종' variant='outlined' />
      <TextField label='문의사항' variant='outlined' multiline fullWidth />
      <Button size='large' variant='contained'>
        컨설팅 신청하기
      </Button>
    </Box>
  );
}
