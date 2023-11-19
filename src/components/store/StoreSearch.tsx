'use client';

import { useState, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@/components/common/select';
import { DEFAULT_SELECT_WIDTH } from '../common/select/constants';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '../layout/general-layout/constants';

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
