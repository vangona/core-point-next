import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import InformationCard from './InformationCard';

const LARGE_COLUMN_NUMBER = 4;
const MEDIUM_COLUMN_NUMBER = 3;
const SMALL_COLUMN_NUMBER = 2;

const InformationCards = () => {
  const theme = useTheme();
  const [columnNumber, setColumnNumber] = useState(4);
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const isDownSmall = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (isUpLarge) {
      setColumnNumber(LARGE_COLUMN_NUMBER);
      return;
    }

    if (isMedium) {
      setColumnNumber(MEDIUM_COLUMN_NUMBER);
      return;
    }

    setColumnNumber(SMALL_COLUMN_NUMBER);
    return;
  }, [isUpLarge, isMedium, isDownSmall]);

  return (
    <Box
      sx={{
        margin: 5,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: `repeat(${columnNumber}, 1fr)`,
        gap: 1,
        placeItems: 'center',
      }}
    >
      {Array.from([
        {
          title: '본죽 창업수익은 얼마나 될까?',
          imgSrc:
            'https://postfiles.pstatic.net/MjAyMzEyMDFfMTMx/MDAxNzAxMzk0NDUxNDA0.Wq21NoOtdLk8NTJhBbqFdPKKGshOnmKfQG-cyU9TQgAg._8wjFwwWu6RccitliUkJVAJMwFs4-nwaHwESYrRXP9gg.PNG.corepoint0905/%EB%B8%94%EB%A1%9C%EA%B7%3F_%3F%8D%B8%3F%84%A4%3F%9D%BC_%3F%83%88%EB%A1%9C%EC%9A%B4%EA%B1%3F_%2811%29.png?type=f238',
          url: 'https://blog.naver.com/corepoint_/223279843549',
        },
        {
          title: '본죽 창업수익은 얼마나 될까?',
          imgSrc:
            'https://postfiles.pstatic.net/MjAyMzEyMDFfMTMx/MDAxNzAxMzk0NDUxNDA0.Wq21NoOtdLk8NTJhBbqFdPKKGshOnmKfQG-cyU9TQgAg._8wjFwwWu6RccitliUkJVAJMwFs4-nwaHwESYrRXP9gg.PNG.corepoint0905/%EB%B8%94%EB%A1%9C%EA%B7%3F_%3F%8D%B8%3F%84%A4%3F%9D%BC_%3F%83%88%EB%A1%9C%EC%9A%B4%EA%B1%3F_%2811%29.png?type=f238',
          url: 'https://blog.naver.com/corepoint_/223279843549',
        },
        {
          title: '본죽 창업수익은 얼마나 될까?',
          imgSrc:
            'https://postfiles.pstatic.net/MjAyMzEyMDFfMTMx/MDAxNzAxMzk0NDUxNDA0.Wq21NoOtdLk8NTJhBbqFdPKKGshOnmKfQG-cyU9TQgAg._8wjFwwWu6RccitliUkJVAJMwFs4-nwaHwESYrRXP9gg.PNG.corepoint0905/%EB%B8%94%EB%A1%9C%EA%B7%3F_%3F%8D%B8%3F%84%A4%3F%9D%BC_%3F%83%88%EB%A1%9C%EC%9A%B4%EA%B1%3F_%2811%29.png?type=f238',
          url: 'https://blog.naver.com/corepoint_/223279843549',
        },
        {
          title: '본죽 창업수익은 얼마나 될까?',
          imgSrc:
            'https://postfiles.pstatic.net/MjAyMzEyMDFfMTMx/MDAxNzAxMzk0NDUxNDA0.Wq21NoOtdLk8NTJhBbqFdPKKGshOnmKfQG-cyU9TQgAg._8wjFwwWu6RccitliUkJVAJMwFs4-nwaHwESYrRXP9gg.PNG.corepoint0905/%EB%B8%94%EB%A1%9C%EA%B7%3F_%3F%8D%B8%3F%84%A4%3F%9D%BC_%3F%83%88%EB%A1%9C%EC%9A%B4%EA%B1%3F_%2811%29.png?type=f238',
          url: 'https://blog.naver.com/corepoint_/223279843549',
        },
        {
          title: '본죽 창업수익은 얼마나 될까?',
          imgSrc:
            'https://postfiles.pstatic.net/MjAyMzEyMDFfMTMx/MDAxNzAxMzk0NDUxNDA0.Wq21NoOtdLk8NTJhBbqFdPKKGshOnmKfQG-cyU9TQgAg._8wjFwwWu6RccitliUkJVAJMwFs4-nwaHwESYrRXP9gg.PNG.corepoint0905/%EB%B8%94%EB%A1%9C%EA%B7%3F_%3F%8D%B8%3F%84%A4%3F%9D%BC_%3F%83%88%EB%A1%9C%EC%9A%B4%EA%B1%3F_%2811%29.png?type=f238',
          url: 'https://blog.naver.com/corepoint_/223279843549',
        },
        {
          title: '본죽 창업수익은 얼마나 될까?',
          imgSrc:
            'https://postfiles.pstatic.net/MjAyMzEyMDFfMTMx/MDAxNzAxMzk0NDUxNDA0.Wq21NoOtdLk8NTJhBbqFdPKKGshOnmKfQG-cyU9TQgAg._8wjFwwWu6RccitliUkJVAJMwFs4-nwaHwESYrRXP9gg.PNG.corepoint0905/%EB%B8%94%EB%A1%9C%EA%B7%3F_%3F%8D%B8%3F%84%A4%3F%9D%BC_%3F%83%88%EB%A1%9C%EC%9A%B4%EA%B1%3F_%2811%29.png?type=f238',
          url: 'https://blog.naver.com/corepoint_/223279843549',
        },
        {
          title: '본죽 창업수익은 얼마나 될까?',
          imgSrc:
            'https://postfiles.pstatic.net/MjAyMzEyMDFfMTMx/MDAxNzAxMzk0NDUxNDA0.Wq21NoOtdLk8NTJhBbqFdPKKGshOnmKfQG-cyU9TQgAg._8wjFwwWu6RccitliUkJVAJMwFs4-nwaHwESYrRXP9gg.PNG.corepoint0905/%EB%B8%94%EB%A1%9C%EA%B7%3F_%3F%8D%B8%3F%84%A4%3F%9D%BC_%3F%83%88%EB%A1%9C%EC%9A%B4%EA%B1%3F_%2811%29.png?type=f238',
          url: 'https://blog.naver.com/corepoint_/223279843549',
        },
        {
          title: '본죽 창업수익은 얼마나 될까?',
          imgSrc:
            'https://postfiles.pstatic.net/MjAyMzEyMDFfMTMx/MDAxNzAxMzk0NDUxNDA0.Wq21NoOtdLk8NTJhBbqFdPKKGshOnmKfQG-cyU9TQgAg._8wjFwwWu6RccitliUkJVAJMwFs4-nwaHwESYrRXP9gg.PNG.corepoint0905/%EB%B8%94%EB%A1%9C%EA%B7%3F_%3F%8D%B8%3F%84%A4%3F%9D%BC_%3F%83%88%EB%A1%9C%EC%9A%B4%EA%B1%3F_%2811%29.png?type=f238',
          url: 'https://blog.naver.com/corepoint_/223279843549',
        },
        {
          title: '본죽 창업수익은 얼마나 될까?',
          imgSrc:
            'https://postfiles.pstatic.net/MjAyMzEyMDFfMTMx/MDAxNzAxMzk0NDUxNDA0.Wq21NoOtdLk8NTJhBbqFdPKKGshOnmKfQG-cyU9TQgAg._8wjFwwWu6RccitliUkJVAJMwFs4-nwaHwESYrRXP9gg.PNG.corepoint0905/%EB%B8%94%EB%A1%9C%EA%B7%3F_%3F%8D%B8%3F%84%A4%3F%9D%BC_%3F%83%88%EB%A1%9C%EC%9A%B4%EA%B1%3F_%2811%29.png?type=f238',
          url: 'https://blog.naver.com/corepoint_/223279843549',
        },
        {
          title: '본죽 창업수익은 얼마나 될까?',
          imgSrc:
            'https://postfiles.pstatic.net/MjAyMzEyMDFfMTMx/MDAxNzAxMzk0NDUxNDA0.Wq21NoOtdLk8NTJhBbqFdPKKGshOnmKfQG-cyU9TQgAg._8wjFwwWu6RccitliUkJVAJMwFs4-nwaHwESYrRXP9gg.PNG.corepoint0905/%EB%B8%94%EB%A1%9C%EA%B7%3F_%3F%8D%B8%3F%84%A4%3F%9D%BC_%3F%83%88%EB%A1%9C%EC%9A%B4%EA%B1%3F_%2811%29.png?type=f238',
          url: 'https://blog.naver.com/corepoint_/223279843549',
        },
        {
          title: '본죽 창업수익은 얼마나 될까?',
          imgSrc:
            'https://postfiles.pstatic.net/MjAyMzEyMDFfMTMx/MDAxNzAxMzk0NDUxNDA0.Wq21NoOtdLk8NTJhBbqFdPKKGshOnmKfQG-cyU9TQgAg._8wjFwwWu6RccitliUkJVAJMwFs4-nwaHwESYrRXP9gg.PNG.corepoint0905/%EB%B8%94%EB%A1%9C%EA%B7%3F_%3F%8D%B8%3F%84%A4%3F%9D%BC_%3F%83%88%EB%A1%9C%EC%9A%B4%EA%B1%3F_%2811%29.png?type=f238',
          url: 'https://blog.naver.com/corepoint_/223279843549',
        },
      ]).map((data, index) => (
        <InformationCard
          key={'information-card-' + data.title + index}
          informationData={data}
          isSmall={isDownSmall}
        />
      ))}
    </Box>
  );
};

export default InformationCards;
