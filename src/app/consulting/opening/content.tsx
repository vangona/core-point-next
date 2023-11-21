'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
} from '@/components/layout/general-layout/constants';
import { Autocomplete, Checkbox, Divider, Link } from '@mui/material';
import {
  STORE_CATEGORY_DATA_ARR,
  STORE_BUDGET_MAPPER,
  STORE_BUDGET_DATA_ARR,
  STORE_LOCATION_DATA_ARR,
} from '@/components/store/constants';
import { SyntheticEvent, useState } from 'react';

const OpeningConsultingContent = () => {
  const [storeCategory, setStoreCategory] = useState<string | undefined>(
    undefined,
  );
  const [storeBudget, setStoreBudget] = useState<string | undefined>(undefined);
  const [storeLocation, setStoreLocation] = useState<string | undefined>(
    undefined,
  );

  const handleCategoryChange = (_: SyntheticEvent, value: string | null) => {
    setStoreCategory(value ?? undefined);
  };
  const handleBudgetChange = (_: SyntheticEvent, value: string | null) => {
    setStoreBudget(value ?? undefined);
  };
  const handleLocationChange = (_: SyntheticEvent, value: string | null) => {
    setStoreLocation(value ?? undefined);
  };

  return (
    <Box
      sx={{
        width: MEDIUM_LAYOUT_WIDTH,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        padding: 3,
      }}
    >
      <Typography variant='h5' component='h3' whiteSpace='nowrap'>
        창업 컨설팅 신청하기
      </Typography>
      <Divider />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <TextField fullWidth label='성함' variant='outlined' />
          <TextField fullWidth label='연락처' variant='outlined' />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Autocomplete
            key={'store-category--' + storeCategory}
            fullWidth
            value={storeCategory}
            options={STORE_CATEGORY_DATA_ARR}
            onChange={handleCategoryChange}
            renderInput={(params) => (
              <TextField {...params} label='업종' placeholder='전체 업종' />
            )}
          />
          <Autocomplete
            key={'store-budget--' + storeBudget}
            value={storeBudget}
            onChange={handleBudgetChange}
            fullWidth
            getOptionLabel={(option) => STORE_BUDGET_MAPPER[option]}
            options={STORE_BUDGET_DATA_ARR}
            renderInput={(params) => (
              <TextField {...params} label='예산' placeholder='전체 예산' />
            )}
          />
          <Autocomplete
            key={'store-location--' + storeLocation}
            value={storeLocation}
            onChange={handleLocationChange}
            fullWidth
            options={STORE_LOCATION_DATA_ARR}
            renderInput={(params) => (
              <TextField {...params} label='지역' placeholder='지역 전체' />
            )}
          />
        </Box>
        <TextField
          label='추가 문의사항'
          variant='outlined'
          multiline
          fullWidth
          minRows={5}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Checkbox component='button' />
          <Link component='button'>개인정보 이용 및 수집 동의</Link>
        </Box>
        <Button fullWidth size='large' variant='contained'>
          컨설팅 신청하기
        </Button>
      </Box>
    </Box>
  );
};

export default OpeningConsultingContent;
