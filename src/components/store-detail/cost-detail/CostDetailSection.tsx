import Box from '@mui/material/Box';
import { Store } from '@/api/store';
import ContainedListItem from '@/components/common/contained-list/ContainedList';
import { convertMoneyString } from '@/utils';

interface CostDetailSectionProps {
  storeDetailData?: Store;
  parsedExpenditureData: [string, number][];
}
const CostDetailSection = ({
  storeDetailData,
  parsedExpenditureData,
}: CostDetailSectionProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 3,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
      }}
    >
      <ContainedListItem
        label='월 매출'
        value={convertMoneyString(storeDetailData?.monthly_sales)}
      />
      {parsedExpenditureData.length > 0 &&
        parsedExpenditureData.map(([label, value], index) => (
          <ContainedListItem
            key={index + label}
            label={label}
            value={'- ' + convertMoneyString(value)}
          />
        ))}
      <ContainedListItem
        primary
        label='월 수익'
        value={convertMoneyString(storeDetailData?.monthly_revenue)}
      />
    </Box>
  );
};

export default CostDetailSection;
