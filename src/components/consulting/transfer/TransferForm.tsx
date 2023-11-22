import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTheme } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { postTransferConsulting } from '@/api/consulting/transfer/postTransferConsulting';
import useSlideSnackBar from '@/components/common/slide-snackbar/useSlideSnackBar';
import { STORE_CATEGORY_DATA_ARR } from '@/components/store/constants';

export interface TransferFormInput {
  name: string;
  contact: string;
  location: string;
  size: string;
  storeName: string;
  category: string;
  additional: string;
  privateAgree: boolean;
}

interface TransferFormProps {
  isDownLarge: boolean;
}
const TransferForm = ({ isDownLarge }: TransferFormProps) => {
  const {
    reset,
    control,
    formState: { isSubmitSuccessful },
    handleSubmit,
  } = useForm<TransferFormInput>();
  const { snackbar, openSnackbar } = useSlideSnackBar({
    color: 'success',
    message: '성공적으로 제출되었습니다',
  });
  const theme = useTheme();

  const onSubmit: SubmitHandler<TransferFormInput> = (data) => {
    openSnackbar();
    postTransferConsulting(data);
    console.log(data);
  };

  useEffect(() => {
    isSubmitSuccessful && reset && reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component='form'
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        py: 2,
      }}
    >
      {snackbar}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isDownLarge ? 'column' : 'row',
          width: '100%',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Controller
          name='name'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              required
              fullWidth
              label='성함'
              placeholder='성함을 입력해주세요.'
              variant='outlined'
            />
          )}
        />
        <Controller
          name='contact'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              required
              fullWidth
              label='연락처'
              placeholder='연락처를 입력해주세요.'
              variant='outlined'
            />
          )}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Controller
          name='location'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              required
              fullWidth
              label='사업체 위치'
              placeholder='사업체 위치를 입력해주세요.'
              variant='outlined'
            />
          )}
        />
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
        <Controller
          name='size'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              required
              fullWidth
              label='사업체 크기'
              placeholder='사업체 크기를 입력해주세요.'
              variant='outlined'
            />
          )}
        />
        <Controller
          name='storeName'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              required
              fullWidth
              label='상호명'
              placeholder='상호명을 입력해주세요.'
              variant='outlined'
            />
          )}
        />
        <Controller
          name='category'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState }) => (
            <Autocomplete
              value={value}
              fullWidth
              onChange={(_, value) => onChange(value)}
              options={STORE_CATEGORY_DATA_ARR}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  required
                  label='업종'
                  placeholder='업종을 입력하세요'
                />
              )}
            />
          )}
        />
      </Box>
      <Controller
        name='additional'
        control={control}
        defaultValue=''
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            label='추가 문의사항'
            variant='outlined'
            multiline
            fullWidth
            minRows={5}
          />
        )}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Controller
          name='privateAgree'
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <Box>
              <Checkbox
                {...field}
                checked={field.value}
                component='button'
                sx={{
                  '& svg path': {
                    fill: fieldState.error
                      ? theme.palette.error.main
                      : undefined,
                  },
                }}
              />
              <Link component='button'>개인정보 이용 및 수집 동의</Link>
            </Box>
          )}
        />
      </Box>
      <Button type='submit' fullWidth size='large' variant='contained'>
        컨설팅 신청하기
      </Button>
    </Box>
  );
};

export default TransferForm;
