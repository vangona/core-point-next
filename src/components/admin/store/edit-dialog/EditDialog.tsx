'use client';

import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Snackbar from '@mui/material/Snackbar';
import { useQuery } from '@tanstack/react-query';
import { getStoreDetail } from '@/api/store';
import { convertMoneyString } from '@/utils';
import StoreDescription from './StoreDescription';
import StoreHashTag from './StoreHashTag';
import StoreImgSrc from './StoreImgSrc';
import StoreMobileDescription from './StoreMobileDescription';
import type { AlertProps, ModalProps } from '@mui/material';

type StoreEditDialogProps = Omit<ModalProps, 'children'> & {
  editedId?: string;
};
export interface ImgData {
  file: File;
  previewUrl: string;
}

const StoreEditDialog = (props: StoreEditDialogProps) => {
  const { editedId, ...rest } = props;
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
      <Dialog
        {...rest}
        PaperProps={{ sx: { width: '100%', maxWidth: '80vw' } }}
      >
        <Box
          sx={{
            width: '800px',
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
                <Divider sx={{ my: 1 }} />
                <StoreDescription
                  data={data}
                  setIsSnackbar={setIsSnackbar}
                  setSnackbarStatus={setSnackbarStatus}
                  setSnackbarTitle={setSnackbarTitle}
                />
                <Divider sx={{ my: 1 }} />
                <StoreMobileDescription
                  data={data}
                  setIsSnackbar={setIsSnackbar}
                  setSnackbarStatus={setSnackbarStatus}
                  setSnackbarTitle={setSnackbarTitle}
                />
                <Divider sx={{ my: 1 }} />
                <StoreHashTag
                  tagData={data.store_tags}
                  storeId={data.store_id}
                  setIsSnackbar={setIsSnackbar}
                  setSnackbarStatus={setSnackbarStatus}
                  setSnackbarTitle={setSnackbarTitle}
                />
                <Divider sx={{ my: 1 }} />
                <StoreImgSrc
                  data={data}
                  editedId={editedId}
                  open={props.open}
                  setIsSnackbar={setIsSnackbar}
                  setSnackbarStatus={setSnackbarStatus}
                  setSnackbarTitle={setSnackbarTitle}
                />
              </DialogContent>
            </>
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default StoreEditDialog;
