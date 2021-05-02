import React, { useState } from 'react';
import Project from './Project';
import projectJSON from '../projects.json';

const Portfolio = (project) => {

  const [projects] = useState(projectJSON);

  return (
    <div className='container'>
      <div className='row'>
        {projects.map((project) => (
          < Project project={project} />
        ))}
      </div>

    </div>
  )
}

export default Portfolio
