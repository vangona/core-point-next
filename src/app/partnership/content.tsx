'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { MEDIUM_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import { PartnerShipForm } from '@/components/partnership';

const PartnershipContent = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isDownLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const [layoutWidth, setLayoutWidth] = useState<string | number>(
    MEDIUM_LAYOUT_WIDTH,
  );

  useEffect(() => {
    if (isUpLarge) {
      setLayoutWidth(MEDIUM_LAYOUT_WIDTH);
      return;
    }

    setLayoutWidth('100%');
  }, [isUpLarge, isDownLarge]);

  return (
    <Box
      sx={{
        width: layoutWidth,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        padding: 3,
        mt: 2,
      }}
    >
      <Typography variant='h5' component='h3' whiteSpace='nowrap'>
        브랜드 협업 신청
      </Typography>
      <Divider />
      <PartnerShipForm isDownLarge={isDownLarge} />
    </Box>
  );
};
export default PartnershipContent;
