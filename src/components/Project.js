import React from 'react'
import { GitHub } from 'react-feather';


const Project = ({ project }) => {
  return (
    <div className='col-sm' key = {project.id}>
      <img src={require(`../assets/images/${project.image}`).default} />
      <a href={project.deployedApp} target="_blank" role="button">{project.name}</a>
      <a href={project.github} target="_blank" role="button"><GitHub color="black" size={32} /></a>
    </div>
  )
}

export default Project
