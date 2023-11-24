import React from 'react';
import Box from '@mui/material/Box';
import type { SxProps } from '@mui/material';

interface ContainedListItemProps {
  primary?: boolean;
  label?: string;
  labelSx?: SxProps;
  value?: React.ReactNode;
  valueSx?: SxProps;
  sx?: SxProps;
  size?: 'sm' | 'md';
}
const ContainedListItem = ({
  primary,
  size = 'md',
  label = 'label placeholder',
  labelSx,
  value = 'value placeholder',
  valueSx,
  sx,
}: ContainedListItemProps) => {
  const isSmall = size === 'sm';
  const defaultHeight = isSmall ? '35px' : '56px';

  const containerSx: SxProps = {
    display: 'flex',
    width: '100%',
    height: defaultHeight,
    alignItems: 'center',
    borderBottom: '1px solid',
    borderColor: 'divider',
    ...sx,
  };

  const _labelSx: SxProps = {
    minWidth: '100px',
    display: 'flex',
    fontWeight: 'bold',
    color: primary ? 'primary.main' : 'text.primary',
    ...labelSx,
  };

  const _valueSx: SxProps = {
    ...valueSx,
  };
  return (
    <Box sx={containerSx}>
      <Box sx={_labelSx}>{label}</Box>
      <Box sx={_valueSx}>{value}</Box>
    </Box>
  );
};

export default ContainedListItem;
