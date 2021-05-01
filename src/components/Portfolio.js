import React, { useState } from 'react';
import Project from './Project';
import projectJSON from '../projects.json';

const Portfolio = (project) => {

  const [projects] = useState(projectJSON);

  return (
    <section>
      {projects.map((project) => (
        < Project project={project} />
      ))}
    </section>
  )
}

export default Portfolio
