import React from 'react';
import './Skills.scss';

const Skills = ({ skills }) => {

  return (
    <div className="skills__container">
      {
        skills.map(item => (
          <div
            className="skills__item"
            key={item.skill}
          >
            <div className="skills__name">{item.skill}</div>
            <div className='levelFullBar'>
              <div className='levelBar' style={{width: `${item.level}%`}} />
            </div>
            <div className='skills__level'>{item.level}%</div>
          </div>
        ))
      }
    </div>
  );
};

export default Skills;