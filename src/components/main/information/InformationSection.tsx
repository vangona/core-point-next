import Box from '@mui/material/Box';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { SectionTitle } from '@/components/common/section-title';
import InformationCard from './InformationCard';

const InformationSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 1100,
        alignSelf: 'center',
        alignItems: 'center',
      }}
    >
      <SectionTitle label='창업 정보' />
      <ParagraphDivider />
      <Box sx={{ mt: 5 }}>
        {Array.from([
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
          />
        ))}
      </Box>
    </Box>
  );
};

export default InformationSection;
