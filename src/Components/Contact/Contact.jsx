import React, { useEffect, useRef, useState } from 'react';
import './Contact.scss';
import { VscAccount } from "react-icons/vsc";
import { FaPhoneSquareAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BiSend } from "react-icons/bi";
import { IoLogoGithub } from 'react-icons/io';

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(observer, "observer");

        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='contact-main-wrapper' id="contact" ref={contactRef}>
      <div className="container">
        {/* Header Section */}
        <div className="contact-header">
          <div className="section-badge">
            <span>Get In Touch</span>
          </div>
          <h2>Contact Me</h2>
          <div className="header-underline"></div>
          <p className="section-description">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            I'm always excited to work on new projects and challenges.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-info">
            <div className="info-card location-card">
              <div className="card-icon">
                <HiLocationMarker />
                <div className="icon-glow"></div>
              </div>
              <div className="card-content">
                <h4>Location</h4>
                <p>Pathaikkara, Perinthalmanna</p>
                <p>Malappuram, Kerala</p>
              </div>
              <div className="card-bg-effect"></div>
            </div>

            <div className="info-card phone-card">
              <div className="card-icon">
                <FaPhoneSquareAlt />
                <div className="icon-glow"></div>
              </div>
              <div className="card-content">
                <h4>Phone</h4>
                <p>+91 9656562371</p>
                {/* <span className="availability">Available 9 AM - 10 PM</span> */}
              </div>
              <div className="card-bg-effect"></div>
            </div>

            <div className="info-card email-card">
              <div className="card-icon">
                <FaEnvelope />
                <div className="icon-glow"></div>
              </div>
              <div className="card-content">
                <h4>Email</h4>
                <p>aswankappingal@gmail.com</p>
                {/* <span className="response-time">Response within 24 hours</span> */}
              </div>
              <div className="card-bg-effect"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3>Send me a message</h3>
              <p>Let's discuss your project and how we can work together</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="input-underline"></div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <div className="input-underline"></div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <div className="input-underline"></div>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <BiSend />
                <div className="btn-glow"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <h4>Follow me on</h4>
          <div className="social-links">
            <a href="#" className="social-link linkedin">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-link github">
              <IoLogoGithub />
              <span>GitHub</span>
            </a>
            <a href="#" className="social-link twitter">
              <FaTwitter />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="contact-background">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>
        <div className="floating-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Aswan Kappingal</h3>
              <p>Full Stack Developer passionate about creating digital experiences that matter.</p>
              <div className="footer-social">
                <a href="https://www.linkedin.com/in/aswan-kappingal-a26a292aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon"><FaLinkedin /></a>
                <a href="https://github.com/Aswankappingal" className="social-icon"><FaGithub /></a>
                <a href="https://www.instagram.com/__ashvy_732?igsh=MTlxdTVtZHlrd3Axdw" className="social-icon"><FaInstagram /></a>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Tech Stack</h4>
                <ul>
                  <li>React.js</li>
                  <li> CSS Scss</li>
                  <li>Firebaswwww</li>
                  <li>Node.js</li>
                </ul>
              </div>


              <div className="link-group">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Frontend Design</a></li>
                  <li><a href="#">Backend APIs</a></li>
                  <li><a href="#">Consulting</a></li>
                </ul>
              </div>

              <div className="link-group">
                <h4>Contact Info</h4>
                <ul>
                  <li>Perinthalmanna , Malappuram</li>
                  <li>+91 9656562371</li>
                  <li>aswankappingal@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-copyright">
              <p>&copy; 2024 Aswan Kappingal. All rights reserved.</p>
              {/* <p>Built with ❤️ using React & SCSS</p> */}
            </div>
          </div>
        </div>
        <div className="footer-glow"></div>
      </footer>
    </div>
  );
};

export default Contact;