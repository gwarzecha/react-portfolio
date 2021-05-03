import React from 'react'
import { GitHub } from 'react-feather';


const Project = ({ project }) => {
  return (
    <div className='col-sm mt-2 mb-2 d-flex flex-wrap justify-content-center img-container' key={project.id}>
      <img src={require(`../assets/images/${project.image}`).default} className='projectImg' />
      <span className='overlay d-flex justify-content-center'>
        <a href={project.deployedApp} className=' appLink align-self-center p-2' target="_blank" role="button">{project.name}</a>
        <a href={project.github} className='gitLink align-self-center p-2' target="_blank" role="button"><GitHub color="black" size={32} /></a>
      </span>
    </div>
    
  )
}

export default Project
