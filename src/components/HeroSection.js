import { Button, Container, Typography } from '@mui/material';

function HeroSection() {
  return (
    <Container style={{ textAlign: 'center', marginTop: 40, color: '#fff' }}>
      <Typography variant="h3" gutterBottom data-aos="fade-up">
        Learn. Build. Succeed.
      </Typography>
      <Typography variant="h6" gutterBottom data-aos="fade-up" data-aos-delay="200">
        Partnering with the Best to Deliver the Best.
      </Typography>
      <Button variant="contained" size="large" style={{ marginTop: 20 }}>
        Explore Now
      </Button>
    </Container>
  );
}

export default HeroSection;
