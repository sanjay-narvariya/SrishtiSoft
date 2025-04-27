import { Container, Typography, Box, Card, CardContent } from '@mui/material';

function Partners() {
  return (
    <section
    style={{
      backgroundImage: "url('/background-image.jpg')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: '50%',
      height: 'auto',
      textAlign: "center",
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '100px',
      margin: '0 auto' // 👈 Ye line background ko horizontally center karegi
    }}    
      id="partners"
      data-aos="zoom-in"
    >
      <Container>
      <Typography variant="h4" gutterBottom style={{ color: 'violet', fontWeight: 800 }}>
          Our Partners
        </Typography>
        <Box mt={4} display="flex" justifyContent="center">
          <Card
            sx={{
              width: 250,
              padding: 2,
              borderRadius: 4,
              backgroundColor: "#ffffffcc", // white with little transparency
              boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <img
                src="/partner-logo.jpg" // <-- Apna partner logo image
                alt="Partner"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </CardContent>
          </Card>
        </Box>
      </Container>
    </section>
  );
}

export default Partners;
