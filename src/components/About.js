import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Java', icon: 'fab fa-java', color: '#f89820' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    // { name: 'C++', icon: 'fas fa-code', color: '#00599c' },
    // { name: 'Azure', icon: 'fab fa-microsoft', color: '#0078d4' },
    // { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: '#326ce5' },
    { name: 'SQL', icon: 'fas fa-database', color: '#336791' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' }
    // { name: 'Linux', icon: 'fab fa-linux', color: '#fcc624' },
    // { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900' }
  ];

  // const achievements = [
  //   { number: '1.5+', label: 'Years of Experience' },
  //   { number: '300K+', label: 'Monthly Transactions' },
  //   { number: '$3M', label: 'Contract Value' }
  // ];

  const codingPlatforms = [
    {
      name: 'LeetCode',
      logo: '/personal-portfolio/coding_platforms/leetcode.png',
      rating: '2047',
      rank: 'Top 2%',
      url: 'https://leetcode.com/u/chintu095/',
      color: '#FFA116'
    },
    {
      name: 'CodeChef',
      logo: '/personal-portfolio/coding_platforms/codechef.png',
      rating: '1663',
      rank: 'Expert',
      url: 'https://www.codechef.com/users/manideep095',
      color: '#1F8ACB'
    },
    {
      name: 'GeeksforGeeks',
      logo: '/personal-portfolio/coding_platforms/gfg.png',
      rating: '1663',
      rank: 'Expert',
      url: 'https://www.geeksforgeeks.org/user/user_8stymnmdfn8/',
      color: '#1F8ACB'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text fade-in">
            <div className="text-content">
              <h3 className="about-subtitle">
                I'm a passionate <span className="gradient-text">Software Engineer</span> with expertise in Java Full Stack development.
              </h3>
              <p>
                Currently working as a Software Engineer at Evergreen, an Insight Global Division,
                I specialize in delivering robust end-to-end solutions using technologies like Spring Boot,
                React, RESTful APIs, and SQL databases. I bring a strong foundation in computer science and a focus 
                on creating efficient, maintainable, and high-performance applications.
              </p>
              <p>
                As a member of the software development team, I've contributed to building enterprise-grade REST APIs that have enhanced
                productivity, improved performance, and supported thousands of users in real-time environments.
              </p>
              <p>
                I'm deeply passionate about problem-solving, clean code, and continuous learning.
                I actively explore emerging technologies like cloud-native development, containerization and microservices to stay ahead in this ever-evolving tech landscape.
                I enjoy solving complex problems and building systems that make a real impact on businesses and users.
              </p>
            </div>
          </div>
          
          <div className="about-skills slide-in-right">
            <div className="skills-container">
              <h4>Technical Skills & Technologies</h4>
              <div className="skills-summary">
                {skills.map((skill, index) => (
                  <span 
                    key={skill.name} 
                    className="skill-pill" 
                    style={{animationDelay: `${index * 0.1}s`}}
                    title={skill.name}
                  >
                    <i className={skill.icon} style={{color: skill.color}}></i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="about-highlights">
              <div className="highlight">
                <i className="fas fa-code"></i>
                <span>Full-stack development</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="achievements">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="achievement-item fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="achievement-number gradient-text">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="coding-platforms">
          <h3 className="platforms-title">
            <i className="fas fa-trophy"></i>
            Online Coding Platforms
          </h3>
          <div className="platforms-grid">
            {codingPlatforms.map((platform, index) => (
              <a 
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="platform-logo">
                  <img 
                    src={platform.logo} 
                    alt={`${platform.name} logo`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="logo-fallback" style={{display: 'none'}}>
                    <i className="fas fa-code"></i>
                  </div>
                </div>
                <div className="platform-info">
                  <h4 className="platform-name">{platform.name}</h4>
                  {/* <div className="platform-stats">
                    <div className="stat">
                      <span className="stat-label">Max Rating</span>
                      <span className="stat-value" style={{color: platform.color}}>
                        {platform.rating}
                      </span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Rank</span>
                      <span className="stat-value">{platform.rank}</span>
                    </div>
                  </div> */}
                </div>
                <div className="platform-link">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 