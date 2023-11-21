'use client';

import { SyntheticEvent, useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { MEDIUM_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';

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
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          py: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: isDownLarge ? 'column' : 'row',
            width: '100%',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <TextField required fullWidth label='브랜드명' variant='outlined' />
          <TextField required fullWidth label='담당자' variant='outlined' />
          <TextField
            required
            fullWidth
            label='담당자 연락처'
            variant='outlined'
          />
        </Box>
        <TextField
          label='추가 문의사항'
          variant='outlined'
          multiline
          fullWidth
          minRows={5}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Checkbox component='button' />
          <Link component='button'>개인정보 이용 및 수집 동의</Link>
        </Box>
        <Button fullWidth size='large' variant='contained'>
          제출하기
        </Button>
      </Box>
    </Box>
  );
};
export default PartnershipContent;
