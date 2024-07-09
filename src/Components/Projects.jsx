import React from 'react';
import '../App.css';

const Projects = () => {
  const projects = [
    { title: 'Customer Churn Prediction', domain: 'Machine Learning', description: 'Customer churn prediction aims to identify customers who are likely to stop using a companys products or services within a given period. By accurately predicting churn, businesses can proactively take measures to retain at-risk customers, thereby enhancing customer retention rates and reducing revenue loss.' },
    { title: 'Student Record Management', domain: 'Django,HTML,CSS', description: 'The primary goal of a student record management system is to efficiently store, manage, and retrieve student information. This system can handle various aspects like student enrollment, academic records, attendance, grades, and personal details. By using Django, a high-level Python web framework, developers can create a robust, scalable, and secure web application for managing student records.' },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <h3>{project.domain}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
