export interface OpeningInformation {
  id: string;
  title?: string;
  imgSrc?: string;
  url?: string;
  created_at: string;
  deleted: boolean;
}

export interface ScrappedOpeningInformation {
  title?: string;
  imgSrc?: string;
  url?: string;
}
