import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const Content = dynamic(() => import('./Content'), { ssr: false });

export const metadata: Metadata = {
  title: '코어창업 | 관리자 페이지',
  description: '코어창업 관리자 페이지',
};

export default function AdminMainInformationPage() {
  return <Content />;
}
