import { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { GetAllOpeningInformationResponse } from '@/api/opening-information/getAllOpeningInformation copy';
import type { GridColDef } from '@mui/x-data-grid';

const MainInformationDataGrid = ({
  data,
}: {
  data?: GetAllOpeningInformationResponse;
}) => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });

  const informationDataColumns: GridColDef[] = [
    { field: 'title', type: 'string', headerName: '제목', width: 300 },
    { field: 'url', type: 'string', headerName: '포스팅 주소', width: 200 },
    { field: 'imgSrc', type: 'string', headerName: '이미지 주소', width: 200 },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <DataGrid
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        rows={
          data?.data.map((data) => ({
            id: data.id,
            title: data.title,
            url: data.url,
            imgSrc: data.imgSrc,
          })) ?? []
        }
        rowCount={data?.count}
        columns={informationDataColumns}
      />
    </Box>
  );
};

export default MainInformationDataGrid;
