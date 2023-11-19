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
  const containerSx: SxProps = {
    display: 'flex',
    flexDirection: height > width ? 'column' : 'row',
    width,
    height,
    margin: 2,
  };

  return (
    <Card raised sx={containerSx}>
      <CardMedia
        component='img'
        image={successExampleData?.imgSrc ?? ''}
        alt='success example image'
        width='400px'
        sx={{ aspectRatio: '1/1', objectFit: 'cover' }}
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
        <Typography variant='body1' sx={{ width: '100%', overflow: 'auto' }}>
          {successExampleData?.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SuccessExampleCard;
