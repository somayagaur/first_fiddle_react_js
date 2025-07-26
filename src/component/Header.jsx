import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <>
        <nav className='navbar bg-dark navbar-dark navbar-expand-md fixed-top'>
          <div className='container-fluid'>
            <a href="" className="navbar-brand">
              <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" className='logo' />
            </a>

            {/* mobile view button */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#a">
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* menu */}
            <div className="collapse navbar-collapse menu" id="a">
              <ul className="navbar-nav ms-auto text-center">
                <li><Link to="/" className="nav-link">HOME</Link></li>
                <li><Link to="about" className="nav-link">ABOUT</Link></li>
                <li><Link to="brand" className="nav-link">BRAND</Link></li>
                <li><Link to="team" className="nav-link">OUR TEAM</Link></li>
                <li><Link to="/press" className="nav-link">PRESS RELEASE</Link></li>
                <li><Link to="contact" className="nav-link">CONTACT</Link></li>
                <li><Link to="carrers" className="nav-link">CARRERS</Link></li>
                <li><Link to="" className="nav-link franBtn">FRANCHISE</Link></li>
              </ul>
            </div>


          </div>
          {/* container-fluid */}


        </nav>
      </>
    </div>
  )
}

export default Header
