'use client';

import { ChangeEvent, useState } from 'react';
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import Close from '@mui/icons-material/Close';
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
import TextField from '@mui/material/TextField';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { getStoreDetail } from '@/api/store';
import { convertMoneyString } from '@/utils';
import type { ModalProps } from '@mui/material';

type StoreEditDialogProps = Omit<ModalProps, 'children'> & {
  editedId?: string;
};
interface ImgData {
  file: File;
  previewUrl: string;
}
const StoreEditDialog = (props: StoreEditDialogProps) => {
  const { editedId, ...rest } = props;
  const [additionalImg, setAdditionalImg] = useState<ImgData[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ['store', editedId],
    queryFn: () => getStoreDetail({ id: editedId }),
    select: (data) => data.data?.[0],
    enabled: !!editedId,
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

  return (
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
                  defaultValue={data.description}
                />
                <Button sx={{ alignSelf: 'flex-end' }}>설명 저장</Button>
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
                      <Image fill src={imgData.previewUrl} alt='매장 이미지' />
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
                <Button sx={{ alignSelf: 'flex-end' }}>설명 저장</Button>
              </Box>
            </DialogContent>
          </>
        )}
      </Box>
    </Dialog>
  );
};

export default StoreEditDialog;
