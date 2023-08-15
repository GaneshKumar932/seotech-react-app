import React from 'react'
import slider from '../images/slider-img.png'
import { Link } from 'react-router-dom';
import call from '../images/call.png'

const Home = () => {
  return (
   <React.Fragment>
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
                <li className="nav-item active">
                 <a> <Link className="nav-link " to="/" >Home <span className="sr-only">(current)</span></Link></a>
                </li>
                </a>
                <a>
                <li className="nav-item">
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
    <section className=" slider_section ">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail_box">
                    <h1>
                      The best marketing
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking
                    </p>
                    <div className="btn-box">
                      <a href="#" className="btn-1">
                        Contact Us
                      </a>
                      <a href="#" className="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={slider} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail_box">
                    <h1>
                      The best marketing
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking
                    </p>
                    <div className="btn-box">
                      <a href="#" className="btn-1">
                        Contact Us
                      </a>
                      <a href="#" className="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={slider} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail_box">
                    <h1>
                      The best marketing
                    </h1>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking
                    </p>
                    <div className="btn-box">
                      <a href="#" className="btn-1">
                        Contact Us
                      </a>
                      <a href="#" className="btn-2">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src={slider} alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-container">
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
    </div>
    {/* <!-- end slider section --> */}
   </React.Fragment>
  )
}

export default Home