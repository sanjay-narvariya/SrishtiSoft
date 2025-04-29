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
      <Container maxWidth={'80%'}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: '#f7d794',
            fontWeight: 800,
            mb: 4,
            marginTop:'-50px'
          }}
        >
          Powered by Numeric Infosystem Pvt. Ltd.
        </Typography>

        <Box display="flex" justifyContent="center">
          <Card
            sx={{
              width: { xs: '100%', sm: '95%', md: '85%', lg: '80%' },
              aspectRatio: '24 / 9',
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
                  width: '95%', // 👈 Reduce image width
                  height: '90%',
                  margin: '0 auto', // 👈 Center the image
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
