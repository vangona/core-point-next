import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const ProgressBackdrop = () => {
  return (
    <Backdrop open={true} sx={{ zIndex: 9999 }}>
      <CircularProgress />
    </Backdrop>
  );
};

export default ProgressBackdrop;
