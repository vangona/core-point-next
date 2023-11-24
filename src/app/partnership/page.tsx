import { Metadata } from 'next';
import GeneralHero from '@/components/layout/general-layout/GeneralHero';
import PartnershipContent from './content';

export const metadata: Metadata = {
  title: '코어창업 | 협업 신청',
  description: '코어창업 협업 브랜드 신청',
};

export default function Partnership() {
  return (
    <>
      <GeneralHero
        title='협업 신청'
        description='브랜드 신규 협업 신청'
        imgSrc='/partnership-hero.webp'
      />
      <PartnershipContent />
    </>
  );
}
