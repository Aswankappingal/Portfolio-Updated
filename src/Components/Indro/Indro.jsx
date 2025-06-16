import React, { useState } from 'react';
import './Indro2.scss';

const Indro = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://www.instagram.com/__ashvy_732?igsh=MTlxdTVtZHlrd3Axdw',
      icon: (
        <i className="bi bi-instagram"></i>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aswan-kappingal-a26a292aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: (
        <i className="bi bi-linkedin"></i>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Aswankappingal',
      icon: (
        <i className="bi bi-github"></i>
      ),
    },
  ];

  const navLinks = [
    { name: 'Home', url: '#' },
    { name: 'About', url: '#' },
    { name: 'Work', url: '#' },
    { name: 'Contact', url: '#' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="portfolio-container">
      {/* Background Elements */}
      <div className="bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      {/* Header */}
      <header className="modern-header">
        <div className="header-content">
          <div className="logo-container">
            <a href="#" className="logo">
              <span className="logo-text">Portfolio</span>
              <div className="logo-underline"></div>
            </a>
          </div>

          <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                className="nav-link"
                style={{ '--delay': `${(index + 1) * 0.1}s` }}
              >
                {link.name}
                <div className="nav-indicator"></div>
              </a>
            ))}
          </nav>

          <div
            className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="text-section">
            <div className="greeting">
              <span className="greeting-text">Hello, I'm</span>
              <div className="greeting-line"></div>
            </div>

            <h1 className="main-title">
              <span className="name">Aswan Kappingal</span>
              <div className="title-decoration"></div>
            </h1>

            <h2 className="role">
              Full Stack Developer
              <span className="role-cursor"></span>
            </h2>

            <p className="description">
              I create exceptional digital experiences that combine beautiful design with powerful functionality.
              Passionate about turning ideas into reality through clean code and innovative solutions.
            </p>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  style={{ '--social-delay': `${(index + 1) * 0.1}s` }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="cta-section">
              <button className="cta-button">
                <span className="button-text">Let's Work Together</span>
                <div className="button-bg"></div>
                <div className="button-shine"></div>
              </button>
            </div>
          </div>

          <div className="image-section">
            <div className="image-container">
              <div className="image-frame">
                <div className="image-border">
                  <div className="profile-image">
                    <img
                      src="Aswan.jpg"
                      alt="Alex Johnson - Full Stack Developer"
                    />
                  </div>
                </div>
                <div className="image-overlay"></div>
                <div className="orbit-ring ring-1"></div>
                <div className="orbit-ring ring-2"></div>
                <div className="orbit-ring ring-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Indro;
