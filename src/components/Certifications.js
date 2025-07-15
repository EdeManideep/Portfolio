import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Certifications.css';

const Certifications = () => {
  const navigate = useNavigate();

  const certifications = [
  {
    id: 1,
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "2024",
    description:
      "Validates foundational knowledge of version control, repository management, and collaboration using GitHub.",
    logo: `${process.env.PUBLIC_URL}/certifications/github.png`,
    category: "Version Control",
    skills: ["Git", "GitHub", "Repositories", "Collaboration"],
    credentialId: "NA",
    verifyLink:
      "https://www.credly.com/badges/6c4506ef-d341-46f5-879d-20354776cfc5/"
  },
  {
    id: 2,
    title: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    description:
      "Validates foundational knowledge of cloud concepts, services, and Microsoft Azure fundamentals.",
    logo: `${process.env.PUBLIC_URL}/certifications/azure.png`,
    category: "Cloud",
    skills: ["Azure", "Cloud Concepts", "Infrastructure", "Security"],
    credentialId: "5CB49C04CD9F1465",
    verifyLink:
      "https://learn.microsoft.com/en-us/users/manideep-8571/credentials/5cb49c04cd9f1465"
  },
  {
    id: 3,
    title: "Wipro TalentNext Java Full Stack",
    issuer: "Wipro",
    date: "2024",
    description:
      "Certifies foundational and practical skills in full-stack development, covering front-end and back-end technologies.",
    logo: `${process.env.PUBLIC_URL}/certifications/wipro.webp`,
    category: "Full Stack",
    skills: ["Java", "Spring Boot", "React", "Full Stack Development"],
    credentialId: "NA",
    verifyLink:
      "https://raw.githubusercontent.com/EdeManideep/My_Portfolio/refs/heads/main/images/Wipro%20TalentNext%20%20Java%20Full%20Stack%20Certification.png"
  },
  {
    id: 4,
    title: "Oracle Cloud Infrastructure Foundations",
    issuer: "Oracle",
    date: "2023",
    description:
      "Covers essential cloud computing services provided by Oracle including compute, storage, networking, and database solutions.",
    logo: `${process.env.PUBLIC_URL}/certifications/oracle.png`,
    category: "Cloud",
    skills: ["OCI", "Cloud Infrastructure", "Compute", "Storage"],
    credentialId: "100324522OCI2024GAIOCP",
    verifyLink:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E73282C84CD6ACB370BEF3C3CA866D78E42228A6ADC792ACD63BF53B8B9DD45D"
  },
  {
    id: 5,
    title: "Automation Anywhere Certified Essentials RPA Professional",
    issuer: "Automation Anywhere",
    date: "2023",
    description:
      "Validates RPA fundamentals and practical usage of Automation Anywhere tools for automating business processes.",
    logo: `${process.env.PUBLIC_URL}/certifications/automation_anywhere.webp`,
    category: "Automation",
    skills: ["RPA", "Automation Anywhere", "Process Automation", "Bots"],
    credentialId: "AAESS-A360 96362352",
    verifyLink:
      "https://certificates.automationanywhere.com/7f184ff2-4bbb-4cff-b3ab-b331c53a2d24#gs.cl91gn"
  },
  {
    id: 6,
    title: "HackerRank Certifications",
    issuer: "HackerRank",
    date: "2024",
    description:
      "Validates coding proficiency and problem-solving skills across various domains and programming languages.",
    logo: `${process.env.PUBLIC_URL}/certifications/hackerrank.webp`,
    category: "General",
    skills: ["Problem Solving", "Coding", "Algorithms", "Data Structures"],
    credentialId: "NA",
    verifyLink: "https://www.hackerrank.com/certificates/b9a957d169f3"
  }
];

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">Certifications & Learning</h2>
        <p className="section-subtitle">
          Continuous learning and professional development in cutting-edge technologies
        </p>


        {/* Certifications Timeline Card */}
        <div className="certifications-timeline-card">
          <div className="timeline-header">
            <h3>
              <i className="fas fa-award"></i>
              Professional Certifications
            </h3>
            <p>Validated expertise in Full Stack Development, Cloud Computing, DevOps, and Automation Technologies</p>
          </div>

          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={cert.id} className="certification-item fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="cert-header">
                  <div className="cert-logo">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="logo-fallback" style={{display: 'none'}}>
                      <i className="fas fa-certificate"></i>
                    </div>
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">
                      <i className="fas fa-building"></i>
                      {cert.issuer}
                    </p>
                    <p className="cert-date">
                      <i className="fas fa-calendar-alt"></i>
                      {cert.date}
                    </p>
                  </div>
                  <div className="cert-meta">
                    <div className="cert-category">{cert.category}</div>
                    <button 
                      className="verify-btn" 
                      onClick={() => window.open(cert.verifyLink, '_blank')}
                      title="Verify Certificate"
                    >
                      <i className="fa-solid fa-up-right-from-square" style={{ color: "#ffffff" }}></i>
                      Verify
                    </button>
                  </div>
                </div>
                
                <div className="cert-body">
                  <p className="cert-description">{cert.description}</p>
                  
                  <div className="cert-details">
                    <div className="skills-section">
                      <h6>Skills Covered</h6>
                      <div className="skills-tags">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    {cert.credentialId !== "NA" &&(
                    <div className="credential-section">
                      <h6>Credential ID</h6>
                      <div className="credential-id">{cert.credentialId}</div>
                    </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* CTA Section */}
        <div className="certifications-cta">
          <div className="cta-content">
            <h3>Ready to leverage expertise?</h3>
            <p>Let's discuss how my certified skills can contribute to your next project!</p>
            <button onClick={() => navigate('/contact')} className="btn-primary">
              <i className="fas fa-handshake"></i>
              Start Collaboration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 