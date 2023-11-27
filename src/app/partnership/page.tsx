import GeneralHero from '@/components/layout/general-layout/GeneralHero';
import PartnershipContent from './content';

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
