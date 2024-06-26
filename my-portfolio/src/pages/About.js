import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../css/About.css'; 
import rashmiPhoto from '../assets/R.jpg';

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={rashmiPhoto} className="img-fluid rounded-circle" alt="Rashmi Devkar" />
          </div>
          <div className="col-md-8">
            <h2>About Me</h2>
            <p>
              Rashmi Sadashiv Devkar is a Computer Science and Engineering graduate with a passion for technology and innovation. With 1.2 years of professional experience, she has honed her skills in React.js, Node.js, SQL, HTML, CSS, and JavaScript.
            </p>
            <p>
              During her tenure at Nebula Technology, Rashmi gained hands-on experience in web development during a 6-month internship. Currently serving as a Full Stack Developer at Lissom Technologies, she thrives in both front-end and back-end development environments, contributing to impactful projects.
            </p>
            <p>
              Committed to continuous learning and leveraging her expertise to drive business success through cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
