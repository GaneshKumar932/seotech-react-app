import React, { useEffect } from 'react'
import telephone from '../images/telephone-white.png'
import twitter from '../images/info-twitter.png'
import linkedin from '../images/info-linkedin.png'
import envelobe from '../images/envelope-white.png'
import fb from '../images/info-fb.png'
import youtube from '../images/info-youtube.png'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import '../js/bootstrap'


const Fooder = () => {
  useEffect(() => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return () => {
      document.getElementById("displayYear").innerHTML = currentYear;
    }
  }, ["#displayYear"])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
   <React.Fragment>
    <div className="footer_bg">
        <Contact/>
         {/* <!-- info section --> */}
    <section className="info_section layout_padding2">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="info_logo">
              <h3>
                Seotech
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor indidunt ut labore et
                dolore magna
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_links">
              <h4>
                BASIC LINKS
              </h4>
              <ul className="  ">
                <li onClick={scrollToTop} className="nav-item active">
                <Link  className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                <Link onClick={scrollToTop} className="nav-link" to="/about"> About</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={scrollToTop} className="nav-link" to="/service"> Services </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contactLink">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <h4>
                CONTACT DETAILS
              </h4>
              <a href="#">
                <div className="img-box">
                  <img src={telephone} width="12px" alt=""/>
                </div>
                <p>
                  +01 1234567890
                </p>
              </a>
              <a href="#">
                <div className="img-box">
                  <img src={envelobe} width="18px" alt=""/>
                </div>
                <p>
                  demo@gmail.com
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_form ">
              <h4>
                NEWSLETTER
              </h4>
              <form action="">
                <input type="email" placeholder="Enter your email"/>
                <button>
                  Subscribe
                </button>
              </form>
              <div className="social_box">
                <a href="#">
                  <img src={fb} alt=""/>
                </a>
                <a href="#">
                  <img src={twitter} alt=""/>
                </a>
                <a href="#">
                  <img src={linkedin} alt=""/>
                </a>
                <a href="#">
                  <img src={youtube} alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- end info_section --> */}


    {/* <!-- footer section --> */}
    <section className="container-fluid footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </div>
    </section>
    {/* <!-- footer section --> */}
    </div>
    </React.Fragment>
  )
}

export default Fooder