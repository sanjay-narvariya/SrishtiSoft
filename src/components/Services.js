
// import React from 'react';
// import { Container, Typography, Grid, Paper } from '@mui/material';

// function Services() {
//   return (
//     <section id="services">
//       <Container>
//         <Typography variant="h4" gutterBottom>
//           Our Services
//         </Typography>
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={4}>
//             <Paper elevation={3} sx={{ p: 3 }}>
//               <Typography variant="h6">Web Development</Typography>
//               <Typography>High-performance web apps tailored to your needs.</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Paper elevation={3} sx={{ p: 3 }}>
//               <Typography variant="h6">Mobile Apps</Typography>
//               <Typography>Custom Android and iOS applications for every business.</Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Paper elevation={3} sx={{ p: 3 }}>
//               <Typography variant="h6">Cloud Solutions</Typography>
//               <Typography>Secure, scalable and efficient cloud technologies.</Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   );
// }

// export default Services;


// // import React from 'react';
// // import '../../App.css';

// // export default function Services() {
// //   return <h1 className='services'>SERVICES</h1>;
// // }

import { Container, Typography, Grid, Paper } from '@mui/material';

const services = [
  "Website Creation",
  "Software Development",
  "Ecommerce Development",
  "Mobile App Development",
  "Digital Marketing",
  "SEO",
  "Google Services"
];

function Services() {
  return (
    <section
      style={{
        background: 'transparent', // Background transparent, // Light attractive background
        padding: '80px 0',
        textAlign: 'center',
      }}
      id="services"
      data-aos="fade-up"
    >
      <Container>
        <Typography variant="h4" gutterBottom style={{ fontWeight: 700, color: '#fff' }}>
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={5}
                style={{
                  padding: '30px 20px',
                  borderRadius: '15px',
                  backgroundImage: 'url("/img-8.jpg")', // 👈 Set background image
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: '#fff', // White text
                  boxShadow: '0px 8px 30px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0px 12px 40px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0px 8px 30px rgba(0,0,0,0.1)";
                }}
              >
                <Typography variant="h6" style={{ fontWeight: 600 }}>{service}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Services;
