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
            mt: { xs: 0, md: '-50px' }, // Responsive negative margin
          }}
        >
          Powered by Numeric Infosystem Pvt. Ltd.
        </Typography>

        <Box display="flex" justifyContent="center">
          <Card
            sx={{
              width: { xs: '100%', sm: '95%', md: '85%', lg: '80%' },
              height: { xs: 'auto', md: '52vh' }, // 👈 Responsive height instead of aspectRatio
              padding: 0,
              borderRadius: 4,
              overflow: "hidden",
              backgroundColor: "#ffffffcc",
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
                  height: '100%',
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
