import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/AboutUs';
import Services from './components/Services';
import Partners from './components/Partners';
import StatsCounter from './components/StatsCounter';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Loader from './components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  if (loading) return <Loader />;

  return (
    <>
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
          zIndex: -1,
        }}
      >
        <source src="/videos/video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Website Content */}
      <Header className="header" />
      <HeroSection />
      <About />
      <Services />
      <Partners />
      <WhyChooseUs />
      <StatsCounter />
      <Testimonials />
      <Footer className="footer" />
    </>
  );
}

export default App;
