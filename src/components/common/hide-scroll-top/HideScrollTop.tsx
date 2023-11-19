import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { useScrollTrigger } from '@mui/material';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';

const HideScrollTop = () => {
  const trigger = useScrollTrigger({
    target: typeof window !== 'undefined' ? window : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fade in={trigger}>
      <IconButton
        color='primary'
        onClick={handleClick}
        role='presentation'
        sx={{
          width: '50px',
          height: '50px',
          position: 'fixed',
          bottom: 16,
          right: '50%',
          left: '50%',
          zIndex: 99,
        }}
        size='large'
      >
        <ArrowUpward />
      </IconButton>
    </Fade>
  );
};

export default HideScrollTop;
