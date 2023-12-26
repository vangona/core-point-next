import React from 'react';
import Typography from '@mui/material/Typography';

interface SectionTitleProps {
  label?: React.ReactNode;
  subTitle?: React.ReactNode;
}
const SectionTitle = (props: SectionTitleProps) => {
  const { label, subTitle } = props;
  return (
    <>
      <Typography
        variant='h5'
        component='h2'
        sx={{ margin: subTitle ? 3 : 5 }}
        fontFamily='ONE-Mobile-Title'
      >
        {label}
      </Typography>
      {subTitle && <Typography sx={{ mb: 5 }}>{subTitle}</Typography>}
    </>
  );
};

export default SectionTitle;
