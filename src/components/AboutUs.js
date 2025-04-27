import { Container, Typography, Grid, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import sanjayPhoto from '../assets/sanjay-narvariya.jpeg'; // Apna sahi path lagana

function About() {
  return (
    <Container id="about" data-aos="fade-right" style={{ marginTop: 40, color: '#fff' }}>
      <Typography variant="h4" align="center" gutterBottom>About Us</Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Avatar
            alt="Mr. Sanjay Narvariya"
            src={sanjayPhoto}
            sx={{ width: 250, height: 250, margin: 'auto' }}
          />
          <Typography variant="h6" align="center" style={{ marginTop: '10px' }}>
            Mr. Sanjay Narvariya
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            At SrishtiSoft Innovations, we believe in bridging the gap between theoretical learning and real-world application. 
            Under the visionary leadership of Mr. Sanjay Narvariya, we introduce a new-age teaching methodology that blends 
            company-based working experience with in-depth knowledge sharing.
          </Typography>
          <Typography variant="body1" paragraph>
            Our goal is to empower students and professionals by providing them with practical exposure, 
            industry-relevant skills, and innovative learning techniques. We are committed to shaping 
            future innovators by making education more dynamic, interactive, and impactful.
          </Typography>
          <Typography variant="body1" paragraph style={{ fontWeight: 'bold' }}>
            Join us in redefining the future of learning!
          </Typography>
          <Typography variant="body1" paragraph style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <EmailIcon sx={{ color: '#90caf9' }} /> 
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sanjaynarvariya12@gmail.com" style={{ color: '#90caf9', textDecoration: 'none' }}>
              sanjaynarvariya12@gmail.com
            </a>
          </Typography>
          <Typography variant="body1" paragraph style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PhoneIcon sx={{ color: '#90caf9' }} /> 
            <a href="tel:8504069643" style={{ color: '#90caf9', textDecoration: 'none' }}>
              8504069643
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;


