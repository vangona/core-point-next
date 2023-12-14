import React from 'react';
import Typography from '@mui/material/Typography';

interface SectionTitleProps {
  label?: React.ReactNode;
}
const SectionTitle = (props: SectionTitleProps) => {
  const { label } = props;
  return (
    <Typography
      variant='h5'
      component='h2'
      sx={{ margin: 5, fontWeight: 'bold' }}
    >
      {label}
    </Typography>
  );
};

export default SectionTitle;
