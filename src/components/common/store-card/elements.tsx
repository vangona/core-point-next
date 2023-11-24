import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DEFAULT_BOLD_LABEL_WIDTH } from './constants';
import type {
  SxProps,
  TypographyOwnProps,
  TypographyVariant,
} from '@mui/material';

interface BoldLabelProps {
  label?: string;
  value?: string;
  variant?: TypographyVariant;
  primary?: boolean;
  color?: TypographyOwnProps['color'];
  sx?: SxProps;
}
export const BoldLabelValue = (props: BoldLabelProps) => {
  const { label, value, variant = 'subtitle2', primary, color, sx } = props;
  return (
    <Typography variant={variant} color={color} sx={sx}>
      <Box
        sx={{
          width: DEFAULT_BOLD_LABEL_WIDTH,
          display: 'inline',
          color: primary ? 'primary.main' : 'inherit',
        }}
      >
        <b>{label}</b> :
      </Box>
      <Box sx={{ display: 'inline' }}> {value}</Box>
    </Typography>
  );
};
