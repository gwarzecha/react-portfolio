import React from 'react'

const Nav = (props) => {
  return (
    <div>
      <nav className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className='row'>
            <div className='col-md-8'>
              <h1 className="display-4 mainFont">Hey There,</h1>
              <p className="lead secondaryFont">My name is Garrett Warzecha. Please feel free to learn a little
              about me and the Web Development work I've done. </p>
            </div>
            <div className="col-md-4 btn-col d-flex justify-content-center">
              <div className="btn-group-vertical ">
                <div>
                </div>
                 <button onClick={() => props.handlePageChange('About')} type="button" className="glow-on-hover btn-md mainFont props.currentPage === 'About' ? 'nav-link active' : 'nav-link'">About</button>
                <button onClick={() => props.handlePageChange('Portfolio')} type="button" className="glow-on-hover btn-md mainFont props.currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'">Projects</button>
                <button onClick={() => props.handlePageChange('Contact')}type="button" className="glow-on-hover btn-md mainFont props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'">Contact</button>
                <button onClick={() => props.handlePageChange('Resume')}type="button" className="glow-on-hover btn-md mainFont props.currentPage === 'Resume' ? 'nav-link active' : 'nav-link'">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
