import { useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import InputBase from '@mui/material/InputBase';

const StoreHashTag = ({ storeId }: { storeId: string }) => {
  const [currentHashtag, setCurrentHashtag] = useState('');
  const [hashtags, setHashTags] = useState<string[]>([]);

  const handleChipAdd = () => {
    setHashTags([...hashtags, currentHashtag]);
    setCurrentHashtag('');
  };

  const handleChipRemove = (deletedIndex: number) => {
    function removeItemAtIndex<T>(array: T[], index: number): T[] {
      if (index < 0 || index >= array.length) {
        // 인덱스가 범위를 벗어나면 원래 배열을 그대로 반환
        return array;
      }

      // Array.slice를 사용하여 지정된 인덱스의 요소를 제외한 새 배열 생성
      return [...array.slice(0, index), ...array.slice(index + 1)];
    }
    const filteredArray = removeItemAtIndex(hashtags, deletedIndex);
    setHashTags(filteredArray);
  };

  return (
    <Box
      sx={{
        mx: 1,
        my: 2,
        p: 1,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
      }}
    >
      {hashtags.map((hashtag, index) => (
        <Chip
          key={'store-hastag-' + index}
          label={hashtag}
          sx={{ mr: 1 }}
          onDelete={() => handleChipRemove(index)}
        />
      ))}
      <InputBase
        value={currentHashtag}
        onChange={(e) => setCurrentHashtag(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === 'Tab') {
            e.preventDefault();
            handleChipAdd();
          }
          if (
            e.key === 'Backspace' &&
            currentHashtag === '' &&
            hashtags.length > 0 &&
            confirm(hashtags[hashtags.length - 1] + '을 삭제하시겠습니까?')
          ) {
            handleChipRemove(hashtags.length - 1);
          }
        }}
        sx={{ ml: 1, flex: 1, width: '100%' }}
        placeholder='해시태그를 입력하세요. 입력을 마치시면 Enter 혹은 Tab 키를 눌러주세요.'
        inputProps={{ 'aria-label': 'search store' }}
      />
    </Box>
  );
};

export default StoreHashTag;
