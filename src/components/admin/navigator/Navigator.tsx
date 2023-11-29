import HomeIcon from '@mui/icons-material/Home';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import StoreMallDirectoryRounded from '@mui/icons-material/StoreMallDirectoryRounded';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import type { DrawerProps } from '@mui/material/Drawer';

const categories = [
  {
    id: '매물 정보',
    children: [
      {
        id: '매물정보 관리',
        icon: <StoreMallDirectoryRounded />,
        href: '/admin/store',
      },
    ],
  },
  {
    id: '사이트 정보',
    children: [
      {
        id: '메인 페이지 관리',
        icon: <PermMediaOutlinedIcon />,
        href: '/admin/main',
      },
      {
        id: '사이트 하단 정보 관리',
        icon: <PublicIcon />,
        href: '/admin/footer',
      },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 18, color: '#fff' }}
        >
          코어창업 관리자 페이지
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>웹사이트 개요</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, href }) => (
              <ListItem disablePadding key={childId}>
                <Link href={href} style={{ textDecoration: 'none' }}>
                  <ListItemButton sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
