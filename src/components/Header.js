import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <img src="/logo.png" alt="Logo" height="40" style={{ marginRight: 10 }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          SrishtiSoft Innovations
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
