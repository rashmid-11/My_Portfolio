import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../css/Home.css'; // Custom CSS for further styling


const Home = () => {
  return (
    <div className="home-container">
      {/* Video Section */}
      <section className="video-section">
        <div className="video-overlay">
          <h1 className="video-text">Welcome to My Portfolio</h1>
          <p className="video-subtext">Hi, I'm Rashmi Sadashiv Devkar, a Full Stack Developer.</p>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="content">
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
