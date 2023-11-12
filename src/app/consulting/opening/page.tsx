import { Box, Button, TextField } from '@mui/material';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';

export default function Opening() {
  return (
    <Box
      sx={{
        width: DEFAULT_LAYOUT_WIDTH,
      }}
    >
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
    </Box>
  );
}
