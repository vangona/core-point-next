import { Box } from '@mui/material';
import Image from 'next/image';
import { DEFAULT_HERO_HEIGHT } from './constants';

const GeneralHero = () => {
  return (
    <Box
      border='1px solid black'
      sx={{ width: '100%', height: DEFAULT_HERO_HEIGHT, position: 'relative' }}
    >
      <Box sx={{ position: 'absolute' }}>Hero</Box>
      <Image
        fill
        alt='hero image'
        src='https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'
      />
    </Box>
  );
};

export default GeneralHero;
