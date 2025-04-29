import { AppBar, Toolbar, Typography, Box } from '@mui/material';
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

      </Toolbar>
    </AppBar>
  );
}

export default Header;
