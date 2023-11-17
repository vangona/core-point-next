import ChatBubbleOutlineRounded from '@mui/icons-material/ChatBubbleOutlineRounded';
import MessageRounded from '@mui/icons-material/MessageRounded';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

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
        sx={{ backgroundColor: 'yellow' }}
        onClick={() => alert('카톡 오픈 채팅방 연결')}
      >
        <ChatBubbleOutlineRounded />
        수정 예정
      </Fab>
    </Box>
  );
};

export default FabGroup;
