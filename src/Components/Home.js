import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../images/slider-img.jpg"
export default function Home() {
  return (
    <div>
      {/*<body*/}
      <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <div className="custom_menu-btn">
              <button onclick="openNav()">
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button>
            </div>
            <div id="myNav" className="overlay">
              <div className="menu_btn-style ">
                <button onclick="closeNav()">
                  <span className="s-1"> </span>
                  <span className="s-2"> </span>
                  <span className="s-3"> </span>
                </button>
              </div>
              <div className="overlay-content">
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/About">About</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/Service">Service</Link>
                    </li>
                    <li>
                      <Link to="/Testimonial">Testimonial</Link>
                    </li>
                    <li>
                      <Link to="/News">News</Link>
                    </li>
                  </ul>
                </nav>
               </div>
            </div>
            <a className="navbar-brand" >  <Link to="/">Home</Link>
              <span>Seomark</span>
            </a>
            <div className="user_option">
              <form className="form-inline">
                <button className="btn  nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
              <a href>
                <i className="fa fa-user" aria-hidden="true" />
              </a>
            </div>
            <div className="name_style">
              <h6>S e o M a r k e t i n g</h6>
            </div>
          </nav>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className="slider_section position-relative">
          <div className="box">
            <div className="detail-box">
              <a className="navbar-brand" >  <Link to="/">Home</Link>
                <span>Seomark</span>
              </a>
              <div
                className="carousel slide slider_text_carousel"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="heading_box">
                      <h1>
                        <span>We</span>
                        <span>Can</span>
                        <span>Grow</span>
                        <span>Your</span>
                        <span>Business</span>
                      </h1>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="heading_box">
                      <h1>
                        <span>We</span>
                        <span>Can</span>
                        <span>Grow</span>
                        <span>Your</span>
                        <span>Business</span>
                      </h1>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="heading_box">
                      <h1>
                        <span>We</span>
                        <span>Can</span>
                        <span>Grow</span>
                        <span>Your</span>
                        <span>Business</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-box">
                <a href className="btn-1">
                  Contact Us
                </a>
                <a href className="btn-2">
                  Read More
                </a>
              </div>
            </div>
            <div className="img-box">
              <div
                className="carousel slide slider_image_carousel carousel-fade"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  <img src={slider-img}  alt="" />
                  </div>    
                  <div className="carousel-item">
                    <img src="images/slider-img2.jpg" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/slider-img3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
      {/* feature section */}
      <section className="feature_section ">
        <div className="carousel_btn-box">
          <a className="slider_btn_prev" href role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="slider_btn_next" href role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container-fluid service_container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="number_box">
                  <h5>01</h5>
                </div>
                <h4>Research Project</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="number_box">
                  <h5>02</h5>
                </div>
                <h4>Find Ideas</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="number_box">
                  <h5>03</h5>
                </div>
                <h4>Start Optimize</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="number_box">
                  <h5>04</h5>
                </div>
                <h4>Reach Target</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end feature section */}
      {/* about section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Agency</h2>
                </div>
                <p>
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using Lorem
                  Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here',
                  making it look like readable English. Many desktop publishing
                  packages and web page editors
                </p>
                <a href>Read More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <div className="stripe_design sd1" />
                <div className="stripe_design sd2" />
                <div className="stripe_design sd3" />
                <div className="stripe_design sd4" />
                <div className="stripe_design sd5" />
                <div className="stripe_design sd6" />
                <img src="images/about-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
      {/* help section */}
      <section className="help_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    Let Us Help <br />
                    You Get More
                  </h2>
                </div>
                <p>
                  using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web
                  page editors now use Lorem Ipsum as their default model text,
                  and a searchusing 'Content here, content here', making it look
                  like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search
                </p>
                <a href>See Videos</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/help-img.jpg" alt="" />
                <div className="play_btn">
                  <button>
                    <i className="fa fa-play" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end help section */}
      {/* we do section */}
      <section className="wedo_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>What We do</h2>
            <p>
              Content here, content here', making it look like readable English.
              Many desktop publishing packages and web page editors now
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="box pr-0 pr-lg-5">
                <div className="img-box">
                  <img src="images/wedo-img2.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Social Marketing</h5>
                  <p>
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum
                  </p>
                  <a href>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box pr-0 pr-lg-5">
                <div className="img-box">
                  <img src="images/wedo-img3.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Content Marketing</h5>
                  <p>
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum
                  </p>
                  <a href>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box pr-0 pr-lg-5">
                <div className="img-box">
                  <img src="images/wedo-img4.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Data Analysis</h5>
                  <p>
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum
                  </p>
                  <a href>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box pr-0 pr-lg-5">
                <div className="img-box">
                  <img src="images/wedo-img1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Digital Marketing</h5>
                  <p>
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum
                  </p>
                  <a href>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end we do section */}
      {/* news section */}
      <section className="news_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Latest News</h2>
            <p>
              Content here, content here', making it look like readable English.
              Many desktop publishing packages and web page editors now
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 ">
              <div className="detail_container">
                <div className="detail-box">
                  <h4>Publishing packages Web page</h4>
                  <div className="news_social">
                    <a href>
                      <i className="fa fa-heart" aria-hidden="true" />
                      <span>Like</span>
                    </a>
                    <a href>
                      <i className="fa fa-comment" aria-hidden="true" />
                      <span>Comment</span>
                    </a>
                    <a href>
                      <i className="fa fa-share-alt" aria-hidden="true" />
                      <span>Share</span>
                    </a>
                  </div>
                  <p>
                    College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from a Lorem Ipsum passage, and going
                    through the cites of the word in classical literature,
                    discovered the undoubtableCollege in Virginia, looked up one
                    of the more obscure Latin words, consectetur, from a Lorem
                    Ipsum passage, and going through the cites of the word in
                    classical literature, discovered the undoubtable
                  </p>
                </div>
                <div className="btn-box">
                  <a href>Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="img-box">
                <img src="images/news-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end news section */}
      {/* client section */}
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>What Says Our Clients</h2>
          </div>
          <div className="carousel-wrap ">
            <div className="owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="client_id">
                    <div className="img-box">
                      <img src="images/client-img1.jpg" alt="" />
                    </div>
                    <div className="client_detail">
                      <h5>Jims thomas</h5>
                      <h6>hidden in the</h6>
                    </div>
                  </div>
                  <div className="client_text">
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure th ere isn't anything embarrassing hidden in
                      the middle of text. All the Lorem Ipsum generators on the
                      Internet tend to repeat predefined
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="client_id">
                    <div className="img-box">
                      <img src="images/client-img2.jpg" alt="" />
                    </div>
                    <div className="client_detail">
                      <h5>Thomas mor</h5>
                      <h6>Hidden</h6>
                    </div>
                  </div>
                  <div className="client_text">
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure th ere isn't anything embarrassing hidden in
                      the middle of text. All the Lorem Ipsum generators on the
                      Internet tend to repeat predefined
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end client section */}
      {/* contact section */}
      <section className="contact_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
              <div className="form_container">
                <div className="heading_container">
                  <h2>Contact Now For Work</h2>
                </div>
                <form action="#">
                  <div>
                    <input type="text" placeholder="Full Name " />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone number" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="d-flex ">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6  px-0">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
      {/* info section */}
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>Location</span>
                  </a>
                  <a href>
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href>
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href>
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="index.html">
                    <img src="images/nav-bullet.png" alt="" />
                    Home
                  </a>
                  <a className href="about.html">
                    <img src="images/nav-bullet.png" alt="" />
                    About
                  </a>
                  <a className href="service.html">
                    <img src="images/nav-bullet.png" alt="" />
                    Services
                  </a>
                  <a className href="testimonial.html">
                    <img src="images/nav-bullet.png" alt="" />
                    Testimonial
                  </a>
                  <a className href="news.html">
                    <img src="images/nav-bullet.png" alt="" />
                    Latest News
                  </a>
                  <a className href="contact.html">
                    <img src="images/nav-bullet.png" alt="" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* end info section */}
      {/* footer section */}
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <p>
                © <span id="displayYear" /> All Rights Reserved. Design by
                <a href="https://html.design/">Free Html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* footer section */}-- Hello world --&gt;
      <div className="awesome" style={{ border: "1px solid red" }}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" />
      </div>
      <p>Enter your HTML here</p>
    </div>
  );
}
