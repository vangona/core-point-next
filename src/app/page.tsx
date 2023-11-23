import Box from '@mui/material/Box';
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
      }}
    >
      <MainContent />
    </Box>
  );
}
