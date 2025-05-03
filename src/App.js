import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/AboutUs';
import Services from './components/Services';
import Partners from './components/Partners';
import StatsCounter from './components/StatsCounter';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import SrishtiSoft from './components/SrishtiSoft';
import Footer from './components/Footer';
import Loader from './components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const hideMessage = () => {
    setShowMessage(false);
  };

  if (loading) return <Loader />;

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}  onClick={hideMessage} >
     {/* Welcome Message in the Center */}
{showMessage && (
  <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', // Centers the message
      backgroundColor: '#F6F0F0',
      color: '#2980b9',
      textAlign: 'center',
      fontSize: '3rem', // Increased font size for a bigger message
      fontWeight: 'bold',
      padding: '90px 100px', // Increased padding for more height
      borderRadius: '12px', // Optional: increased border radius for styling
      zIndex: 1000,
      cursor: 'pointer',
      minHeight: '150px', // Ensures the div has a minimum height
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', // Centers the text vertically
    }}
    onClick={hideMessage} // Hide message on click
  >
    Welcome to SrishtiSoft Innovations
  </div>
)}


      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1,
          pointerEvents: 'none',
          backgroundColor: '#000', // fallback background
        }}
      >
        <source src="/videos/video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Website Content */}
      <Header />
      <HeroSection />
      <About />
      <Partners />
      <Services />
      <WhyChooseUs />
      <StatsCounter />
      <SrishtiSoft />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
