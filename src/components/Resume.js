import React from 'react'

const Resume = () => {
  return (
    <section className='container resumeCont d-flex justify-content-center'>
      <div className='row'>
        <div className='col-12 d-flex justify-content-center'>
          <h1>View my <a href='https://docs.google.com/document/d/1QxQsZqhZsIMi8LB4Ajbp6Lp517oKCHD9LnrOWBbfENs/edit?usp=sharing' className='resume'>resume</a></h1>
        </div>

        <div className='col-12 d-flex justify-content-center'>
          <h2>Skills and Proficiencies</h2>
        </div>
     
          <h3 className='col-12 d-flex justify-content-center'>Back-End Development</h3>
          <div className='col-12 d-flex justify-content-center'>
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
          <h3 className='col-12 d-flex justify-content-center'>Front-end Development</h3>
          <div className='col-12 d-flex justify-content-center'>
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
