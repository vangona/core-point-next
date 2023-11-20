export enum StoreCategory {
  CAFE = 'cafe',
  BAKERY = 'bakery',
  CHICKEN = 'chicken',
  FASTFOOD = 'fastfood',
  FOOD = 'food',
  ICECREAM = 'icecream',
  SPORTS = 'sports',
}
export interface StoreCategoryData {
  label: string;
  value: StoreCategory;
}
export const STORE_CATEGORY_DATA_ARR: StoreCategoryData[] = [
  { label: '카페 / 디저트', value: StoreCategory.CAFE },
  { label: '베이커리', value: StoreCategory.BAKERY },
  { label: '치킨 / 호프', value: StoreCategory.CHICKEN },
  { label: '패스트푸드', value: StoreCategory.FASTFOOD },
  { label: '일반음식점', value: StoreCategory.FOOD },
  { label: '아이스크림', value: StoreCategory.ICECREAM },
  { label: '시설스포츠', value: StoreCategory.SPORTS },
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
