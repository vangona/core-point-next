import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormHelperText from '@mui/material/FormHelperText';
import InputBase from '@mui/material/InputBase';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PatchStoreTagsBody, patchStoreTags } from '@/api/store/patchStoreTags';
import type { AlertColor } from '@mui/material';

const StoreHashTag = ({
  tagData,
  storeId,
  setIsSnackbar,
  setSnackbarStatus,
  setSnackbarTitle,
}: {
  tagData?: string[];
  storeId: string;
  setIsSnackbar: Dispatch<SetStateAction<boolean>>;
  setSnackbarStatus: Dispatch<SetStateAction<AlertColor | undefined>>;
  setSnackbarTitle: Dispatch<SetStateAction<string>>;
}) => {
  const queryClient = useQueryClient();

  const [currentHashtag, setCurrentHashtag] = useState('');
  const [hashtags, setHashTags] = useState<string[]>([]);

  const { mutate } = useMutation<unknown, Error, PatchStoreTagsBody>({
    mutationKey: ['stores'],
    mutationFn: (variables) => patchStoreTags(variables),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stores'] });
      setIsSnackbar(true);
      setSnackbarStatus('success');
      setSnackbarTitle('매물 태그 입력에 성공했습니다.');
    },
    onError: () => {
      setIsSnackbar(true);
      setSnackbarStatus('error');
      setSnackbarTitle('매물 태그 입력에 문제가 발생했습니다.');
    },
  });

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

  const handleSubmit = () => {
    if (JSON.stringify(hashtags) === JSON.stringify(tagData)) {
      return;
    }

    mutate({ id: storeId, tags: hashtags });
  };

  useEffect(() => {
    if (tagData) {
      setHashTags(tagData);
    }
  }, [tagData]);

  return (
    <Box
      sx={{
        mx: 1,
        marginTop: 2,
        marginBottom: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Box
        sx={{
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
          placeholder='태그를 입력하세요. 입력을 마치시면 Enter 혹은 Tab 키를 눌러주세요.'
          inputProps={{ 'aria-label': 'search store' }}
        />
      </Box>
      <FormHelperText>
        입력을 마치시면 Enter 혹은 Tab 키를 눌러서 태그를 추가해주세요
      </FormHelperText>
      <Button sx={{ alignSelf: 'flex-end' }} onClick={handleSubmit}>
        매물 태그정보 입력
      </Button>
    </Box>
  );
};

export default StoreHashTag;
