import AssignmentInd from '@mui/icons-material/AssignmentInd';
import Business from '@mui/icons-material/Business';
import Description from '@mui/icons-material/Description';
import Diamond from '@mui/icons-material/Diamond';
import HomeIcon from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import StoreMallDirectoryRounded from '@mui/icons-material/StoreMallDirectoryRounded';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { ADMIN_PATH } from '../constants';
import type { DrawerProps } from '@mui/material/Drawer';

const categories = [
  {
    id: '매물 정보',
    children: [
      {
        id: '매물정보 관리',
        icon: <StoreMallDirectoryRounded />,
        href: ADMIN_PATH.STORE,
      },
    ],
  },
  {
    id: '메인 페이지 정보',
    children: [
      {
        id: '메인 페이지 히어로 영역',
        icon: <PermMediaOutlinedIcon />,
        href: ADMIN_PATH.MAIN_HERO,
      },
      {
        id: '창업 정보 데이터 관리',
        icon: <Info />,
        href: ADMIN_PATH.MAIN_INFORMATION,
      },
      {
        id: '창업 성공 사례  데이터 관리',
        icon: <ThumbUp />,
        href: ADMIN_PATH.MAIN_SUCCESS_EXAMPLE,
      },
      {
        id: '매니저 소개  데이터 관리',
        icon: <AssignmentInd />,
        href: ADMIN_PATH.MAIN_MANAGER,
      },
      {
        id: '창업 추천 브랜드  데이터 관리',
        icon: <Diamond />,
        href: ADMIN_PATH.MAIN_BRAND,
      },
    ],
  },
  {
    id: '사이트 정보',
    children: [
      {
        id: '탭 별 히어로 섹션 수정',
        icon: <PublicIcon />,
        href: ADMIN_PATH.PAGE_HERO,
      },
      {
        id: '사이트 하단 회사 정보 관리',
        icon: <Business />,
        href: ADMIN_PATH.FOOTER,
      },
      {
        id: '개인 정보 처리 방침 수정',
        icon: <Description />,
        href: ADMIN_PATH.PRIVATE_RULE,
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
    <Drawer variant='persistent' anchor='left' {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 18, color: '#fff' }}
        >
          코어창업 관리자 페이지
        </ListItem>
        <ListItem disablePadding sx={{ pt: 2, pb: 1 }}>
          <Link
            href={ADMIN_PATH.OVERVIEW}
            style={{ width: '100%', textDecoration: 'none' }}
          >
            <ListItemButton sx={item}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>웹사이트 개요</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, href }) => (
              <ListItem disablePadding key={childId}>
                <Link
                  href={href}
                  style={{ width: '100%', textDecoration: 'none' }}
                >
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
