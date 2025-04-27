import { Button, Container, Typography } from '@mui/material';

function HeroSection() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        marginTop: { xs: 8, md: 12 },
        color: '#fff',
        px: { xs: 2, md: 0 }, // padding left/right: mobile - more padding, laptop - normal
      }}
    >
      <Typography 
        variant="h3" 
        gutterBottom 
        data-aos="fade-up"
        sx={{
          fontSize: { xs: '2rem', md: '3.5rem' },
          fontWeight: 700,
        }}
      >
        Learn. Build. Succeed.
      </Typography>

      <Typography 
        variant="h6" 
        gutterBottom 
        data-aos="fade-up" 
        data-aos-delay="200"
        sx={{
          fontSize: { xs: '1rem', md: '1.5rem' },
          marginBottom: { xs: 3, md: 4 },
        }}
      >
        Partnering with the Best to Deliver the Best.
      </Typography>

      <Button 
        variant="contained" 
        size="large"
        sx={{
          marginTop: { xs: 2, md: 3 },
          fontSize: { xs: '0.875rem', md: '1rem' }, // slightly bigger button text on laptop
          paddingX: { xs: 3, md: 5 }, // wider button on big screens
          paddingY: { xs: 1.5, md: 2 },
        }}
      >
        Explore Now
      </Button>
    </Container>
  );
}

export default HeroSection;
