'use client';

import { useState, useEffect } from 'react';
import Search from '@mui/icons-material/Search';
import { useTheme, useMediaQuery } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DEFAULT_SELECT_WIDTH } from '../common/select/constants';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '../layout/general-layout/constants';
import { STORE_CATEGORY_DATA_ARR, STORE_LOCATION_DATA_ARR } from './constants';

const StoreSearch = () => {
  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const [layoutWidth, setLayoutWidth] = useState(LARGE_LAYOUT_WIDTH);

  useEffect(() => {
    if (isUpLarge) {
      setLayoutWidth(LARGE_LAYOUT_WIDTH);
      return;
    }

    if (isMedium) {
      setLayoutWidth(MEDIUM_LAYOUT_WIDTH);
      return;
    }

    setLayoutWidth(SMALL_LAYOUT_WIDTH);
  }, [isUpLarge, isMedium]);

  return (
    <Box
      sx={{
        maxWidth: layoutWidth,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        marginTop: 5,
      }}
    >
      <Box
        sx={{
          maxWidth: layoutWidth,
          width: '100%',
          display: 'flex',
          gap: 3,
          justifyContent: 'space-between',
        }}
      >
        <Autocomplete
          fullWidth
          options={STORE_CATEGORY_DATA_ARR}
          renderInput={(params) => (
            <TextField {...params} label='업종' placeholder='전체 업종' />
          )}
        />
        <Autocomplete
          fullWidth
          options={STORE_CATEGORY_DATA_ARR}
          renderInput={(params) => (
            <TextField {...params} label='예산' placeholder='전체 예산' />
          )}
        />
        <Autocomplete
          fullWidth
          options={STORE_LOCATION_DATA_ARR}
          renderInput={(params) => (
            <TextField {...params} label='지역' placeholder='지역 전체' />
          )}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'space-between' }}>
        <TextField
          fullWidth
          variant='filled'
          label='매물 이름'
          placeholder='매물 전체'
        />
        <Button
          fullWidth
          sx={{ width: DEFAULT_SELECT_WIDTH }}
          variant='contained'
          startIcon={<Search />}
        >
          검색하기
        </Button>
      </Box>
    </Box>
  );
};

export default StoreSearch;
