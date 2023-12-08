import Box from '@mui/material/Box';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';

interface StoreDetailPieChartProps {
  parsedExpenditureData: [string, number][];
}
const StoreDetailPieChart = ({
  parsedExpenditureData,
}: StoreDetailPieChartProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PieChart
        width={400}
        height={400}
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
            innerRadius: 30,
            paddingAngle: 1,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: {
              innerRadius: 30,
              additionalRadius: -30,
              color: 'gray',
            },
          },
        ]}
        margin={{ bottom: 100 }}
        slotProps={{
          legend: {
            direction: 'row',
            position: {
              horizontal: 'left',
              vertical: 'bottom',
            },
          },
        }}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
          },
          gap: 4,
        }}
      />
    </Box>
  );
};

export default StoreDetailPieChart;
