import { useState } from 'react';
import Link from '@mui/material/Link';
import { PrivateAgreeModal } from '../private-agree-modal';

interface PrivateAgreeLinkProps {
  handleAgreeClick?: () => void;
}
const PrivateAgreeLink = ({ handleAgreeClick }: PrivateAgreeLinkProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Link
        sx={{ '&:hover': { cursor: 'pointer' } }}
        onClick={() => setIsModalOpen(true)}
      >
        개인정보 이용 및 수집 동의
      </Link>
      <PrivateAgreeModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleAgreeClick={handleAgreeClick}
      />
    </>
  );
};

export default PrivateAgreeLink;
