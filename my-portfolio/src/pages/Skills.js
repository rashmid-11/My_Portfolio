import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../css/Skill.css'; // Custom CSS for further styling

// import skillsVideo from '../assets/homebg.mp4'

const Skills = () => {
  return (
    <div className="skills-section">
      {/* <video autoPlay loop muted className="bg-video">
        <source src={skillsVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="skills-container">
        <h1>My Skills</h1>
        <div className="skills-list">
          <div className="skill-item">
            <span>React.js</span>
          </div>
          <div className="skill-item">
            <span>Node.js</span>
          </div>
          <div className="skill-item">
            <span>SQL</span>
          </div>
          <div className="skill-item">
            <span>HTML</span>
          </div>
          <div className="skill-item">
            <span>CSS</span>
          </div>
          <div className="skill-item">
            <span>JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
