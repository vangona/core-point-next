'use client';

import {
  useState,
  useEffect,
  useCallback,
  SyntheticEvent,
  ChangeEvent,
} from 'react';
import Search from '@mui/icons-material/Search';
import { useTheme, useMediaQuery } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { DEFAULT_SELECT_WIDTH } from '../common/select/constants';
import {
  LARGE_LAYOUT_WIDTH,
  MEDIUM_LAYOUT_WIDTH,
  SMALL_LAYOUT_WIDTH,
} from '../layout/general-layout/constants';
import {
  STORE_BUDGET_DATA_ARR,
  STORE_BUDGET_MAPPER,
  STORE_CATEGORY_DATA_ARR,
  STORE_LOCATION_DATA_ARR,
} from './constants';

const StoreSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const theme = useTheme();
  const isUpLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isMedium = useMediaQuery(theme.breakpoints.only('md'));
  const [layoutWidth, setLayoutWidth] = useState(LARGE_LAYOUT_WIDTH);

  const [storeCategory, setStoreCategory] = useState<string | undefined>(
    undefined,
  );
  const [storeBudget, setStoreBudget] = useState<string | undefined>(undefined);
  const [storeLocation, setStoreLocation] = useState<string | undefined>(
    undefined,
  );
  const [storeSearchKeyword, setStoreSearchKeyword] = useState('');

  const createQueryString = useCallback(
    ({
      category,
      budget,
      location,
      searchKeyword,
    }: {
      category?: string;
      budget?: string;
      location?: string;
      searchKeyword?: string;
    }) => {
      const params = new URLSearchParams(searchParams);
      category ? params.set('category', category) : params.delete('category');
      budget ? params.set('budget', budget) : params.delete('budget');
      location ? params.set('location', location) : params.delete('location');
      searchKeyword
        ? params.set('search', searchKeyword)
        : params.delete('search');

      return params.toString();
    },
    [searchParams],
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
  const handleSearchKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStoreSearchKeyword(event.target.value);
  };

  const handleSearchClick = () => {
    const queryString = createQueryString({
      category: storeCategory,
      budget: storeBudget,
      location: storeLocation,
      searchKeyword: storeSearchKeyword,
    });
    router.push(pathname + '?' + queryString);
  };

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

  useEffect(() => {
    const category = searchParams.get('category');
    const budget = searchParams.get('budget');
    const location = searchParams.get('location');
    const searchKeyword = searchParams.get('search');

    category && setStoreCategory(category);
    budget && setStoreBudget(budget);
    location && setStoreLocation(location);
    searchKeyword && setStoreSearchKeyword(searchKeyword);
  }, [searchParams]);

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
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'space-between' }}>
        <TextField
          value={storeSearchKeyword}
          onChange={handleSearchKeywordChange}
          fullWidth
          variant='filled'
          label='매물 이름'
          placeholder='매물 전체'
        />
        <Button
          onClick={handleSearchClick}
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
