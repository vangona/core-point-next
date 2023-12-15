import Paper from '@mui/material/Paper';
import MainHeroDataGrid from '@/components/admin/main/hero/MainHeroDataGrid';

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
      <MainHeroDataGrid />
    </Paper>
  );
}
