import React from 'react';
import '../App.css';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
