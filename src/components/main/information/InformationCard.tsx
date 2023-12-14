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
  isSmall?: boolean;
}
const InformationCard = ({
  informationData,
  isSmall,
}: InformationCardProps) => {
  return (
    <Card
      sx={{
        width: isSmall ? '150px' : '200px',
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
            width={isSmall ? 150 : 200}
            height={isSmall ? 150 : 200}
            src={informationData.imgSrc}
            alt={informationData.title}
          />
        </CardMedia>
        {!isSmall && (
          <CardContent
            sx={{
              px: 2,
              py: 1,
              fontWeight: 'bold',
              fontSize: '0.9rem',
              wordBreak: 'keep-all',
            }}
          >
            {informationData.title}
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};

export default InformationCard;
