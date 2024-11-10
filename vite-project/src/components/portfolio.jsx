import React from 'react';
import '../index.css';

const projects = [
    {
      title: 'Stress Management',
      image: '/project-one.jpeg',
      deployLink: 'https://larimae.github.io/stress-management/ ',
      repoLink: ' https://github.com/larimae/stress-management ',
    },
    {
      title: 'Ftiness Tracker',
      image: '/project-two.jpeg',
      deployLink: 'https://www.myfitnesspal.com/',
      repoLink: 'https://github.com/Magsmags600/Project2-MinuteMoves',
    },
    {
      title: 'Pinterest',
      image: '/project-three.jpeg',
      deployLink: 'https://www.pinterest.com/',
      repoLink: 'https://github.com/larimae/Alice-Instru',
    },
    {
      title: 'Coolmath Games',
      image: '/project-four.webp',
      deployLink: 'https://www.coolmathgames.com/',
      repoLink: 'https://github.com/larimae/mobster-truck',
    },
    {
      title: 'YouTube',
      image: '/project-five.jpeg',
      deployLink: 'https://www.youtube.com/',
      repoLink: 'https://github.com/larimae/rainman',
    },
    {
      title: 'Reddit',
      image: '/project-six.jpeg',
      deployLink: 'https://www.reddit.com/?rdt=36111',
      repoLink: 'https://github.com/larimae/david-wallace',
    },
  ];
  
const Portfolio = () => {
    return (
        <div className="portfolio">
        <h1>My Portfolio</h1>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <img src={project.image} alt={`${project.title} screenshot`} />
              <h2>{project.title}</h2>
              <p>
                <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                  Deployed Application
                </a>
              </p>
              <p>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
)};

export default Portfolio;
