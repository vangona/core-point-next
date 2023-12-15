import Paper from '@mui/material/Paper';
import MainManagerDataGrid from '@/components/admin/main/manager/MainManagerDataGrid';

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
      <MainManagerDataGrid />
    </Paper>
  );
}
