import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Store } from '@/api/store';
import {
  PatchStoreDescriptionBody,
  patchStoreDescription,
} from '@/api/store/patchStoreDescription';
import { DIMMED_GRAY } from '@/constants/color';
import type { AlertColor } from '@mui/material';

interface StoreDescriptionProps {
  data?: Store;
  setIsSnackbar: Dispatch<SetStateAction<boolean>>;
  setSnackbarStatus: Dispatch<SetStateAction<AlertColor | undefined>>;
  setSnackbarTitle: Dispatch<SetStateAction<string>>;
}
const StoreDescription = ({
  data,
  setIsSnackbar,
  setSnackbarStatus,
  setSnackbarTitle,
}: StoreDescriptionProps) => {
  const queryClient = useQueryClient();
  const [editedDescription, setEditedDescription] = useState<string>('');

  const { mutate } = useMutation<unknown, Error, PatchStoreDescriptionBody>({
    mutationKey: ['stores'],
    mutationFn: (variables) => patchStoreDescription(variables),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stores'] });
      setIsSnackbar(true);
      setSnackbarStatus('success');
      setSnackbarTitle('설명 수정에 성공했습니다.');
    },
    onError: () => {
      setIsSnackbar(true);
      setSnackbarStatus('error');
      setSnackbarTitle('설명 수정에 문제가 발생했습니다.');
    },
  });

  const handleDescriptionSubmit = (
    descriptionBody: PatchStoreDescriptionBody,
  ) => {
    if (!data?.store_id) return;
    if (descriptionBody.description === data?.description) return;
    mutate(descriptionBody);
  };

  useEffect(() => {
    if (!data) return;
    setEditedDescription(data.description ?? '');
  }, [data]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <TextField
        label='설명'
        multiline
        sx={{
          mt: 2,
          width: '650px',
          backgroundColor: DIMMED_GRAY,
        }}
        InputProps={{ sx: { fontFamily: 'Noto Sans KR' } }}
        minRows={10}
        onChange={(e) => setEditedDescription(e.target.value)}
        value={editedDescription}
      />
      <Button
        sx={{ alignSelf: 'flex-end' }}
        onClick={() => {
          if (!data) return;
          handleDescriptionSubmit({
            id: data.store_id,
            description: editedDescription,
          });
        }}
      >
        상세 설명 저장
      </Button>
    </Box>
  );
};

export default StoreDescription;
