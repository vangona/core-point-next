import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import Close from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import imageCompression from 'browser-image-compression';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import {
  PostStoreImgResponse,
  StoreImgData,
  postStoreImg,
} from '@/api/storage/postStoreImg';
import { PatchStoreImgBody, patchStoreImg } from '@/api/store/patchStoreImg';
import { Store } from '@/api/store/types';
import { ImgData } from './EditDialog';
import type { AlertColor } from '@mui/material';

interface StoreImgSrcProps {
  data?: Store;
  editedId?: string;
  open?: boolean;
  setIsSnackbar: Dispatch<SetStateAction<boolean>>;
  setSnackbarStatus: Dispatch<SetStateAction<AlertColor | undefined>>;
  setSnackbarTitle: Dispatch<SetStateAction<string>>;
}
const StoreImgSrc = ({
  data,
  editedId,
  open,
  setIsSnackbar,
  setSnackbarStatus,
  setSnackbarTitle,
}: StoreImgSrcProps) => {
  const queryClient = useQueryClient();
  const [imgSrcArr, setImgSrcArr] = useState<string[]>([]);
  const [additionalImg, setAdditionalImg] = useState<ImgData[]>([]);
  const [isImgLoading, setIsImgLoading] = useState(false);

  const { mutate: uploadImage } = useMutation<
    PostStoreImgResponse,
    Error,
    StoreImgData
  >({
    mutationKey: ['store-img'],
    mutationFn: (variables) => postStoreImg(variables),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stores'] });
      setIsSnackbar(true);
      setSnackbarStatus('success');
      setSnackbarTitle('이미지 업로드에 성공했습니다.');
    },
    onError: () => {
      setIsSnackbar(true);
      setSnackbarStatus('error');
      setSnackbarTitle('이미지 업로드에 문제가 발생했습니다.');
    },
  });

  const { mutate: patchImg } = useMutation<unknown, Error, PatchStoreImgBody>({
    mutationKey: ['store-img'],
    mutationFn: (variables) => patchStoreImg(variables),
    onSuccess: () => {
      setAdditionalImg([]);
      queryClient.invalidateQueries({ queryKey: ['stores'] });
      queryClient.invalidateQueries({ queryKey: ['stores', editedId] });
      setIsSnackbar(true);
      setSnackbarStatus('success');
      setSnackbarTitle('이미지 수정에 성공했습니다.');
    },
    onError: () => {
      setAdditionalImg([]);
      setIsSnackbar(true);
      setSnackbarStatus('error');
      setSnackbarTitle('이미지 수정에 문제가 발생했습니다.');
    },
  });

  const deleteOriginImage = (imgSrc: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    const filteredImgSrc = imgSrcArr.filter((src) => src !== imgSrc);
    setImgSrcArr(filteredImgSrc);
  };

  const deleteAdditioanlImage = (imgData: ImgData) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    const filteredImgData = additionalImg.filter((data) => data !== imgData);
    setAdditionalImg(filteredImgData);
  };

  const compressImage = async (image: File): Promise<ImgData> => {
    const compressedImage = await imageCompression(image, {
      maxSizeMB: 0.5,
      useWebWorker: true,
    });
    const previewUrl =
      await imageCompression.getDataUrlFromFile(compressedImage);
    return { file: compressedImage, previewUrl };
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const promiseArr: Promise<ImgData>[] = [];
    Array.from(event.target.files).forEach((file) => {
      const result = compressImage(file);
      promiseArr.push(result);
    });
    setIsImgLoading(true);
    Promise.all(promiseArr).then((processedData) => {
      setIsImgLoading(false);
      setAdditionalImg((prev) => [...prev, ...processedData]);
    });
  };

  const handleImageSubmit = () => {
    if (!editedId) return;

    const newImgSrcArr = [...imgSrcArr];
    additionalImg.forEach((imgData) => {
      const filepath = editedId + '/' + uuidv4() + '.png';
      uploadImage({
        filename: filepath,
        file: imgData.file,
      });
      newImgSrcArr.push(
        process.env.NEXT_PUBLIC_SUPABASE_STORE_IMG_STORAGE + '/' + filepath,
      );
    });
    patchImg({ id: editedId, imgSrcArr: newImgSrcArr });
  };

  useEffect(() => {
    if (!data) return;
    setImgSrcArr(data.store_img_src_arr ?? []);
  }, [data]);

  useEffect(() => {
    setAdditionalImg([]);
  }, [open]);

  return (
    <>
      <Backdrop
        open={isImgLoading}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          zIndex: (theme) => theme.zIndex.modal + 1,
        }}
      >
        <CircularProgress />
        <Typography color='primary.contrastText'>
          이미지 압축 및 가공중입니다.
        </Typography>
      </Backdrop>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <ImageList sx={{ height: '300px', overflow: 'auto' }} rowHeight={150}>
          {imgSrcArr.map((imgSrc, index) => (
            <ImageListItem
              key={'store-edit__store-img--' + index}
              sx={{ position: 'relative' }}
            >
              <IconButton
                onClick={() => deleteOriginImage(imgSrc)}
                sx={{
                  position: 'absolute',
                  top: 1,
                  right: 1,
                  zIndex: 9,
                }}
              >
                <Close color='warning' />
              </IconButton>
              <Image fill src={imgSrc} alt='매장 이미지' />
            </ImageListItem>
          ))}
          {additionalImg.map((imgData, index) => (
            <ImageListItem
              key={'additional-store-edit__store-img--' + index}
              sx={{ position: 'relative' }}
            >
              <IconButton
                onClick={() => deleteAdditioanlImage(imgData)}
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
        <Button sx={{ alignSelf: 'flex-end' }} onClick={handleImageSubmit}>
          이미지 저장
        </Button>
      </Box>
    </>
  );
};

export default StoreImgSrc;
