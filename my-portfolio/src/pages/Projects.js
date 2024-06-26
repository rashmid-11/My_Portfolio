import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../css/project.css'; // Custom CSS for further styling
// import bgvd from '../assets/homebg.mp4'
const Projects = () => {
  return (
    <div className="projects-section">
      {/* <video autoPlay loop muted className="bg-video">
        <source src={bgvd} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-list">
          <div className="project-item">
            <h5 className="project-title">Responsive and User-Friendly Web Applications</h5>
            <p className="project-text">
              Developed and maintained responsive and user-friendly web applications using HTML, CSS, and JavaScript during an internship at Nebula Technology.
            </p>
            <ul>
              <li>Gained expertise in the React.js library to build interactive user interfaces and implement state management with Redux.</li>
              <li>Completed training in Core Java and MySQL to expand proficiency in backend development and database management.</li>
            </ul>
          </div>
          <div className="project-item">
            <h5 className="project-title">Dynamic Website with Control Panel for Matoshree Interior</h5>
            <p className="project-text">
              Developed a dynamic website for Matoshree Interior using React.js and Node.js technologies. The website features a user-friendly interface designed to showcase Matoshree Interior's services and projects effectively.
            </p>
            <ul>
              <li>Implemented a robust control panel allowing administrators to manage website content, update project portfolios, and interact with customer inquiries seamlessly.</li>
            </ul>
          </div>
          <div className="project-item">
            <h5 className="project-title">Customer-Vendor Panel for Matoshree Interior</h5>
            <p className="project-text">
              Created a specialized panel enabling customers and vendors to interact efficiently. Customers can explore services, request quotes, and track project progress. Vendors can manage project bids, submit proposals, and communicate with clients directly.
            </p>
            <ul>
              <li>Utilized MS SQL as the backend database management system to store and manage data efficiently, ensuring seamless data retrieval and manipulation.</li>
              <li>Integrated frontend APIs to enhance website functionality, enabling smooth communication between the frontend and backend systems.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
