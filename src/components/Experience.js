import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Experience.css';

const Experience = () => {
  const navigate = useNavigate();

  const experiences = [
  {
  id: 1,
  title: "Software Engineer 1",
  company: "Evergreen",
  period: "Jul 2025 - Present",
  location: "Hyderabad, India",
  description: "Working as a Software Engineer at Evergreen on an insurance domain project, building scalable full-stack applications.",
  achievements: [
    "Built scalable full-stack solutions using Spring Boot, React.",
    "Focused on clean, efficient, and high-performance application design.",
    "Contributed to enterprise-grade REST APIs that improved performance and supported thousands of real-time users."
  ],
  technologies: ["Java", "Spring Boot", "Azure"]
  },
    {
  id: 2,
  title: "Software Engineer Intern",
  company: "Evergreen",
  period: "Feb 2025 - Jun 2025",
  location: "Hyderabad, India",
  description: "Led a team to build a Java Full Stack car rental application with real-time features, admin analytics, and responsive UI.",
  achievements: [
    "Developed a Java Full Stack application for a smart car rental platform.",
    "24/7 AI Chatbot Support – Offers instant assistance for bookings and car recommendations.",
    "Email Confirmations & Secure Payments – Safe bookings via trusted gateways.",
    "Dynamic Admin Dashboard with Visual Charts – Monitor users, bookings, revenue.",
    "User-Friendly and Fully Responsive Interface – Optimized for all devices."
  ],
  technologies: [
  "HTML", "CSS", "JavaScript", "TailwindCSS", "React", "EmailJS", "Groq AI",
  "Spring Boot", "Spring Boot REST API", "Cloudinary", "CockroachDB",
  "JUnit", "Postman", "Selenium", "GitHub", "Docker", "Jenkins", "SonarQube", "Netlify", "Render"
  ]
 }
];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              
              <div className="timeline-content">
                <div className="experience-card card">
                  <div className="experience-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-info">
                      <span className="company gradient-text">{exp.company}</span>
                      <span className="location">
                        <i className="fas fa-map-marker-alt"></i>
                        {exp.location}
                      </span>
                    </div>
                    <div className="period">
                      <i className="fas fa-calendar-alt"></i>
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="experience-body">
                    <p className="description">{exp.description}</p>
                    
                    <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>
                            <i className="fas fa-check-circle"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="technologies">
                      <h4>Technologies Used:</h4>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-section">
          <div className="cta-card card">
            <h3>Looking for a dedicated engineer?</h3>
            <p>I'm always interested in discussing new opportunities and exciting projects.</p>
            <button onClick={() => navigate('/contact')} className="btn-primary">
              <i className="fas fa-envelope"></i>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 