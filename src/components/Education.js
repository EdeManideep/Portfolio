import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Education.css';

const Education = () => {
  const navigate = useNavigate();

  const educationTimeline = [
  {
    id: 1,
    degree: "Bachelor's Degree",
    specialization: "Computer Science",
    institution: "KL University",
    period: "2022 - 2025",
    cgpa: "9.57 / 10",
    location: "Vijayawada, India",
    logo: `${process.env.PUBLIC_URL}/education/kl_university.png`,
    description: "Pursuing a Bachelor's degree in Computer Science with a strong foundation in software engineering, data structures, algorithms, and modern development practices."
  },
  {
    id: 2,
    degree: "Diploma of Education",
    specialization: "Electrical and Electronics Engineering",
    institution: "Bapatla Polytechnic College",
    period: "2019 - 2022",
    cgpa: "8.98 / 10",
    location: "Bapatla, India",
    logo: `${process.env.PUBLIC_URL}/education/bapatla_polytechnic.png`,
    description: "Completed a 3-year diploma program in Electrical and Electronics Engineering with a focus on practical engineering knowledge and hands-on lab experience."
  },
  {
    id: 3,
    degree: "Matriculation (Class X)",
    specialization: "Secondary Education",
    institution: "Bhashyam High School, Repalle",
    period: "2018 - 2019",
    cgpa: "9.3 / 10",
    location: "Repalle, India",
    logo: `${process.env.PUBLIC_URL}/education/bhashyam.png`,
    description: "Completed secondary education with consistent academic performance."
  }
];

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic journey from school to premier institution
        </p>

        <div className="education-timeline-card">
          <div className="timeline-header">
            <h3>
              <i className="fas fa-graduation-cap"></i>
              Educational Timeline
            </h3>
            <p>A journey of academic excellence and continuous learning</p>
          </div>

          <div className="education-timeline">
            {educationTimeline.map((edu, index) => (
              <div key={edu.id} className="timeline-item fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="timeline-connector">
                  <div className="timeline-dot"></div>
                  {index < educationTimeline.length - 1 && <div className="timeline-line"></div>}
                </div>
                
                <div className="education-content">
                  <div className="education-header">
                    <div className="institution-info">
                      <div className="institution-logo">
                        {edu.logo ? (
                          <img 
                            src={edu.logo} 
                            alt={`${edu.institution} logo`}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextElementSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="logo-fallback" style={{display: edu.logo ? 'none' : 'flex'}}>
                          <i className="fas fa-university"></i>
                        </div>
                      </div>
                      <div className="institution-details">
                        <h4 className="degree-title">{edu.degree}</h4>
                        <h5 className="institution-name">{edu.institution}</h5>
                        <p className="institution-location">
                          <i className="fas fa-map-marker-alt"></i>
                          {edu.location}
                        </p>
                      </div>
                    </div>
                    <div className="education-meta">
                      <div className="period-badge">
                        <i className="fas fa-calendar-alt"></i>
                        {edu.period}
                      </div>
                      <div className="cgpa-badge">
                        <span className="cgpa-label">CGPA</span>
                        <span className="cgpa-value gradient-text">{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>

                  <div className="education-body">
                    <p className="specialization">{edu.specialization}</p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="education-cta">
          <div className="cta-content">
            <h3>Interested in my academic foundation?</h3>
            <p>Let's discuss how my educational background can contribute to your team!</p>
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

export default Education; 