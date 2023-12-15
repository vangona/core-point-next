'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { useMutation } from '@tanstack/react-query';
import {
  ScrapOpeningInformationResponse,
  ScrappedOpeningInformation,
  scrapOpeningInformation,
} from '@/api/opening-information';
import ProgressBackdrop from '@/components/common/progress-backdrop/ProgressBackdrop';
import type { GridColDef } from '@mui/x-data-grid';

const InformationCrawler = () => {
  const [pageNumber, setPageNumber] = useState(7);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrappedData, setScrappedData] = useState<
    ScrappedOpeningInformation[] | undefined
  >(undefined);

  const { mutate, isPending } = useMutation<
    ScrapOpeningInformationResponse,
    Error,
    { pageNumber: number }
  >({
    mutationFn: (variables) => scrapOpeningInformation(variables.pageNumber),
    onSuccess: (data) => {
      setIsModalOpen(true);
      setScrappedData(data?.data);
    },
  });

  const scrappedDataColumns: GridColDef[] = [
    { field: 'title', type: 'string', headerName: '제목', width: 300 },
    { field: 'url', type: 'string', headerName: '포스팅 주소', width: 200 },
    { field: 'imgSrc', type: 'string', headerName: '이미지 주소', width: 200 },
  ];

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
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
            <Button variant='contained'>
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
