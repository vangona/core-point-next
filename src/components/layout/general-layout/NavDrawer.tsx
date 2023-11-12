import { Drawer } from '@mui/material';
import type { ModalProps } from '@mui/material';

interface NavDrawerProps {
  isOpen: boolean;
  onClose: ModalProps['onClose'];
}
const NavDrawer = (props: NavDrawerProps) => {
  const { isOpen, onClose } = props;

  return (
    <nav>
      <Drawer
        anchor='right'
        variant='temporary'
        open={isOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { lg: 'none' },
          flexDirection: 'column',
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100px' },
        }}
      >
        {123}
      </Drawer>
    </nav>
  );
};

export default NavDrawer;
