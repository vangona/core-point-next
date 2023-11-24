import React from 'react';
import Assignment from '@mui/icons-material/Assignment';
import ChatBubble from '@mui/icons-material/ChatBubble';
import Handshake from '@mui/icons-material/Handshake';
import Store from '@mui/icons-material/Store';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CorePointRoutes } from '@/constants/routes';
import { NavData } from './constants';
import type { ModalProps } from '@mui/material';

interface NavDrawerProps {
  navDataArr: NavData[];
  isOpen: boolean;
  onClose: ModalProps['onClose'];
  onNavClick: (newHref: string) => void;
}
const NavDrawer = (props: NavDrawerProps) => {
  const { navDataArr, isOpen, onClose, onNavClick } = props;
  const router = useRouter();

  const handleLinkClick = (
    event: React.MouseEvent<HTMLDivElement>,
    href: CorePointRoutes,
  ) => {
    onNavClick(href);
    onClose && onClose(event, 'backdropClick');
    router.push(href);
  };

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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '200px' },
        }}
      >
        <Box sx={{ padding: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
          <Image src='/logo.png' alt='logo' width={100} height={50} />
        </Box>
        <Divider />
        <List>
          {navDataArr.map((navData) => (
            <ListItem key={'nav-drawer' + navData.label} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {navData.href === CorePointRoutes.STORE && <Store />}
                  {navData.href === CorePointRoutes.OPENING_CONSULTING && (
                    <ChatBubble />
                  )}
                  {navData.href === CorePointRoutes.TRANSFER_CONSULTING && (
                    <Assignment />
                  )}
                  {navData.href === CorePointRoutes.PARTNERSHIP && (
                    <Handshake />
                  )}
                </ListItemIcon>
                <ListItemText
                  onClick={(e) => handleLinkClick(e, navData.href)}
                  sx={{ textDecoration: 'none', color: 'black' }}
                >
                  {navData.label}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </nav>
  );
};

export default NavDrawer;
