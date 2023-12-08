// props에 있는걸 인식 못해서 비활성화 함.
/* eslint-disable jsx-a11y/alt-text */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { OFF_WHITE_COLOR } from '@/constants/color';

interface AltImageProps {
  src: string | undefined;
  disableLabel?: boolean;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
  quality?: number | `${number}` | undefined;
  priority?: boolean | undefined;
  loading?: 'eager' | 'lazy' | undefined;
  blurDataURL?: string | undefined;
  unoptimized?: boolean | undefined;
  layout?: string | undefined;
  objectFit?: string | undefined;
  objectPosition?: string | undefined;
  lazyBoundary?: string | undefined;
  lazyRoot?: string | undefined;
}
const AltImage = ({ src, disableLabel, ...props }: AltImageProps) => {
  if (!src)
    return (
      <>
        <Image src='/core-icon.png' {...props} />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        >
          {!disableLabel && (
            <Typography color={OFF_WHITE_COLOR} variant='caption'>
              표시할 이미지가 없습니다.
            </Typography>
          )}
        </Box>
      </>
    );

  return <Image src={src} {...props} />;
};

export default AltImage;
