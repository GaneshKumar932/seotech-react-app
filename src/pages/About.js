import React from 'react'
import about2 from '../images/about-img2.png'
import Header from './Header';

const About = () => {
  return (
    <React.Fragment>
        
  {/* <!-- about section --> */}
  <div class="hero_area">
  <Header/>
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
          <a href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- end about section --> */}
    </React.Fragment>
  )
}

export default About;