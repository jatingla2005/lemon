import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Reservation from './components/Reservation';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Testimonials />
      <AboutUs />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/little-lemon-capstone"> {/* ✅ set basename for GitHub Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
