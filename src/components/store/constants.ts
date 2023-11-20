export enum StoreCategoy {
  CAFE = '카페 / 디저트',
  BAKERY = '베이커리',
  CHICKEN = '치킨 / 호프',
  FASTFOOD = '패스트푸드',
  FOOD = '일반음식점',
  ICECREAM = '아이스크림',
  SPORTS = '시설스포츠',
}
export const STORE_CATEGORY_DATA_ARR: StoreCategoy[] = [
  StoreCategoy.CAFE,
  StoreCategoy.BAKERY,
  StoreCategoy.CHICKEN,
  StoreCategoy.FASTFOOD,
  StoreCategoy.FOOD,
  StoreCategoy.ICECREAM,
  StoreCategoy.SPORTS,
];

export enum StoreLocation {
  SEOUL = '서울',
  BUSAN = '부산',
  DAEGU = '대구',
  INCHEON = '인천',
  GWANGJU = '광주',
  DAEJEON = '대전',
  ULSAN = '울산',
  SEJONG = '세종',
  GYEONGGI = '경기',
  GANGWON = '강원',
  CHUNGBUK = '충북',
  CHUNGNAM = '충남',
  JEONBUK = '전북',
  JEONNAM = '전남',
  GYEONGBUK = '경북',
  GYEONGNAM = '경남',
  JEJU = '제주',
}

export const STORE_LOCATION_DATA_ARR: StoreLocation[] = [
  StoreLocation.SEOUL,
  StoreLocation.BUSAN,
  StoreLocation.DAEGU,
  StoreLocation.INCHEON,
  StoreLocation.GWANGJU,
  StoreLocation.DAEJEON,
  StoreLocation.ULSAN,
  StoreLocation.SEJONG,
  StoreLocation.GYEONGGI,
  StoreLocation.GANGWON,
  StoreLocation.CHUNGBUK,
  StoreLocation.CHUNGNAM,
  StoreLocation.JEONBUK,
  StoreLocation.JEONNAM,
  StoreLocation.GYEONGBUK,
  StoreLocation.GYEONGNAM,
  StoreLocation.JEJU,
];

export interface StoreBudgetData {
  label: string;
  value: string;
}
export const STORE_BUDGET_DATA_ARR: StoreBudgetData[] = [
  { label: '5,000만 원 이하', value: '0,5000' },
  { label: '5,000만 원 ~ 1억 원', value: '5000,10000' },
  { label: '1억 원 ~ 2억 원', value: '10000,20000' },
  { label: '2억 원 ~ 3억 원', value: '20000,30000' },
  { label: '3억 원 이상', value: '30000,0' },
];
