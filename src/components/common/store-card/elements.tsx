import { Box, Typography } from '@mui/material';
import { DEFAULT_BOLD_LABEL_WIDTH } from './constants';

interface BoldLabelProps {
  label?: string;
  value?: string;
}
export const BoldLabelValue = (props: BoldLabelProps) => {
  const { label, value } = props;
  return (
    <Typography variant='subtitle2'>
      <Box sx={{ width: DEFAULT_BOLD_LABEL_WIDTH, display: 'inline' }}>
        <b>{label}</b> :
      </Box>
      <Box sx={{ display: 'inline' }}> {value}</Box>
    </Typography>
  );
};
