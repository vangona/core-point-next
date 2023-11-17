import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const StoreResultLoading = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 10,
      }}
    >
      <CircularProgress size={100} />
      <Typography variant='subtitle1'>
        매물 정보를 가져오는 중입니다...
      </Typography>
    </Box>
  );
};

export default StoreResultLoading;
