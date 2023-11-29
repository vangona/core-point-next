'use client';

import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { getStore } from '@/api/store';
import { StoreColumnDef } from './constants';
import type { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: StoreColumnDef.ID, headerName: 'ID', width: 90 },
  {
    field: StoreColumnDef.STORE_NAME,
    headerName: '매물 이름',
    width: 150,
    editable: true,
  },
  {
    field: StoreColumnDef.STORE_LOCATION,
    headerName: '매물 위치',
    width: 150,
    editable: true,
  },
  {
    field: StoreColumnDef.STORE_CATEGORY,
    headerName: '업종',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: StoreColumnDef.DESCRIPTION,
    headerName: '설명',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: StoreColumnDef.MANAGER,
    headerName: '담당자',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: StoreColumnDef.MANAGER_CONTACT,
    headerName: '담당자 연락처',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: StoreColumnDef.HAS_IMG,
    headerName: '이미지 유무',
    type: 'boolean',
    width: 150,
    editable: false,
  },
];

type StoreRow = Record<StoreColumnDef, unknown>[];

const StoreDataGrid = () => {
  const [rows, setRows] = useState<StoreRow>([]);
  const { data } = useQuery({
    queryKey: ['stores'],
    queryFn: () => getStore({}),
  });

  useEffect(() => {
    if (!data) return;

    const parsedStore = data?.data.map((storeData) => ({
      [StoreColumnDef.ID]: storeData.store_id,
      [StoreColumnDef.STORE_NAME]: storeData.store_name,
      [StoreColumnDef.STORE_LOCATION]: storeData.store_location,
      [StoreColumnDef.STORE_CATEGORY]: storeData.store_category,
      [StoreColumnDef.DESCRIPTION]: storeData.description ?? '',
      [StoreColumnDef.MANAGER]: storeData.manager,
      [StoreColumnDef.MANAGER_CONTACT]: storeData.manager_contact,
      [StoreColumnDef.HAS_IMG]: !!(
        storeData.store_img_src_arr && storeData.store_img_src_arr.length > 0
      ),
    }));

    setRows(parsedStore);
  }, [data]);

  return (
    <DataGrid
      autoHeight
      rows={rows}
      columns={columns}
      initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
      slots={{ toolbar: GridToolbar }}
    />
  );
};

export default StoreDataGrid;
