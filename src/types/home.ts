import { HeroData } from './metadata';
import { Store } from './store';

export type MainHeroCaroselData = HeroData[];

export interface RecommendedStoreData {
  recommendedStoreData: Store[];
  limit: number;
}

export interface SuccessExample {
  title: string;
  content: string;
  imgSrc: string;
}

export interface SuccessExampleData {
  successExampleData: SuccessExample[];
  limit: number;
}

export interface LatestStoreData {
  latestStoreData: Store[];
  limit: number;
}

export interface BrandData {
  brandId: string;
  brandName: string;
  imgSrc: string;
}
