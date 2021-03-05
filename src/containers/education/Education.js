import React from 'react';
import './Education.css';
import EducationCard from '../../components/educationCard/EducationCard';
import { educationInfo } from '../../portfolio';

export default function Education() {
  return (
    <div className="project-section" id="education">
        <h1 className="projects-heading">Education</h1>
        <div className="project-card-container">
          {educationInfo.schools.map((school) => (
            <EducationCard school={school} />
          ))}
        </div>
    </div>
  );
}
