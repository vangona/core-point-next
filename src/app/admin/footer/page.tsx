import { Metadata } from 'next';
import Content from './Content';

export const metadata: Metadata = {
  title: '코어창업 | 관리자 페이지',
  description: '코어창업 관리자 페이지',
};

export default function AdminFooterPage() {
  return <Content />;
}
