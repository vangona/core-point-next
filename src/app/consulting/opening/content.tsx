'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import OpeningForm, {
  OpeningFormInput,
} from '@/components/consulting/opening/OpeningForm';
import { MEDIUM_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';

interface OpeningConsultingContentProps {
  initialValue?: Partial<OpeningFormInput>;
}
const OpeningConsultingContent = ({
  initialValue,
}: OpeningConsultingContentProps) => {
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
        창업 컨설팅 신청하기
      </Typography>
      <Divider />
      <OpeningForm isDownLarge={isDownLarge} initialValue={initialValue} />
    </Box>
  );
};

export default OpeningConsultingContent;
