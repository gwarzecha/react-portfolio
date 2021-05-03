import React from 'react'

const Nav = (props) => {
  return (

    <div>
      <nav className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className='row'>
            <div className='col-md-8'>
              <h1 className="display-4">Hey There,</h1>
              <p className="lead">My name is Garrett Warzecha. Please feel free to learn a little
              about me and the Web Development work I've done. </p>
            </div>
            <div className="col-md-4 btn-col d-flex justify-content-center">
              <div className="btn-group-vertical ">
                <div>
                </div>
                <a href="#" onClick={() => props.handlePageChange('About')}><button type="button" className="glow-on-hover btn btn-sm  props.currentPage === 'About' ? 'nav-link active' : 'nav-link'">About</button></a>
                <a href="#" onClick={() => props.handlePageChange('Portfolio')}><button type="button" className="glow-on-hover btn btn-sm  props.currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'">Projects</button></a>
                <a href="#" onClick={() => props.handlePageChange('Contact')}><button type="button" className="glow-on-hover btn btn-sm  props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'">Contact</button></a>
                <a href="#" onClick={() => props.handlePageChange('Resume')}><button type="button" className="glow-on-hover btn btn-sm  props.currentPage === 'Resume' ? 'nav-link active' : 'nav-link'">Resume</button></a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/*       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#">Garrett Warzecha</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={() => props.handlePageChange('About')}
                className={
                  props.currentPage === 'About' ? 'nav-link active' : 'nav-link'
                }>About Me <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => props.handlePageChange('Portfolio')}
                className={
                  props.currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
                }>Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#c"
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
                onClick={() => props.handlePageChange('Contact')}
                className={
                  props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
                }>Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => props.handlePageChange('Resume')}
                className={
                  props.currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
                }>Resume</a>
            </li>
          </ul>
        </div>
      </nav>*/}

    </div>
  )
}

export default Nav
