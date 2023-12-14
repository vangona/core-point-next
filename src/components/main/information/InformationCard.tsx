import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';

export interface StoreInformation {
  title: string;
  imgSrc: string;
  url: string;
}

interface InformationCardProps {
  informationData: StoreInformation;
}
const InformationCard = ({ informationData }: InformationCardProps) => {
  return (
    <Card
      sx={{
        width: '200px',
        margin: 1,
      }}
    >
      <CardActionArea
        href={informationData.url}
        target='_blank'
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          textDecoration: 'none',
          color: 'black',
        }}
      >
        <CardMedia>
          <Image
            width='200'
            height='200'
            src={informationData.imgSrc}
            alt={informationData.title}
          />
        </CardMedia>
        <CardContent sx={{ px: 2, py: 1 }}>{informationData.title}</CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InformationCard;
