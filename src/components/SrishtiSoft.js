import React from 'react';
import Slider from 'react-slick';
import { Container, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SrishtiSoft() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const images = [
    { src: './photo1.png', alt: 'Advertise 1' },
    { src: './photo2.png', alt: 'Advertise 2' },
    { src: './photo3.png', alt: 'Advertise 3' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    appendDots: dots => (
      <Box
        sx={{
          mt: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <ul style={{ display: 'flex', padding: 0, margin: 0 }}>{dots}</ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.5)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#00e5ff', // Color change on hover
          },
        }}
      />
    ),
  };

  return (
    <section
      style={{
        padding: isMobile ? '50px 0' : '80px 0',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          gutterBottom
          align="center"
          sx={{
            color: '#fff',
            fontWeight: 700,
            mb: 4,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          Your Vision, Our Code – Together at SrishtiSoft
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Slider {...settings}>
            {images.map((img, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                }}
              >
                <Box
                  component="img"
                  src={img.src}
                  alt={img.alt}
                  sx={{
                    width: isMobile ? '80%' : '80%', // Ensure proper width
                    maxHeight: '500px',
                    borderRadius: '20px',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
                    display: 'block',
                    mx: 'auto', // Ensures the image is centered on all screen sizes
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                    opacity: 0.95,
                    '&:hover': {
                      transform: 'scale(1.03)',
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        <style>
          {`
            .slick-dots li {
              margin: -10px 10px;
            }
            .slick-dots li.slick-active div {
              width: 16px !important;
              height: 16px !important;
              background-color:hsl(186, 29.90%, 73.10%) !important; /* Highlight active dot */
            }
            .slick-dots li div {
              transition: all 0.3s ease;
            }
          `}
        </style>
      </Container>
    </section>
  );
}

export default SrishtiSoft;
