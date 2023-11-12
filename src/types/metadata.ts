export interface CompanyData {
  companyName: string;
  representativeName: string;
  companyContact: string;
  companyEmail: string;
  companyAddress: string;
  companyRegistrationNumber: string;
}

export interface FooterData {
  companyData: CompanyData;
}

export interface SiteMetaData {
  logoImgSrc: string;
  personalUseAgreementContent: string;
  smsNumber: string;
  kakaoUrl: string;
}

export interface HeroData {
  title: string;
  description: string;
  imgSrc: string;
}
