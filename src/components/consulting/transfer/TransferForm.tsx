import React, { SyntheticEvent, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { STORE_CATEGORY_DATA_ARR } from '@/components/store/constants';

interface TransferFormProps {
  isDownLarge: boolean;
}
const TransferForm = ({ isDownLarge }: TransferFormProps) => {
  const [storeCategory, setStoreCategory] = useState<string | undefined>(
    undefined,
  );

  const [name, setName] = useState();
  const handleCategoryChange = (_: SyntheticEvent, value: string | null) => {
    setStoreCategory(value ?? undefined);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        py: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isDownLarge ? 'column' : 'row',
          width: '100%',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <TextField
          required
          fullWidth
          label='성함'
          placeholder='성함을 입력해주세요.'
          variant='outlined'
        />
        <TextField required fullWidth label='연락처' variant='outlined' />
      </Box>
      <Box sx={{ width: '100%' }}>
        <TextField required fullWidth label='사업체 위치' variant='outlined' />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isDownLarge ? 'column' : 'row',
          width: '100%',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <TextField required fullWidth label='사업체 크기' variant='outlined' />
        <TextField required fullWidth label='상호' variant='outlined' />
        <Autocomplete
          key={'store-category--' + storeCategory}
          value={storeCategory}
          fullWidth
          onChange={handleCategoryChange}
          options={STORE_CATEGORY_DATA_ARR}
          renderInput={(params) => (
            <TextField
              {...params}
              required
              label='업종'
              placeholder='업종을 입력하세요'
            />
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
  );
};

export default TransferForm;
