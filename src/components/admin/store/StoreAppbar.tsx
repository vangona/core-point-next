import Refresh from '@mui/icons-material/Refresh';
import Search from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

const StoreAppbar = () => {
  return (
    <AppBar
      position='static'
      color='default'
      elevation={0}
      sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
    >
      <Toolbar>
        <Grid container spacing={2} alignItems='center'>
          <Grid item>
            <Search color='inherit' sx={{ display: 'block' }} />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              placeholder='Search by email address, phone number, or user UID'
              InputProps={{
                disableUnderline: true,
                sx: { fontSize: 'default' },
              }}
              variant='standard'
            />
          </Grid>
          <Grid item>
            <Button variant='contained' sx={{ mr: 1 }}>
              Add user
            </Button>
            <Tooltip title='Reload'>
              <IconButton>
                <Refresh color='inherit' sx={{ display: 'block' }} />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default StoreAppbar;
