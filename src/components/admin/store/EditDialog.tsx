'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import Close from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListItem from '@mui/material/ListItem';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { getStoreDetail } from '@/api/store';
import {
  PutStoreDescriptionBody,
  putStoreDescription,
} from '@/api/store/putStoreDescription';
import { convertMoneyString } from '@/utils';
import type { AlertProps, ModalProps } from '@mui/material';

type StoreEditDialogProps = Omit<ModalProps, 'children'> & {
  editedId?: string;
};
interface ImgData {
  file: File;
  previewUrl: string;
}
const StoreEditDialog = (props: StoreEditDialogProps) => {
  const { editedId, ...rest } = props;
  const queryClient = useQueryClient();
  const [editedDescription, setEditedDescription] = useState<string>('');
  const [additionalImg, setAdditionalImg] = useState<ImgData[]>([]);
  const [snackbarTitle, setSnackbarTitle] = useState('');
  const [snackbarStatus, setSnackbarStatus] =
    useState<AlertProps['severity']>('success');
  const [isSnackbar, setIsSnackbar] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ['stores', editedId],
    queryFn: () => getStoreDetail({ id: editedId }),
    select: (data) => data.data?.[0],
    enabled: !!editedId,
  });

  const { mutate } = useMutation<unknown, Error, PutStoreDescriptionBody>({
    mutationKey: ['stores'],
    mutationFn: (variables) => putStoreDescription(variables),
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

  const deleteImage = (imgData: ImgData) => {
    const filteredImgData = additionalImg.filter((data) => data !== imgData);
    setAdditionalImg(filteredImgData);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    Array.from(event.target.files).forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setAdditionalImg((prev) => [
          ...prev,
          { file, previewUrl: reader.result as string },
        ]);
      };
    });
  };

  const handleDescriptionSubmit = (
    descriptionBody: PutStoreDescriptionBody,
  ) => {
    if (descriptionBody.description === data?.description) return;
    mutate(descriptionBody);
  };

  useEffect(() => {
    if (!data) return;
    setEditedDescription(data.description ?? '');
  }, [data]);

  return (
    <>
      <Snackbar
        open={isSnackbar}
        onClose={() => setIsSnackbar(false)}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbarStatus}>{snackbarTitle}</Alert>
      </Snackbar>
      <Dialog {...rest}>
        <Box
          sx={{
            minWidth: '500px',
            minHeight: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {isLoading && <CircularProgress />}
          {!isLoading && data && (
            <>
              <DialogTitle>{data.store_name}</DialogTitle>
              <DialogContent sx={{ flexGrow: 1, width: '100%' }}>
                <ListItem>
                  {data.store_category} ﹒ {data.store_location} ﹒{' '}
                  {convertMoneyString(data.store_cost)}
                </ListItem>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <TextField
                    label='설명'
                    multiline
                    sx={{ mt: 2, width: '100%' }}
                    minRows={10}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    value={editedDescription}
                  />
                  <Button
                    sx={{ alignSelf: 'flex-end' }}
                    onClick={() =>
                      handleDescriptionSubmit({
                        id: data.store_id,
                        description: editedDescription,
                      })
                    }
                  >
                    설명 저장
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <ImageList
                    sx={{ height: '300px', overflow: 'auto' }}
                    rowHeight={150}
                  >
                    {data.store_img_src_arr &&
                      data.store_img_src_arr?.map((imgSrc, index) => (
                        <ImageListItem key={'store-edit__store-img--' + index}>
                          <Image fill src={imgSrc} alt='매장 이미지' />
                        </ImageListItem>
                      ))}
                    {additionalImg.map((imgData, index) => (
                      <ImageListItem
                        key={'additional-store-edit__store-img--' + index}
                        sx={{ position: 'relative' }}
                      >
                        <IconButton
                          onClick={() => deleteImage(imgData)}
                          sx={{
                            position: 'absolute',
                            top: 1,
                            right: 1,
                            zIndex: 9,
                          }}
                        >
                          <Close color='warning' />
                        </IconButton>
                        <Image
                          fill
                          src={imgData.previewUrl}
                          alt='매장 이미지'
                        />
                      </ImageListItem>
                    ))}
                    <label htmlFor='store-edit-upload-image'>
                      <input
                        onChange={handleImageChange}
                        type='file'
                        multiple
                        id='store-edit-upload-image'
                        style={{ display: 'none' }}
                      />
                      <Button
                        component='span'
                        sx={{
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <AddAPhoto />
                      </Button>
                    </label>
                  </ImageList>
                  <Button sx={{ alignSelf: 'flex-end' }}>이미지 저장</Button>
                </Box>
              </DialogContent>
            </>
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default StoreEditDialog;
