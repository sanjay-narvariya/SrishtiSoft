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
          {[["Innovation","We integrate modern technology with creative thinking to develop intuitive software solutions and provide hands-on learning experiences that inspire growth and curiosity."], ["Reliability","Trusted by educators and businesses alike, we deliver consistent results, robust software, and dependable training programs tailored to evolving needs so your believe is our fath."], ["Support"," From personalized mentoring to 24/7 technical assistance, our support team ensures every learner and client succeeds with confidence and clarity that's by we will ready to preparing in this field."]].map((item, index) => (
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
                <Typography variant="h6" gutterBottom>{item[0]}</Typography>
                <Typography>{item[1]}</Typography>
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
