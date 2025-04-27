import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function WhyChooseUs() {
  return (
    <section style={{ padding: '60px 0', textAlign: 'center' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom style={{color: '#fff'}}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {["Innovation", "Reliability", "Support"].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                p={3}
                className="card"
              >
                <CheckCircleIcon sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" gutterBottom>{item}</Typography>
                <Typography>Delivering excellence with a customer-centric approach.</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default WhyChooseUs;



// import React from 'react';
// import '../../App.css';

// export default function Products() {
//   return <h1 className='products'>PRODUCTS</h1>;
// }
