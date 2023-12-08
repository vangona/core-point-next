import { useMediaQuery, useTheme } from '@mui/material';
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
  const theme = useTheme();
  const isDownMedium = useMediaQuery(theme.breakpoints.down('md'));

  const continaedListSize = isDownMedium ? 'sm' : 'md';

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
        size={continaedListSize}
        label='월 매출'
        value={convertMoneyString(storeDetailData?.monthly_sales)}
      />
      {parsedExpenditureData.length > 0 &&
        parsedExpenditureData.map(([label, value], index) => (
          <ContainedListItem
            key={index + label}
            primary={label === '월 수익'}
            size={continaedListSize}
            label={label}
            value={convertMoneyString(value)}
          />
        ))}
    </Box>
  );
};

export default CostDetailSection;
