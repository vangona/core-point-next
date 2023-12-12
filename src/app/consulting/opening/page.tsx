import GeneralHero from '@/components/layout/general-layout/GeneralHero';
import OpeningConsultingContent from './content';

export default function Opening() {
  return (
    <>
      <GeneralHero
        title='창업 컨설팅 신청'
        description='코어창업이 성공을 위한 열쇠가 되어드리겠습니다.'
        imgSrc='/opening-hero.webp'
      />
      <OpeningConsultingContent />
    </>
  );
}
