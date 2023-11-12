import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
  label?: string;
}
const SectionTitle = (props: SectionTitleProps) => {
  const { label } = props;
  return (
    <Box sx={{ margin: 4 }}>
      <Typography variant='h6' component='h2' sx={{ display: 'inline' }}>
        <Box display='inline' sx={{ color: 'primary.main' }}>
          {'코어창업 '}
        </Box>
        {label}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
