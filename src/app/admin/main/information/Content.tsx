'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useQuery } from '@tanstack/react-query';
import { getAllOpeningInformation } from '@/api/opening-information/getAllOpeningInformation copy';
import InformationCrawler from '@/components/admin/main/information/InformationCrawler';
import MainInformationDataGrid from '@/components/admin/main/information/MainInformationDataGrid';
import ProgressBackdrop from '@/components/common/progress-backdrop/ProgressBackdrop';

enum TabType {
  DATA = 0,
  CRAWL = 1,
}

export default function Content() {
  const [tab, setTab] = useState(TabType.DATA);

  const { data, isLoading } = useQuery({
    queryKey: ['opening-information'],
    queryFn: () => getAllOpeningInformation(),
  });

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        maxHeight: '100%',
      }}
    >
      <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={(_, newTab) => setTab(newTab)}>
          <Tab label='데이터 관리' sx={{ margin: 1 }} />
          <Tab label='블로그 웹 크롤링' sx={{ margin: 1 }} />
        </Tabs>
      </Box>
      {data && tab === TabType.DATA && <MainInformationDataGrid data={data} />}
      {data && tab === TabType.CRAWL && (
        <InformationCrawler originData={data.data} />
      )}
      <ProgressBackdrop open={isLoading} />
    </Paper>
  );
}
