import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { postPartnershipConsulting } from '@/api/partnership/postPartnershipConsulting';
import useSlideSnackBar from '@/components/common/slide-snackbar/useSlideSnackBar';

export interface PartnershipFormInput {
  brandName: string;
  name: string;
  contact: string;
  additional: string;
  privateAgree: boolean;
}

interface PartnershipFormProps {
  isDownLarge: boolean;
}
const PartnershipForm = ({ isDownLarge }: PartnershipFormProps) => {
  const {
    reset,
    control,
    formState: { isSubmitSuccessful },
    handleSubmit,
  } = useForm<PartnershipFormInput>();
  const { snackbar, openSnackbar } = useSlideSnackBar({
    color: 'success',
    message: '성공적으로 제출되었습니다',
  });
  const theme = useTheme();

  const onSubmit: SubmitHandler<PartnershipFormInput> = (data) => {
    openSnackbar();
    postPartnershipConsulting(data);
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
          name='brandName'
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
              label='브랜드명'
              placeholder='브랜드명을 입력해주세요.'
              variant='outlined'
            />
          )}
        />
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
              label='담당자 성함'
              placeholder='담당자분의 성함을 입력해주세요.'
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
              label='담당자 연락처'
              placeholder='연락받으실 담당자분의 연락처를 입력해주세요.'
              variant='outlined'
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

export default PartnershipForm;
