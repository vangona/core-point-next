import { CorePointRoutes } from '@/constants/routes';

export const DEFAULT_HEADER_HEIGHT = '100px';
export const LARGE_LAYOUT_WIDTH = 1200;
export const MEDIUM_LAYOUT_WIDTH = 800;
export const SMALL_LAYOUT_WIDTH = 400;
export const DEFAULT_HERO_HEIGHT = '500px';
export const DEFAULT_FOOTER_HEIGHT = '200px';

export interface NavData {
  label: string;
  href: CorePointRoutes;
}
export const NAV_DATA_ARR: NavData[] = [
  { label: '매물 정보', href: CorePointRoutes.STORE },
  { label: '창업 컨설팅', href: CorePointRoutes.OPENING_CONSULTING },
  { label: '양도 컨설팅', href: CorePointRoutes.TRANSFER_CONSULTING },
  { label: '협업 신청', href: CorePointRoutes.PARTNERSHIP },
];
