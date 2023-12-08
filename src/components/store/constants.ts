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
  GYEONGGIBUK = '경기 북부',
  GYEONGGINAM = '경기 남부',
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
  // StoreLocation.BUSAN,
  // StoreLocation.DAEGU,
  StoreLocation.INCHEON,
  // StoreLocation.GWANGJU,
  // StoreLocation.DAEJEON,
  // StoreLocation.ULSAN,
  // StoreLocation.SEJONG,
  StoreLocation.GYEONGGIBUK,
  StoreLocation.GYEONGGINAM,
  // StoreLocation.GANGWON,
  // StoreLocation.CHUNGBUK,
  // StoreLocation.CHUNGNAM,
  // StoreLocation.JEONBUK,
  // StoreLocation.JEONNAM,
  // StoreLocation.GYEONGBUK,
  // StoreLocation.GYEONGNAM,
  // StoreLocation.JEJU,
];

export interface StoreBudgetData {
  label: string;
  value: string;
}
export enum StoreBudgetValue {
  EMPTY = '',
  LESS_THAN_FIVE_THOUSAND = '0,5000',
  FIVE_THOUSAND_TO_ONE_BILLION = '5000,10000',
  ONE_BILLION_TO_TWO_BILLION = '10000,20000',
  TWO_BILLION_TO_THREE_BILLION = '20000,30000',
  THREE_BILLION_MORE = '30000,0',
}
export enum StoreBudgetLabel {
  EMPTY = '',
  LESS_THAN_FIVE_THOUSAND = '5,000만 원 이하',
  FIVE_THOUSAND_TO_ONE_BILLION = '5,000만 원 ~ 1억 원',
  ONE_BILLION_TO_TWO_BILLION = '1억 원 ~ 2억 원',
  TWO_BILLION_TO_THREE_BILLION = '2억 원 ~ 3억 원',
  THREE_BILLION_MORE = '3억 원 이상',
}
export const STORE_BUDGET_DATA_ARR: StoreBudgetValue[] = [
  StoreBudgetValue.LESS_THAN_FIVE_THOUSAND,
  StoreBudgetValue.FIVE_THOUSAND_TO_ONE_BILLION,
  StoreBudgetValue.ONE_BILLION_TO_TWO_BILLION,
  StoreBudgetValue.TWO_BILLION_TO_THREE_BILLION,
  StoreBudgetValue.THREE_BILLION_MORE,
];
export const STORE_BUDGET_MAPPER: Record<string, StoreBudgetLabel> = {
  [StoreBudgetValue.EMPTY]: StoreBudgetLabel.EMPTY,
  [StoreBudgetValue.LESS_THAN_FIVE_THOUSAND]:
    StoreBudgetLabel.LESS_THAN_FIVE_THOUSAND,
  [StoreBudgetValue.FIVE_THOUSAND_TO_ONE_BILLION]:
    StoreBudgetLabel.FIVE_THOUSAND_TO_ONE_BILLION,
  [StoreBudgetValue.ONE_BILLION_TO_TWO_BILLION]:
    StoreBudgetLabel.ONE_BILLION_TO_TWO_BILLION,
  [StoreBudgetValue.TWO_BILLION_TO_THREE_BILLION]:
    StoreBudgetLabel.TWO_BILLION_TO_THREE_BILLION,
  [StoreBudgetValue.THREE_BILLION_MORE]: StoreBudgetLabel.THREE_BILLION_MORE,
};

export const DEFAULT_WINDOW_WIDTH = 268;
export const DEFAULT_WINDOW_HEIGHT = 468;
