import { useState } from 'react';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import type { SnackbarProps } from '@mui/material';

const useSlideSnackBar = (props?: SnackbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openSnackbar = () => setIsOpen(true);
  const closeSnackbar = () => setIsOpen(false);

  return {
    snackbar: (
      <Snackbar
        {...props}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={props?.open ?? isOpen}
        onClose={(event, reason) =>
          props?.onClose ? props?.onClose(event, reason) : closeSnackbar()
        }
        autoHideDuration={props?.autoHideDuration ?? 1000}
        TransitionComponent={(props) => <Slide direction='up' {...props} />}
      />
    ),
    openSnackbar,
    closeSnackbar,
  };
};

export default useSlideSnackBar;
