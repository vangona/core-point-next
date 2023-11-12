'use client';

import { Box, Typography } from '@mui/material';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import Image from 'next/image';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import { DIMMED_GRAY } from '@/constants/color';
import { dummyStoreDetail } from '../dummyStore';

interface StoreDetailPageProps {
  params: { id: string };
}
const StoreDetailPage = (props: StoreDetailPageProps) => {
  const { params } = props;
  const matchedDummyStoreDetail = dummyStoreDetail.find(
    (storeDetail) => storeDetail.storeData.storeId === params.id,
  );

  const parsedExpenditureData = matchedDummyStoreDetail
    ? Object.entries(matchedDummyStoreDetail.expenditureDetail)
    : [];

  return (
    <Box
      sx={{
        width: DEFAULT_LAYOUT_WIDTH,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant='h4' align='center'>
        {matchedDummyStoreDetail?.storeData.storeName}
      </Typography>
      <ParagraphDivider />
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Box>
          <Image
            width={450}
            height={300}
            src={
              matchedDummyStoreDetail?.storeData.storeImgSrcArr
                ? matchedDummyStoreDetail?.storeData.storeImgSrcArr[0]
                : ''
            }
            alt='image'
          />
        </Box>
        <Box>
          <Typography variant='h5'>매출내역</Typography>
          <Box>
            월매출 : {matchedDummyStoreDetail?.salesDetail.monthlySales}
          </Box>
          <Box>
            월지출 : {matchedDummyStoreDetail?.salesDetail.monthlyExpenditure}
          </Box>
          <Box>
            월수익 : {matchedDummyStoreDetail?.salesDetail.monthlyRevenue}
          </Box>
          <Box>
            매출근거 : {matchedDummyStoreDetail?.salesDetail.salesReason}
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography variant='h5'>지출 세부내역</Typography>
          <Box>매출 : {matchedDummyStoreDetail?.salesDetail.monthlySales}</Box>
          {parsedExpenditureData.length > 0 &&
            parsedExpenditureData.map(([label, value], index) => (
              <Box key={index + label}>
                {label} : {value}
              </Box>
            ))}
          <Box>
            수익 : {matchedDummyStoreDetail?.salesDetail.monthlyRevenue}
          </Box>
        </Box>
        {parsedExpenditureData.length > 0 && (
          <Box>
            <PieChart
              width={300}
              height={300}
              series={[
                {
                  data: parsedExpenditureData.map(([label, value], index) => ({
                    id: index + label,
                    value,
                    label,
                  })),
                  arcLabel: (item) =>
                    `${item.label} / ${item.value.toLocaleString('ko-KR')}`,
                  cornerRadius: 4,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: 'gray',
                  },
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: 'white',
                  fontWeight: 'bold',
                  fontSize: '14px',
                },
              }}
            />
          </Box>
        )}
      </Box>
      <Box>
        <Typography variant='h5'>상세 설명</Typography>
        <Box sx={{ height: '600px', backgroundColor: DIMMED_GRAY }}>
          {matchedDummyStoreDetail?.description}
        </Box>
      </Box>
    </Box>
  );
};

export default StoreDetailPage;
