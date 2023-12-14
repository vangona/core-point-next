'use client';

import { useMediaQuery, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { SuccessExample } from '@/api/success-example/types';
import { OFF_WHITE_COLOR } from '@/constants/color';
import type { SxProps } from '@mui/material';

const SUCCESS_EXAMPLE_TRANSITION_DURATION = '200ms';

interface SuccessExampleCardProps {
  successExampleData?: SuccessExample;
  width: number;
  height: number;
}
const SuccessExampleCard = ({
  successExampleData,
  width,
  height,
}: SuccessExampleCardProps) => {
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  const containerSx: SxProps = {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    width,
    height,
    transitionDuration: SUCCESS_EXAMPLE_TRANSITION_DURATION,
    transitionProperty: 'height',
    transitionTimingFunction: 'ease-in-out',
    '&:hover': { height: '60vh' },
    '&:hover img': { position: 'absolute' },
    '&:hover .MuiCardContent-root': {
      color: OFF_WHITE_COLOR,
      backgroundColor: 'rgba(0,0,0,0.75)',
      zIndex: 9,
    },
  };

  const smallMediaSx: SxProps = isDownMedium
    ? {
        filter: 'brightness(50%)',
      }
    : {};

  const smallContentSx: SxProps = isDownMedium
    ? {
        height: '100%',
        position: 'absolute',
        color: 'primary.contrastText',
      }
    : {};

  return (
    <Card raised sx={containerSx}>
      <CardMedia
        component='img'
        image={successExampleData?.img_src ?? ''}
        alt='success example image'
        width='400px'
        height='100%'
        sx={{
          aspectRatio: '1/1',
          objectFit: 'cover',
          ...smallMediaSx,
          transitionDuration: SUCCESS_EXAMPLE_TRANSITION_DURATION,
          transitionProperty: 'all',
          transitionTimingFunction: 'ease-in-out',
        }}
      />
      <CardContent
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: 4,
          transitionDuration: SUCCESS_EXAMPLE_TRANSITION_DURATION,
          transitionProperty: 'all',
          transitionTimingFunction: 'ease-in-out',
          ...smallContentSx,
        }}
      >
        <Typography
          variant='h6'
          component='h3'
          sx={{
            width: 'fit-content',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          {successExampleData?.title}
        </Typography>
        <Typography variant='subtitle2' sx={{ alignSelf: 'flex-end' }}>
          {successExampleData?.customer_name}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            width: '100%',
            overflow: 'auto',
            wordBreak: 'keep-all',
            whiteSpace: 'pre-line',
          }}
        >
          {successExampleData?.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SuccessExampleCard;
