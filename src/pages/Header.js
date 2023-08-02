import React from 'react'
import call from '../images/call.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <React.Fragment>       
          {/* <!-- header section strats --> */}
     <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>
              Seotech
            </span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="s-1"> </span>
            <span className="s-2"> </span>
            <span className="s-3"> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about"> About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service"> Services </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contactLink">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="quote_btn-container ">
              <a href="">
                <img src={call} alt=""/>
                <span>
                  Call : + 01 1234567890
                </span>
              </a>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* <!-- end header section --> */}
    </React.Fragment>
  )
}

export default Header