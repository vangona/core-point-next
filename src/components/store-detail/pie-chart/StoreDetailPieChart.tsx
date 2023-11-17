import Box from '@mui/material/Box';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';

interface StoreDetailPieChartProps {
  parsedExpenditureData: [string, number][];
}
const StoreDetailPieChart = ({
  parsedExpenditureData,
}: StoreDetailPieChartProps) => {
  return (
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
            arcLabelMinAngle: 45,
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
  );
};

export default StoreDetailPieChart;
