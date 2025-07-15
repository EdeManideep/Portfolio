import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', href: 'hero', route: '/home' },
    { name: 'About', href: 'about', route: '/about' },
    { name: 'Experience', href: 'experience', route: '/experience' },
    { name: 'Education', href: 'education', route: '/education' },
    { name: 'Certifications', href: 'certifications', route: '/certifications' },
    { name: 'Projects', href: 'projects', route: '/projects' },
    { name: 'Contact', href: 'contact', route: '/contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/EdeManideep' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/manideepdev/' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:manideepede9@gmail.com' }
  ];

  const scrollToSection = (link) => {
    // If we're already on a section page, just scroll
    const element = document.getElementById(link.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    
    // Otherwise navigate to the section route
    navigate(link.route);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo gradient-text">Ede Manideep</h3>
              <p className="footer-description">
                Software Engineer at Evergreen, an Insight Global Division,
                I specialize in delivering robust end-to-end solutions using technologies like Spring Boot, React, RESTful APIs, and SQL databases.
              </p>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link)}
                      className="footer-link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:manideepede9@gmail.com">manideepede9@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Hyderbad, India</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+919346024834">+91 9346024834</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Ede Manideep. All rights reserved.</p>
            </div>
            <div className="footer-credits">
              <p>Built with React & ❤️</p>
            </div>
            <button className="back-to-top" onClick={scrollToTop} title="Back to top">
              <i className="fas fa-chevron-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 