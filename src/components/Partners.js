import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

function Partners() {
  return (
    <section
      id="partners"
      data-aos="zoom-in"
      style={{
        backgroundImage: "url('/background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: '100%',
        padding: '80px 0',
        textAlign: "center",
        borderRadius: '40px',
        margin: '0 auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: '#f7d794',
            fontWeight: 800,
            mb: 4,
            mt: { xs: 0, md: '-50px' },
          }}
        >
          Powered by Numeric Infosystem Pvt. Ltd.
        </Typography>

        <Box display="flex" justifyContent="center">
          <Card
            sx={{
              width: { xs: '100%', sm: '95%', md: '85%', lg: '80%' },
              height: { xs: 'auto', md: '45vh' },
              padding: 0,
              borderRadius: 4,
              overflow: "hidden",
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.8)", // less white on mobile
                md: "rgba(255, 255, 255, 0.9)", // more white on desktop
              },
              transition: "transform 0.3s",
              boxShadow: 2,
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent sx={{ padding: 0 }}>
              <Box
                sx={{
                  width: '95%',
                  height: { xs: '200px', md: '100%' }, // 👈 mobile: fixed height, desktop: fill
                  margin: '0 auto',
                }}
              >
                <img
                  src="/partner-logo.jpg"
                  alt="Partner"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </section>
  );
}

export default Partners;
