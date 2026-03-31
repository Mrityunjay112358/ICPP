import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import HowWeWork from './pages/HowWeWork';
import GlobalSuccess from './pages/GlobalSuccess';
import Impact from './pages/Impact';
import JoinUs from './pages/JoinUs';
import Footer from './components/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useEffect(() => {
    // Page load animation
    gsap.to('body', {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/global-success" element={<GlobalSuccess />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
