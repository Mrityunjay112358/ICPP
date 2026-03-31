#!/bin/bash

# Create all component files
cd src

# Custom Cursor Component
cat > components/CustomCursor.jsx << 'EOF'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .hover-effect');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to([cursor, follower], { scale: 1.5, duration: 0.3 });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to([cursor, follower], { scale: 1, duration: 0.3 });
      });
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
};

export default CustomCursor;
EOF

# Navbar Component
cat > components/Navbar.jsx << 'EOF'
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
EOF

# Footer Component
cat > components/Footer.jsx << 'EOF'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 The Doorsteps Project. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
EOF

echo "✅ Components created successfully!"
