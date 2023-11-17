import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionTitleProps {
  label?: string;
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
        <Box display='inline' sx={{ color: 'primary.main' }}>
          {'코어창업 '}
        </Box>
        {label}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
