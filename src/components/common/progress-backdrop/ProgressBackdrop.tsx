import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import type { BackdropProps } from '@mui/material';

const ProgressBackdrop = (props: BackdropProps) => {
  return (
    <Backdrop sx={{ zIndex: 9999 }} {...props}>
      <CircularProgress />
    </Backdrop>
  );
};

export default ProgressBackdrop;
