import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">The Doorsteps Project</Link>
        <ul className="nav-menu">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/how-we-work" className={location.pathname === '/how-we-work' ? 'active' : ''}>How We Work</Link></li>
          <li><Link to="/global-success" className={location.pathname === '/global-success' ? 'active' : ''}>Global Success</Link></li>
          <li><Link to="/impact" className={location.pathname === '/impact' ? 'active' : ''}>Impact</Link></li>
          <li><Link to="/join-us" className={location.pathname === '/join-us' ? 'active' : ''}>Join Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
