import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const projects = [
    {
    id: 1,
    title: "DriveAway – Car Rental Management System",
    description: "DriveAway is a full stack car rental system enabling users to book vehicles and admins to manage fleet and bookings via a dynamic dashboard with secure email, image, and DevOps integration.",
    image: `${process.env.PUBLIC_URL}/projects/driveaway.png`,
    technologies: [
      "React.js", "Spring Boot", "EmailJS", "CockroachDB", "Docker", "Jenkins", "Cloudinary", 
      "Render", "Netlify"
    ],
    github: "https://github.com/EdeManideep/DriveAway", // change if you have a repo
    live: "https://driveawayig.netlify.app/",
    featured: true
  },
  {
    id: 2,
    title: "Restaurant Web App",
description: "Developed a responsive web application for an Indian restaurant using React.js and Node.js. Users can browse menus, make table reservations, and place pickup orders. Features include dynamic cart management, order summaries, and a smooth UI optimized for all devices.",
    image: `${process.env.PUBLIC_URL}/projects/restaurant_web_app.jpeg`,
    technologies: ["React.js", "Node.js", "JSX", "CSS", "CockroachDB", "SheetDB", "Render", "Netlify"],
    github: "https://github.com/EdeManideep/react-restaurant-app.git",
    live: "https://react-restaurant-app1.netlify.app/",
    featured: true
  },
  {
    id: 3,
    title: "Online Voting System",
description: "Designed and implemented a secure online voting platform using Spring and MySQL, enabling remote and reliable voting. Includes user authentication, role-based access, encrypted vote storage, and real-time vote count monitoring through a robust backend system.",
    image: `${process.env.PUBLIC_URL}/projects/online_voting_system.png`,
    technologies: ["Spring Boot", "SQL", "Java", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/EdeManideep/Online_Voting_Web_App.git",
    live: "https://github.com/EdeManideep/Online_Voting_Web_App.git",
    featured: false
  },
  {
    id: 4,
    title: "Temperature Converter",
    description: "A responsive web app that converts temperature values between Celsius, Fahrenheit, and Kelvin with validation.",
    image: `${process.env.PUBLIC_URL}/projects/temperatureconverter.png`,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EdeManideep/OIBSIP/tree/main/Temperature%20Converter",
    live: "https://temperatureconverter-1.netlify.app/",
    featured: false
  },
  {
    id: 5,
    title: "Rock Paper Scissors Game",
    description: "Interactive Rock Paper Scissors game with score tracking and move history, deployed on Netlify.",
    image: `${process.env.PUBLIC_URL}/projects/rockPaperScissorsGame.png`,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EdeManideep/rock-paper-scissors/tree/main/rock-paper-scissors",
    live: "https://rock-paper-scissors-online-game.netlify.app/",
    featured: false
  },
  {
    id: 6,
    title: "Live Clock",
    description: "A real-time clock application featuring dark/light mode and multi-timezone support.",
    image: `${process.env.PUBLIC_URL}/projects/Live_Clock.png`,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EdeManideep/Live_Clock",
    live: "https://liveclock1.netlify.app/",
    featured: false
  },
  {
    id: 7,
    title: "Captcha Generator",
    description: "Captcha Generator with refresh and submit functionality for basic user validation, developed using HTML, CSS, and JavaScript.",
    image: `${process.env.PUBLIC_URL}/projects/CaptchaGenerator.png`,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/EdeManideep/Captcha-Generator.git",
    live: "https://edemanideep.github.io/Captcha-Generator/Captcha.html",
    featured: false
  },
  {
    id: 8,
    title: "Grocery Items List",
    description: "A simple grocery list web application built with React and vanilla web technologies, displaying item lists dynamically.",
    image: `${process.env.PUBLIC_URL}/projects/GroceryItemsList.png`,
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/EdeManideep/grocery-items-list.git",
    live: "https://grocery-items-list-web-site.netlify.app/",
    featured: false
  },
  {
    id: 9,
    title: "YouTube Demo",
    description: "A responsive clone of YouTube's homepage created with HTML and CSS for layout and styling practice.",
    image: `${process.env.PUBLIC_URL}/projects/YouTubeDemo.png`,
    technologies: ["HTML", "CSS"],
    github: "https://github.com/EdeManideep/Youtube_demo.git",
    live: "https://edemanideep.github.io/Youtube_demo/youtube.html",
    featured: false
  }
  ];

  // const categories = [
  //   { id: 'featured', name: 'Featured' },
  //   { id: 'all', name: 'All Projects' },
  //   { id: 'fullstack', name: 'Full Stack' },
  //   { id: 'ai', name: 'AI/ML' },
  //   { id: 'research', name: 'Research' }
  // ];

  // const filteredProjects = filter === 'all' 
  //   ? projects 
  //   : filter === 'featured'
  //   ? projects.filter(project => project.featured)
  //   : projects.filter(project => project.category === filter);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that reflect my hands-on expertise in full-stack development and real-world problem solving.
        </p>

        {/* Projects Grid */}
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured-card' : ''} fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
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

        {/* View All Button */}
        {projects.length > 3 && (
  <div className="view-all-container">
    <button onClick={() => setShowAll(!showAll)} className="btn-primary">
      {showAll ? 'Show Less' : 'View All Projects'}
    </button>
  </div>
)}


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