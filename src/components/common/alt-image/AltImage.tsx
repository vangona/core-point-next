import Image from 'next/image';

interface AltImageProps {
  src?: string;
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
const AltImage = (props: AltImageProps) => {
  // props에 있는걸 인식 못해서 비활성화 함.
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image src={props.src ? props.src : '/core-icon.png'} {...props} />;
};

export default AltImage;
