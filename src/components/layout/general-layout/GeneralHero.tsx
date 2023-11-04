import { Box } from '@mui/material';
import Image from 'next/image';

const GeneralHero = () => {
  return (
    <Box border='1px solid black'>
      <Box sx={{ position: 'absolute' }}>Hero</Box>
      <Image
        width={500}
        height={500}
        alt='hero image'
        src='https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8'
      />
    </Box>
  );
};

export default GeneralHero;
