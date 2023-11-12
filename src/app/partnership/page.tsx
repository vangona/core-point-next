import { Box } from '@mui/material';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';

export default function Partnership() {
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
        내용 확인 필요함
      </Box>
    </Box>
  );
}
