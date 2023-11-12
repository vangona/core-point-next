import { Button, Card, Typography } from '@mui/material';

const StoreWindow = () => {
  return (
    <Card
      sx={{
        position: 'sticky',
        top: 24,
        width: 268,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        gap: 2,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
      }}
      variant='elevation'
    >
      <Typography
        variant='subtitle1'
        fontWeight='bold'
        sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
      >
        최근 조회한 매물
      </Typography>
      <Button size='large' variant='contained'>
        상담 신청하기
      </Button>
    </Card>
  );
};

export default StoreWindow;
