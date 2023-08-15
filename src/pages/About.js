import React from 'react'
import about2 from '../images/about-img2.png'
import { Link } from 'react-router-dom';
import call from '../images/call.png'

const About = () => {
  return (
    <React.Fragment>
        
  {/* <!-- about section --> */}
  <div className="sub_page">
  <div className="hero_area">
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
              <ul className="navbar-nav ">
                <a>
                <li className="nav-item">
                 <a> <Link className="nav-link " to="/" >Home <span className="sr-only">(current)</span></Link></a>
                </li>
                </a>
                <a>
                <li className="nav-item active">
                  <Link className="nav-link" to="/about"> About</Link>
                </li>
                </a>
                <a>
                <li className="nav-item">
                  <Link className="nav-link" to="/service"> Services </Link>
                </li>
                </a>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#usersdata"> Users </a>
                </li> */}
                <a>
                <li className="nav-item">
                  <a className="nav-link" href="#contactLink">Contact Us</a>
                </li>
                </a>
              </ul>
            </div>
            <div className="quote_btn-container ">
              <a href="#">
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
  </div>

 <section className="about_section ">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="img-box">
          <img src={about2} alt=""/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="detail-box">
          <div className="heading_container">
            <h2>
              About Us
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <a href="#">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
{/* <!-- end about section --> */}
    </React.Fragment>
  )
}

export default About;