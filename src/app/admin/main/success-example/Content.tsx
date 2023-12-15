import Paper from '@mui/material/Paper';
import MainSuccessExampleDataGrid from '@/components/admin/main/success-example/MainSuccessExampleDataGrid';

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
      <MainSuccessExampleDataGrid />
    </Paper>
  );
}
