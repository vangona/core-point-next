import Paper from '@mui/material/Paper';
import MainInformationDataGrid from '@/components/admin/main/information/MainHeroDataGrid';

export default function Content() {
  return (
    <Paper
      sx={{
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
        overflow: 'hidden',
      }}
    >
      <MainInformationDataGrid />
    </Paper>
  );
}
