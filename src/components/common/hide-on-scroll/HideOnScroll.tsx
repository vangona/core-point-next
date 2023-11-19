import React from 'react';
import { useScrollTrigger } from '@mui/material';
import Slide from '@mui/material/Slide';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideOnScroll;
