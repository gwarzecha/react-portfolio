import React from 'react'
import headshot from '../assets/images/updatedHeadshot.png'

const About = () => {
  return (
    <section className='container d-flex justify-content-center'>
      <div className="row aboutSection">
        <div className='col-md-12 col-sm-12 col-lg-4 d-flex justify-content-center'>
          <img src={headshot} className='headshot d-flex align-self-center' alt='headshot'></img>
        </div>
        <div className='col-md-12 col-sm-12 col-lg-8 d-flex p-2 mt-4'>
          <p className= 'd-flex align-self-center secondaryFont'>
            I am a full-stack web developer from PHX, AZ specializing in the MERN stack, combining my passion for 
            creativity with practical problem solving abilities. Initially finding myself in the 
            medical field with a background in Biomedical Sciences, a transition in focus 
            to web development has provided me with the passion I have long wished to feel for 
            a career. 
            <br></br>
            <br></br>
            In my freetime I enjoy collecting vinyl, reading, drawing, and hanging out with my wife 
            and two cats.  
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
