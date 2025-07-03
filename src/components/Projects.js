import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('featured');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "A Soft Computing Approach to Find Hardware Reliability",
      description: "Developed a novel model to assess k-to-r out of n hardware system reliability by adapting the Universal Generating Function (UGF) method and Genetic Algorithms for optimization. This research project explored innovative approaches to improve system reliability analysis.",
      image: "/personal-portfolio/projects/Soft_computing.png",
      technologies: ["Python", "MATLAB", "Genetic Algorithms", "Optimization", "UGF Method", "Reliability Analysis"],
      category: "research",
      github: "https://github.com/Manoj4689",
      live: "#",
      featured: true
    }
  ];

  const categories = [
    { id: 'featured', name: 'Featured' },
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'research', name: 'Research' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills in AI/ML, full-stack development, and research
        </p>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured-card' : ''} fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <i className="fas fa-star"></i>
                    Featured
                  </div>
                )}
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="projects-cta">
          <div className="cta-content">
            <h3>Have a project in mind?</h3>
            <p>Let's work together to bring your ideas to life!</p>
            <button onClick={() => navigate('/contact')} className="btn-primary">
              <i className="fas fa-rocket"></i>
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 