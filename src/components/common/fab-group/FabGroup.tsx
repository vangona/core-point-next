import MessageRounded from '@mui/icons-material/MessageRounded';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Image from 'next/image';

const FabGroup = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        right: 30,
        bottom: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Fab
        size='medium'
        color='primary'
        onClick={() => alert('창업 컨설팅 신청하기 연결')}
      >
        <MessageRounded />
      </Fab>
      <Fab
        size='medium'
        sx={{ backgroundColor: '#06BE34' }}
        href='https://blog.naver.com/corepoint_'
        target='_blank'
      >
        <Image
          src={'/naver-ci.png'}
          width={30}
          height={30}
          alt='네이버 블로그'
        />
      </Fab>
      <Fab
        size='medium'
        sx={{ backgroundColor: '#fae100' }}
        href='https://open.kakao.com/o/stsH1PSf'
        target='_blank'
      >
        <Image
          src={'/kakao-openchat.png'}
          width={30}
          height={30}
          alt='카카오톡 오픈채팅'
        />
      </Fab>
    </Box>
  );
};

export default FabGroup;
