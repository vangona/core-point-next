import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { SuccessExample } from '@/types';
import type { SxProps } from '@mui/material';

interface SuccessExampleCardProps {
  successExampleData?: SuccessExample;
}
const SuccessExampleCard = (props: SuccessExampleCardProps) => {
  const { successExampleData } = props;
  const containerSx: SxProps = {
    display: 'flex',
    width: '800px',
    height: '400px',
  };

  return (
    <Card raised sx={containerSx}>
      <CardMedia
        image={successExampleData?.imgSrc}
        component='img'
        alt='success example image'
        sx={{ width: '400px', height: '400px' }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: 3,
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
        <Typography variant='body1' sx={{ width: '100%' }}>
          {successExampleData?.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SuccessExampleCard;
