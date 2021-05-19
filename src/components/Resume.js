import React from 'react'

const Resume = () => {
  return (
    <section className='container resumeCont d-flex justify-content-center'>
      <div className='row'>
        <div className='col-12 d-flex justify-content-center'>
          <h2 className='mainFont pb-4'><a href='https://docs.google.com/document/d/1fjfslIhiA87JXA_jZkCM74_DHdbwqm7DfytbZshHtFc/edit?usp=sharing' className='resume mainFont' target='_blank' rel="noreferrer" >Click to view my resume</a></h2>
        </div>
        <div className='col-12 d-flex justify-content-center'>
          <h3 className='mainFont pb-2'>Skills and Proficiencies</h3>
        </div>   
          <h4 className='col-12 d-flex justify-content-center secondaryFont'>Back-End Development</h4>
          <div className='col-12 d-flex justify-content-center secondaryFont'>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>IndexedDB</li>
              <li>NoSQL</li>
              <li>MySQL</li>
              <li>Sequelize</li>
            </ul>
          </div>
          <h4 className='col-12 d-flex justify-content-center secondaryFont'>Front-end Development</h4>
          <div className='col-12 d-flex justify-content-center secondaryFont'>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind.css</li>
              <li>Materialize</li>
              <li>jQuery</li>
              <li>HTML</li>
              <li>PWAs</li>
            </ul>
          </div>
      </div>
    </section>
  )
}

export default Resume
