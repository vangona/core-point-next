import { Box } from '@mui/material';

interface StoreDetailPageProps {
  params: { id: string };
}
const StoreDetailPage = (props: StoreDetailPageProps) => {
  const { params } = props;
  return <Box>{params.id}</Box>;
};

export default StoreDetailPage;
