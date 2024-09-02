import React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../css/Home.css'; // Custom CSS for further styling

import homevd from '../assets/homebg.mp4';

const Layout = () => {
  return (
    <div className="home-container">
      {/* Video Section */}
      <section className="video-section">
        <video className="video" autoPlay muted loop>
          <source src={homevd} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Main Content Section */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
