import GeneralHero from '@/components/layout/general-layout/GeneralHero';
import TransferConsultingContent from './content';

export default function Transfer() {
  return (
    <>
      <GeneralHero
        title='양도 컨설팅 신청'
        description='복잡하고 어려운 양도, 코어창업이 돕겠습니다'
        imgSrc='/transfer-hero.webp'
      />
      <TransferConsultingContent />
    </>
  );
}
