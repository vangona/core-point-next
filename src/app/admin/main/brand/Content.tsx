import Paper from '@mui/material/Paper';
import MainBrandDataGrid from '@/components/admin/main/brand/MainBrandDataGrid';

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
      <MainBrandDataGrid />
    </Paper>
  );
}
