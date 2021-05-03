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
                <a href="#" onClick={() => props.handlePageChange('About')}><button type="button" className="glow-on-hover btn btn-sm mainFont props.currentPage === 'About' ? 'nav-link active' : 'nav-link'">About</button></a>
                <a href="#" onClick={() => props.handlePageChange('Portfolio')}><button type="button" className="glow-on-hover btn btn-sm mainFont props.currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'">Projects</button></a>
                <a href="#" onClick={() => props.handlePageChange('Contact')}><button type="button" className="glow-on-hover btn btn-sm mainFont props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'">Contact</button></a>
                <a href="#" onClick={() => props.handlePageChange('Resume')}><button type="button" className="glow-on-hover btn btn-sm mainFont props.currentPage === 'Resume' ? 'nav-link active' : 'nav-link'">Resume</button></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
