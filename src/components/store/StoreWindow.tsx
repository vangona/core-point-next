'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { StoreMinimum } from '@/api/store/getStoreMinimum';
import { DEFAULT_WINDOW_WIDTH } from '@/components/store/constants';
import { convertMoneyString } from '@/utils';
import { BoldLabelValue } from '../common/store-card/elements';

interface StoreWindowProps {
  storeData?: StoreMinimum[];
  isLoading?: boolean;
  openModal?: () => void;
  handleStoreChange?: (newStoreName: string) => void;
}
const StoreWindow = ({
  storeData,
  isLoading,
  openModal,
  handleStoreChange,
}: StoreWindowProps) => {
  const router = useRouter();
  const isEmptyData = !storeData || storeData.length === 0;

  const handleStoreClick = () => {
    handleStoreChange && handleStoreChange(''); // window에서 열릴 때는 storename 초기화
    openModal && openModal();
  };

  return (
    <Card
      sx={{
        flexShrink: 0,
        position: 'sticky',
        alignSelf: 'flex-start',
        top: '24px',
        right: 0,
        width: DEFAULT_WINDOW_WIDTH,
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        gap: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
      }}
      variant='elevation'
      raised
    >
      <Typography
        variant='subtitle1'
        fontWeight='bold'
        sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
      >
        최근 조회한 매물
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {isLoading && <Skeleton variant='text' height='50px' />}
        {!isLoading &&
          !isEmptyData &&
          storeData.map((storeData, index) => (
            <Tooltip
              title={storeData.store_name ?? ''}
              key={'recent-store' + storeData.store_id + index}
            >
              <Card>
                <CardActionArea
                  sx={{ padding: 2, pb: 0 }}
                  onClick={() => router.push(`/store/${storeData.store_id}`)}
                >
                  <Typography
                    sx={{
                      width: '100%',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {storeData.store_name}
                  </Typography>
                  <Divider />
                  <CardContent sx={{ px: 0 }}>
                    <BoldLabelValue
                      label='월 수익'
                      value={
                        storeData
                          ? convertMoneyString(storeData.monthly_sales)
                          : undefined
                      }
                    />
                    <BoldLabelValue
                      label='창업 비용'
                      value={
                        storeData
                          ? convertMoneyString(storeData.store_cost)
                          : undefined
                      }
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Tooltip>
          ))}
        {!isLoading && isEmptyData && '최근 조회한 매물이 없습니다.'}
      </Box>
      <Button
        size='large'
        variant='contained'
        onClick={() => handleStoreClick()}
        sx={{ justifySelf: 'flex-end' }}
      >
        상담 신청하기
      </Button>
    </Card>
  );
};

export default StoreWindow;
