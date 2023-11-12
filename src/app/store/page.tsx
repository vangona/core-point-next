import { Box, Button, MenuItem, Pagination, Typography } from '@mui/material';
import { ParagraphDivider } from '@/components/common/paragraph-divider';
import { DEFAULT_SELECT_WIDTH } from '@/components/common/select/constants';
import Select from '@/components/common/select/Select';
import StoreCard from '@/components/common/store-card/StoreCard';
import { DEFAULT_LAYOUT_WIDTH } from '@/components/layout/general-layout/constants';
import { dummyStore } from './dummyStore';

export default function Store() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* 검색부 */}
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
      {/* 결과부 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 2,
          gap: 3,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ flexShrink: 0 }} variant='h6' component='h3'>
            매물 검색 결과
          </Typography>
          <ParagraphDivider sx={{ maxWidth: 600 }} variant='right' />
        </Box>
        {dummyStore.slice(0, 20).map((store, index) => (
          <StoreCard
            key={'store' + index + ', id-' + store.storeId}
            storeData={store}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        }}
      >
        <Pagination count={10} size='large' color='primary' />
      </Box>
    </Box>
  );
}
