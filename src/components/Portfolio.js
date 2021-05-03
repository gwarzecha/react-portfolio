import React, { useState } from 'react';
import Project from './Project';
import projectJSON from '../projects.json';

const Portfolio = (project) => {

  const [projects] = useState(projectJSON);

  return (
    <div className='container projectCont'>
      <div className='row justify-content-center'>
        {projects.map((project) => (
          < Project project={project} />
        ))}
      </div>

    </div>
  )
}

export default Portfolio
