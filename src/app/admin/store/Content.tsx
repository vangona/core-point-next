import Paper from '@mui/material/Paper';
import StoreDataGrid from '@/components/admin/store/StoreDataGrid';

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
      {/* <StoreAppbar /> */}
      <StoreDataGrid />
    </Paper>
  );
}
