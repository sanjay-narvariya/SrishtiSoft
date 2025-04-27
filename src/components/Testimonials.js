import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Testimonials() {
  const reviews = [
    { name: "Amit Sharma", review: "SrishtiSoft transformed our business with their exceptional service and technology." },
    { name: "Priya Mehra", review: "Very professional team, delivered the project before time. Highly recommend!" },
    { name: "Rajeev Sinha", review: "Best tech partner for startups! They guided us through every step." },
    { name: "Adarsh Saxena", review: "Incredible experience! Their expertise and support helped us scale our business effortlessly." },
    { name: "Shailendra Pal", review: "A very professional and innovative team. They turned our ideas into reality faster than expected." }
  ];

  return (
    <section
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "80px 0",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ color: "#fff", fontWeight: 700 }}
        >
          What Our Clients Say
        </Typography>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index} >
              <Box sx={{ textAlign: 'center', p: 4, color: '#fff' }}>
                <Typography variant="h6" gutterBottom>
                  "{item.review}"
                </Typography>
                <Typography variant="subtitle1" color="#fbc531">
                  - {item.name}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default Testimonials;
