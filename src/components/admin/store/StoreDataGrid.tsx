'use client';

import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar, koKR } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { getStore } from '@/api/store';
import { StoreColumnDef } from './constants';
import StoreEditDialog from './edit-dialog/EditDialog';
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
    field: StoreColumnDef.STORE_STATE,
    headerName: '매물 상태',
    width: 100,
  },
  {
    field: StoreColumnDef.STORE_CATEGORY,
    headerName: '업종',
    type: 'string',
    width: 100,
  },
  {
    field: StoreColumnDef.STORE_LOCATION,
    headerName: '매물 위치',
    width: 100,
  },
  {
    field: StoreColumnDef.STORE_COST,
    headerName: '창업 비용',
    width: 100,
  },
  {
    field: StoreColumnDef.STORE_SIZE,
    headerName: '매장 면적(평)',
    width: 100,
  },
  {
    field: StoreColumnDef.STORE_SIZE_M2,
    headerName: '매장 면적(m²)',
    width: 100,
  },

  {
    field: StoreColumnDef.MONTHLY_SALES,
    headerName: '월 매출',
    width: 100,
  },
  {
    field: StoreColumnDef.MONTHLY_REVENUE,
    headerName: '월 수익',
    width: 100,
  },
  {
    field: StoreColumnDef.MONTHLY_COST,
    headerName: '월 지출',
    width: 100,
  },
  {
    field: StoreColumnDef.PERSONAL_COST,
    headerName: '인건비',
    width: 75,
  },
  {
    field: StoreColumnDef.MATERIAL_COST,
    headerName: '재료비',
    width: 75,
  },
  {
    field: StoreColumnDef.RENT_COST,
    headerName: '월 비용(임대료)',
    width: 100,
  },
  {
    field: StoreColumnDef.DUES_COST,
    headerName: '공과금',
    width: 75,
  },
  {
    field: StoreColumnDef.ETC_COST,
    headerName: '기타 비용',
    width: 75,
  },
  {
    field: StoreColumnDef.MANAGER,
    headerName: '담당자',
    type: 'string',
    width: 100,
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
    width: 100,
  },
  {
    field: StoreColumnDef.MOBILE_DESCRIPTION,
    headerName: '모바일 설명 유무',
    type: 'boolean',
    width: 100,
  },
  {
    field: StoreColumnDef.STORE_TAGS,
    headerName: '매물 태그 유무',
    type: 'boolean',
    width: 100,
  },
  {
    field: StoreColumnDef.HAS_IMG,
    headerName: '이미지 유무',
    type: 'boolean',
    width: 100,
  },
  {
    field: StoreColumnDef.CREATED_AT,
    headerName: '생성 일자',
    type: 'dateTime',
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
      [StoreColumnDef.STORE_STATE]: storeData.store_state,
      [StoreColumnDef.STORE_NAME]: storeData.store_name,
      [StoreColumnDef.STORE_CATEGORY]: storeData.store_category,
      [StoreColumnDef.STORE_LOCATION]: storeData.store_location,
      [StoreColumnDef.SALES_REASON]: storeData.sales_reason,
      [StoreColumnDef.STORE_COST]: storeData.store_cost,
      [StoreColumnDef.STORE_SIZE]: storeData.store_size,
      [StoreColumnDef.STORE_SIZE_M2]: storeData.store_size_m2,
      [StoreColumnDef.MONTHLY_SALES]: storeData.monthly_sales,
      [StoreColumnDef.MONTHLY_REVENUE]: storeData.monthly_revenue,
      [StoreColumnDef.MONTHLY_COST]: storeData.monthly_cost,
      [StoreColumnDef.PERSONAL_COST]: storeData.personal_cost,
      [StoreColumnDef.MATERIAL_COST]: storeData.material_cost,
      [StoreColumnDef.RENT_COST]: storeData.rent_cost,
      [StoreColumnDef.DUES_COST]: storeData.dues_cost,
      [StoreColumnDef.ETC_COST]: storeData.etc_cost,
      [StoreColumnDef.MANAGER]: storeData.manager,
      [StoreColumnDef.MANAGER_CONTACT]: storeData.manager_contact,
      [StoreColumnDef.DESCRIPTION]: !!storeData.description,
      [StoreColumnDef.MOBILE_DESCRIPTION]: !!storeData.mobile_description,
      [StoreColumnDef.STORE_TAGS]: !!(
        storeData.store_tags && storeData.store_tags.length !== 0
      ),
      [StoreColumnDef.HAS_IMG]: !!(
        storeData.store_img_src_arr && storeData.store_img_src_arr.length > 0
      ),
      [StoreColumnDef.CREATED_AT]: new Date(storeData.created_at),
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
