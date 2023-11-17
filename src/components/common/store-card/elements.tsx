import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DEFAULT_BOLD_LABEL_WIDTH } from './constants';
import type { TypographyVariant } from '@mui/material';

interface BoldLabelProps {
  label?: string;
  value?: string;
  variant?: TypographyVariant;
}
export const BoldLabelValue = (props: BoldLabelProps) => {
  const { label, value, variant = 'subtitle2' } = props;
  return (
    <Typography variant={variant}>
      <Box sx={{ width: DEFAULT_BOLD_LABEL_WIDTH, display: 'inline' }}>
        <b>{label}</b> :
      </Box>
      <Box sx={{ display: 'inline' }}> {value}</Box>
    </Typography>
  );
};
