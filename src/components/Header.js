import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: '#1976d2' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo + Company Name */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ 
              height: '40px', 
              marginRight: 10 
            }}
          />
          <Typography 
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', sm: '1.5rem' }, // 1rem (mobile), 1.5rem (laptop)
              fontWeight: 700,
              whiteSpace: 'nowrap', // keep it on one line
            }}
          >
            SrishtiSoft Innovations
          </Typography>
        </Box>

        {/* Add buttons here for laptop view if you want */}
        {/* Example: Home | About | Contact */}
        {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
