import React from 'react'
import headshot from '../assets/images/updatedHeadshot.png'

const About = () => {
  return (
    <section className='container d-flex justify-content-center'>
      <div className="row aboutSection">
        <div className='col-md-12 col-sm-12 col-lg-4 d-flex justify-content-center'>
          <img src={headshot} alt='headshot'></img>
        </div>
        <div className='p-2 col-md-12 col-sm-12 col-lg-8 d-flex'>
          <p className= 'd-flex align-self-center'>
            I am a full-stack developer specializing in the MERN stack, combining my passion for 
            creativity with practical problem solving abilities. 
            
          </p>
        </div>
      </div>

    </section>
  )
}

export default About
