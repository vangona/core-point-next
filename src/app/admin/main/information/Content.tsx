'use client';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useMutation } from '@tanstack/react-query';
import { scrapOpeningInformation } from '@/api/opening-information';
import MainInformationDataGrid from '@/components/admin/main/information/MainHeroDataGrid';

export default function Content() {
  const { mutate } = useMutation({
    mutationFn: () => scrapOpeningInformation(),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return (
    <Paper
      sx={{
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
        overflow: 'hidden',
      }}
    >
      <Button onClick={() => mutate()}>크롤링</Button>
      <MainInformationDataGrid />
    </Paper>
  );
}
