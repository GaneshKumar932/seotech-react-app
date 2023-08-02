import React from 'react'
import fb from '../images/fb.png'
import twitter from '../images/info-twitter.png'
import linkedin from '../images/info-linkedin.png'
import insta from '../images/insta.png'
import sone from '../images/s-1.png'
import stwo from '../images/s-2.png'
import sthree from '../images/s-3.png'
import sfour from '../images/s-4.png'
import sfive from '../images/s-5.png'
import t1 from '../images/t-1.png'
import t2 from '../images/t-2.png'
import t3 from '../images/t-3.png'
import work from '../images/work-img.png'
import work1 from '../images/work-i1.png'
import work2 from '../images/work-i2.png'
import client from '../images/client.png'
import quoto from '../images/quote.png'
import Header from './Header'




const Service = () => {
  return (
    <React.Fragment>
        {/* <!-- service section --> */}
        <div className="hero_area">
        <Header/>
        </div>
  <section className="service_section layout_padding">
    <div className="container-fluid">
      <div className="heading_container">
        <h2>
          Our Services
        </h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="service_container">
        <div className="box">
          <div className="img-box">
            <img src={sone} alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Brand Promotion
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={stwo} alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Video Marketing

            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={sthree} alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Site Analysis
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={sfour} alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Social Media Marketing
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={sfive} alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              SEO Optimization
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>
  {/* <!-- end service section --> */}

  {/* <!-- work section --> */}

  <section className="work_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          How We Work!
        </h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="detail_container">
            <div className="box b-1">
              <div className="top-box">
                <div className="icon-box">
                  <img src={work1} alt=""/>
                </div>
                <h5>
                  We Generate A Good Idea First
                </h5>
              </div>
              <div className="bottom-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
            <div className="box b-1">
              <div className="top-box">
                <div className="icon-box">
                  <img src={work2} alt=""/>
                </div>
                <h5>
                  Then We Start Applying Ideas
                </h5>
              </div>
              <div className="bottom-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img-box">
            <img src={work} alt=""/>
          </div>
        </div>
      </div>

      <div className="btn-box">
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>
  {/* <!-- end work section --> */}

  {/* <!-- team section --> */}

  <section className="team_section layout_padding2-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
          Meet The Team
        </h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div className="team_container">
      <div className="box b-1">
        <div className="img-box">
          <img src={t1} alt=""/>
        </div>
        <div className="detail-box">
          <h5>
            Yokit Den
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
          </p>
          <div className="social_box">
            <a href="">
              <img src={fb} alt=""/>
            </a>
            <a href="">
              <img src={twitter} alt=""/>
            </a>
            <a href="">
              <img src={linkedin} alt=""/>
            </a>
            <a href="">
              <img src={insta} alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div className="box b-2">
        <div className="img-box">
          <img src={t2} alt=""/>
        </div>
        <div className="detail-box">
          <h5>
            Morde Den
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
          </p>
          <div className="social_box">
            <a href="">
              <img src={fb} alt=""/>
            </a>
            <a href="">
              <img src={twitter} alt=""/>
            </a>
            <a href="">
              <img src={linkedin} alt=""/>
            </a>
            <a href="">
              <img src={insta} alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div className="box b-3">
        <div className="img-box">
          <img src={t3} alt=""/>
        </div>
        <div className="detail-box">
          <h5>
            Marry Doki
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
          </p>
          <div className="social_box">
            <a href="">
              <img src={fb} alt=""/>
            </a>
            <a href="">
              <img src={twitter} alt=""/>
            </a>
            <a href="">
              <img src={linkedin} alt=""/>
            </a>
            <a href="">
              <img src={insta} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end team section --> */}

  {/* <!-- client section --> */}

  <section className="client_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
          Testimonial
        </h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="box">
              <div className="img-box">
                <img src={client} alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Normal distribution
                </h6>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of
                  letters, as opposed to using 'Content here, content here', making it look
                </p>
                <img src={quoto} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="box">
              <div className="img-box">
                <img src={client} alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Normal distribution
                </h6>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of
                  letters, as opposed to using 'Content here, content here', making it look
                </p>
                <img src={quoto} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="box">
              <div className="img-box">
                <img src={client} alt=""/>
              </div>
              <div className="detail-box">
                <h6>
                  Normal distribution
                </h6>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of
                  letters, as opposed to using 'Content here, content here', making it look
                </p>
                <img src={quoto} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel_btn-container">
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>

  </section>
  {/* <!-- end client section --> */}
    </React.Fragment>
  )
}

export default Service