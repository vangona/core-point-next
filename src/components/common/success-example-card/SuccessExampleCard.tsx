'use client';

import { useMediaQuery, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { SuccessExample } from '@/types';
import type { SxProps } from '@mui/material';

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
        image={successExampleData?.imgSrc ?? ''}
        alt='success example image'
        width='400px'
        sx={{ aspectRatio: '1/1', objectFit: 'cover', ...smallMediaSx }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: 3,
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
        <Typography variant='body1' sx={{ width: '100%', overflow: 'auto' }}>
          {successExampleData?.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SuccessExampleCard;
