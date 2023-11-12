export interface OpeningFormData {
  name: string;
  contact: string;
  desireLocation: string;
  budget: string;
  desireCategory: string;
  additionalInquiry?: string;
}

export interface AssignmentFormData {
  name: string;
  contact: string;
  location: string;
  size: string;
  storeName: string;
  category: string;
  additionalInquiry?: string;
}

export interface BrandPartnershipFormData {
  name: string;
  contact: string;
  brandName: string;
  additionalInquiry?: string;
}
