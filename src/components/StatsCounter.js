import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function StatsCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const stats = [
    { label: "Clients Served", value: 100 },
    { label: "Projects Completed", value: 100 },
    { label: "Years of Experience", value: 4 },
    { label: "Team Members", value: 5 },
  ];

  return (
    <Box sx={{  py: 10 }}>
      <Container ref={ref}>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index} textAlign="center">
              <Typography variant="h3" color="primary" fontWeight="bold">
                {inView ? <CountUp end={stat.value} duration={2} /> : 0}+
              </Typography>
              <Typography variant="h6" sx={{ mt: 1, color:'#00a8ff' }}>
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default StatsCounter;
