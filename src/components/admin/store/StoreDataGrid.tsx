'use client';

import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar, koKR } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { getStore } from '@/api/store';
import { StoreColumnDef } from './constants';
import StoreEditDialog from './EditDialog';
import type { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: StoreColumnDef.ID, headerName: 'ID', width: 90 },
  { field: StoreColumnDef.STORE_NUMBER, headerName: '매물 번호', width: 90 },
  {
    field: StoreColumnDef.STORE_NAME,
    headerName: '매물 이름',
    width: 150,
  },
  {
    field: StoreColumnDef.STORE_LOCATION,
    headerName: '매물 위치',
    width: 150,
  },
  {
    field: StoreColumnDef.STORE_CATEGORY,
    headerName: '업종',
    type: 'string',
    width: 150,
  },
  {
    field: StoreColumnDef.MANAGER,
    headerName: '담당자',
    type: 'string',
    width: 150,
  },
  {
    field: StoreColumnDef.MANAGER_CONTACT,
    headerName: '담당자 연락처',
    type: 'string',
    width: 150,
  },
  {
    field: StoreColumnDef.DESCRIPTION,
    headerName: '설명 유무',
    type: 'boolean',
    width: 150,
  },
  {
    field: StoreColumnDef.MOBILE_DESCRIPTION,
    headerName: '모바일 설명 유무',
    type: 'boolean',
    width: 150,
  },
  {
    field: StoreColumnDef.HAS_IMG,
    headerName: '이미지 유무',
    type: 'boolean',
    width: 150,
  },
];

type StoreRow = Record<StoreColumnDef, unknown>[];

const StoreDataGrid = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedId, setEditedId] = useState<string | undefined>(undefined);
  const [rows, setRows] = useState<StoreRow>([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 20,
  });

  const { data, isLoading } = useQuery({
    queryKey: ['stores', paginationModel.page],
    queryFn: () =>
      getStore({
        page: (paginationModel.page + 1).toString(),
        limit: paginationModel.pageSize.toString(),
      }),
  });
  const [totalRowCount, setTotalRowCount] = useState(data?.count || 0);

  useEffect(() => {
    setTotalRowCount((prev) => (data?.count === undefined ? prev : data.count));
  }, [data?.count]);

  useEffect(() => {
    if (!data) return;

    const parsedStore = data?.data.map((storeData) => ({
      [StoreColumnDef.ID]: storeData.store_id,
      [StoreColumnDef.STORE_NUMBER]: storeData.store_number,
      [StoreColumnDef.STORE_NAME]: storeData.store_name,
      [StoreColumnDef.STORE_LOCATION]: storeData.store_location,
      [StoreColumnDef.STORE_CATEGORY]: storeData.store_category,
      [StoreColumnDef.MANAGER]: storeData.manager,
      [StoreColumnDef.MANAGER_CONTACT]: storeData.manager_contact,
      [StoreColumnDef.DESCRIPTION]: !!storeData.description,
      [StoreColumnDef.MOBILE_DESCRIPTION]: !!storeData.mobile_description,
      [StoreColumnDef.HAS_IMG]: !!(
        storeData.store_img_src_arr && storeData.store_img_src_arr.length > 0
      ),
    }));

    setRows(parsedStore);
  }, [data]);

  return (
    <>
      <DataGrid
        rows={rows}
        rowCount={totalRowCount}
        columns={columns}
        loading={isLoading}
        onRowDoubleClick={(params) => {
          setEditedId(String(params.id));
          setIsEdit(true);
        }}
        slots={{ toolbar: GridToolbar }}
        localeText={koKR.components.MuiDataGrid.defaultProps.localeText}
        paginationModel={paginationModel}
        paginationMode='server'
        onPaginationModelChange={setPaginationModel}
      />
      <StoreEditDialog
        open={isEdit}
        onClose={() => setIsEdit(false)}
        editedId={editedId}
      />
    </>
  );
};

export default StoreDataGrid;
