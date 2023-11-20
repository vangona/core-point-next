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
  SEOUL = 'seoul',
  BUSAN = 'busan',
  DAEGU = 'daegu',
  INCHEON = 'incheon',
  GWANGJU = 'gwangju',
  DAEJEON = 'daejeon',
  ULSAN = 'ulsan',
  SEJONG = 'sejong',
  GYEONGGI = 'gyeonggi',
  GANGWON = 'gangwon',
  CHUNGBUK = 'chungbuk',
  CHUNGNAM = 'chungnam',
  JEONBUK = 'jeonbuk',
  JEONNAM = 'jeonnam',
  GYEONGBUK = 'gyeongbuk',
  GYEONGNAM = 'gyeongnam',
  JEJU = 'jeju',
}
export interface StoreLocationData {
  label: string;
  value: StoreLocation;
}
export const STORE_LOCATION_DATA_ARR: StoreLocationData[] = [
  { label: '서울', value: StoreLocation.SEOUL },
  { label: '부산', value: StoreLocation.BUSAN },
  { label: '대구', value: StoreLocation.DAEGU },
  { label: '인천', value: StoreLocation.INCHEON },
  { label: '광주', value: StoreLocation.GWANGJU },
  { label: '대전', value: StoreLocation.DAEJEON },
  { label: '울산', value: StoreLocation.ULSAN },
  { label: '세종', value: StoreLocation.SEJONG },
  { label: '경기', value: StoreLocation.GYEONGGI },
  { label: '강원', value: StoreLocation.GANGWON },
  { label: '충북', value: StoreLocation.CHUNGBUK },
  { label: '충남', value: StoreLocation.CHUNGNAM },
  { label: '전북', value: StoreLocation.JEONBUK },
  { label: '전남', value: StoreLocation.JEONNAM },
  { label: '경북', value: StoreLocation.GYEONGBUK },
  { label: '경남', value: StoreLocation.GYEONGNAM },
  { label: '제주', value: StoreLocation.JEJU },
];
