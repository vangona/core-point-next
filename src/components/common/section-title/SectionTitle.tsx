import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionTitleProps {
  label?: React.ReactNode;
}
const SectionTitle = (props: SectionTitleProps) => {
  const { label } = props;
  return (
    <Box sx={{ margin: 4 }}>
      <Typography
        variant='h6'
        component='h2'
        sx={{ display: 'inline' }}
        fontWeight='bold'
      >
        {label}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
