import Box from '@mui/material/Box';
import HideScrollTop from '@/components/common/hide-scroll-top/HideScrollTop';
import { MainContent } from '@/components/main/main-content';

export default function Home() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 3,
        paddingBottom: 10,
        overflowX: 'hidden',
      }}
    >
      <MainContent />
      <HideScrollTop />
    </Box>
  );
}
