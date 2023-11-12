import { Box } from '@mui/material';
import Image from 'next/image';
import { DIMMED_GRAY, OFF_WHITE_COLOR } from '@/constants/color';
import { DEFAULT_FOOTER_HEIGHT, DEFAULT_LAYOUT_WIDTH } from './constants';

const GeneralFooter = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: DEFAULT_FOOTER_HEIGHT,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(${OFF_WHITE_COLOR}, ${DIMMED_GRAY})`,
      }}
    >
      <Box
        sx={{
          width: DEFAULT_LAYOUT_WIDTH,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box>
          <Image
            width={120}
            height={60}
            src='/logo.png'
            alt='열쇠 모양에 Core Company라는 글자가 적혀있는 코어 창업 로고'
          />
        </Box>
        <Box>Company Info</Box>
      </Box>
    </Box>
  );
};

export default GeneralFooter;
