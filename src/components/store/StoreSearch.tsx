import React from 'react';
import { Box, Button, MenuItem } from '@mui/material';
import { Select } from '@/components/common/select';
import { DEFAULT_SELECT_WIDTH } from '../common/select/constants';
import { DEFAULT_LAYOUT_WIDTH } from '../layout/general-layout/constants';

const StoreSearch = () => {
  return (
    <Box
      sx={{
        maxWidth: DEFAULT_LAYOUT_WIDTH,
        width: '100%',
        display: 'flex',
        gap: 3,
        marginTop: 5,
      }}
    >
      <Select label='업종' labelId='store-category' placeholder='전체 업종'>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Select label='예산' labelId='store-budget' placeholder='전체 예산'>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Select label='지역' labelId='store-location' placeholder='지역 전체'>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Button sx={{ width: DEFAULT_SELECT_WIDTH }} variant='contained'>
        검색하기
      </Button>
    </Box>
  );
};

export default StoreSearch;
