'use client';

import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  OpeningInformation,
  PostOpeningInformationBody,
  ScrapOpeningInformationResponse,
  ScrappedOpeningInformation,
  postOpeningInformation,
  scrapOpeningInformation,
} from '@/api/opening-information';
import ProgressBackdrop from '@/components/common/progress-backdrop/ProgressBackdrop';
import type { AlertProps } from '@mui/material';
import type { GridColDef } from '@mui/x-data-grid';

const InformationCrawler = ({
  originData,
}: {
  originData?: OpeningInformation[];
}) => {
  const queryClient = useQueryClient();
  const [pageNumber, setPageNumber] = useState(7);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrappedData, setScrappedData] = useState<
    ScrappedOpeningInformation[] | undefined
  >(undefined);

  const [snackbarTitle, setSnackbarTitle] = useState('');
  const [snackbarStatus, setSnackbarStatus] =
    useState<AlertProps['severity']>('success');
  const [isSnackbar, setIsSnackbar] = useState(false);

  const { mutate, isPending } = useMutation<
    ScrapOpeningInformationResponse,
    Error,
    { pageNumber: number }
  >({
    mutationFn: (variables) => scrapOpeningInformation(variables.pageNumber),
    onSuccess: (data) => {
      const filteredData = data?.data.filter(
        (information) =>
          originData?.findIndex(
            (origin) =>
              origin.title === information.title &&
              origin.url === information.url,
          ) === -1,
      );

      setIsModalOpen(true);
      setScrappedData(filteredData);
    },
  });

  const { mutate: insertInformations } = useMutation<
    PostOpeningInformationBody,
    Error,
    ScrappedOpeningInformation[]
  >({
    mutationFn: () =>
      postOpeningInformation({ openingInformations: scrappedData ?? [] }),
  });

  const scrappedDataColumns: GridColDef[] = [
    { field: 'title', type: 'string', headerName: '제목', width: 300 },
    { field: 'url', type: 'string', headerName: '포스팅 주소', width: 200 },
    { field: 'imgSrc', type: 'string', headerName: '이미지 주소', width: 200 },
  ];

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Snackbar
        open={isSnackbar}
        onClose={() => setIsSnackbar(false)}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbarStatus}>{snackbarTitle}</Alert>
      </Snackbar>
      <Box sx={{ alignSelf: 'flex-end', display: 'flex', margin: 2, gap: 2 }}>
        <TextField
          value={pageNumber}
          onChange={(e) => setPageNumber(Number(e.target.value))}
          type='number'
          variant='standard'
          sx={{ width: '50px' }}
        />
        <Box>페이지 까지 크롤링</Box>
        <Button
          variant='contained'
          onClick={() =>
            confirm('크롤링을 진행하시겠습니까?') && mutate({ pageNumber })
          }
        >
          블로그 포스팅 크롤링하기
        </Button>
      </Box>
      {isModalOpen && (
        <Box
          sx={{ display: 'flex', flexDirection: 'column', margin: 2, gap: 2 }}
        >
          <Typography variant='h6'>크롤링된 추가 데이터</Typography>
          <DataGrid
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            rows={
              scrappedData?.map((data, index) => ({ id: index, ...data })) ?? []
            }
            rowCount={scrappedData?.length}
            columns={scrappedDataColumns}
          />
          <Box sx={{ alignSelf: 'flex-end', display: 'flex', gap: 1 }}>
            <Button
              variant='contained'
              color='error'
              onClick={() => {
                if (
                  confirm(
                    '정말 취소하시겠습니까? 가져와진 데이터가 초기화됩니다.',
                  )
                ) {
                  setIsModalOpen(false);
                  setScrappedData(undefined);
                }
              }}
            >
              취소
            </Button>
            <Button
              variant='contained'
              onClick={() => {
                if (
                  !confirm(
                    scrappedData?.length + '개의 데이터를 추가하시겠습니까?',
                  )
                )
                  return;
                insertInformations(scrappedData ?? [], {
                  onSuccess: () => {
                    queryClient.invalidateQueries({
                      queryKey: ['opening-information'],
                    });
                    setScrappedData([]);
                    setIsSnackbar(true);
                    setSnackbarStatus('success');
                    setSnackbarTitle(
                      scrappedData?.length + '개의 데이터가 추가되었습니다.',
                    );
                  },
                  onError: (error) => {
                    setIsSnackbar(true);
                    setSnackbarStatus('error');
                    setSnackbarTitle(
                      '정보 추가 중 문제가 발생했습니다. ' + error.message,
                    );
                  },
                });
              }}
            >
              {scrappedData?.length}개의 데이터 추가
            </Button>
          </Box>
        </Box>
      )}
      <ProgressBackdrop open={isPending} />
    </Box>
  );
};

export default InformationCrawler;
