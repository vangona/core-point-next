import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import {
  PatchStoreMobileDescriptionBody,
  patchStoreMobileDescription,
} from '@/api/store/patchStoreMobileDescription';
import { Store } from '@/api/store/types';
import { DIMMED_GRAY } from '@/constants/color';
import type { AlertColor } from '@mui/material';

interface StoreMobileDescriptionProps {
  data?: Store;
  setIsSnackbar: Dispatch<SetStateAction<boolean>>;
  setSnackbarStatus: Dispatch<SetStateAction<AlertColor | undefined>>;
  setSnackbarTitle: Dispatch<SetStateAction<string>>;
}
const StoreMobileDescription = ({
  data,
  setIsSnackbar,
  setSnackbarStatus,
  setSnackbarTitle,
}: StoreMobileDescriptionProps) => {
  const queryClient = useQueryClient();
  const [editedMobileDescription, setEditedMobileDescription] =
    useState<string>('');

  const { mutate: updateMobileDescription } = useMutation<
    unknown,
    Error,
    PatchStoreMobileDescriptionBody
  >({
    mutationKey: ['stores'],
    mutationFn: (variables) => patchStoreMobileDescription(variables),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stores'] });
      setIsSnackbar(true);
      setSnackbarStatus('success');
      setSnackbarTitle('모바일 설명 수정에 성공했습니다.');
    },
    onError: () => {
      setIsSnackbar(true);
      setSnackbarStatus('error');
      setSnackbarTitle('모바일 설명 수정에 문제가 발생했습니다.');
    },
  });

  const handleMobileDescriptionSubmit = (
    descriptionBody: PatchStoreMobileDescriptionBody,
  ) => {
    if (descriptionBody.mobile_description === data?.mobile_description) return;
    updateMobileDescription(descriptionBody);
  };

  useEffect(() => {
    if (!data) return;
    setEditedMobileDescription(data.mobile_description ?? '');
  }, [data]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <TextField
        label='모바일 설명'
        multiline
        sx={{ mt: 2, width: '350px', backgroundColor: DIMMED_GRAY }}
        InputProps={{ sx: { fontFamily: 'Noto Sans KR' } }}
        minRows={10}
        onChange={(e) => setEditedMobileDescription(e.target.value)}
        value={editedMobileDescription}
      />
      <Button
        sx={{ alignSelf: 'flex-end' }}
        onClick={() => {
          if (!data) return;
          handleMobileDescriptionSubmit({
            id: data.store_id,
            mobile_description: editedMobileDescription,
          });
        }}
      >
        모바일 설명 저장
      </Button>
    </Box>
  );
};

export default StoreMobileDescription;
