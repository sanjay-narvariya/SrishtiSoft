import { Container, Typography, Grid, Avatar, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import sanjayPhoto from '../assets/sanjay-narvariya.jpeg'; // Apna sahi path lagana

function About() {
  return (
    <Container id="about" data-aos="fade-right" sx={{ marginTop: 5, color: '#fff' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: 'white',
          textDecoration: 'underline',
          textDecorationColor: 'red',
          textUnderlineOffset: '4px',
        }}
      >
        About Us
      </Typography>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar
              alt="Mr. Sanjay Narvariya"
              src={sanjayPhoto}
              sx={{ width: 250, height: 250 }}
            />
            <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
              Mr. Sanjay Narvariya
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box textAlign={{ xs: 'center', md: 'left' }}>
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
            <Typography variant="body1" paragraph sx={{ fontWeight: 'bold' }}>
              Join us in redefining the future of learning!
            </Typography>

            <Box
              sx={{
                marginTop: 3,
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
                gap: 1,
              }}
            >
              <EmailIcon sx={{ color: '#90caf9' }} />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sanjaynarvariya12@gmail.com"
                style={{ color: '#90caf9', textDecoration: 'none' }}
              >
                sanjaynarvariya12@gmail.com
              </a>
            </Box>

            <Box
              sx={{
                marginTop: 2,
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
                gap: 1,
              }}
            >
              <PhoneIcon sx={{ color: '#90caf9' }} />
              <a href="tel:8504069643" style={{ color: '#90caf9', textDecoration: 'none' }}>
                8504069643
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
