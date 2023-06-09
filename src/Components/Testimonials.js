import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
export default function Testimonials() {
  return (
    <div>
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
                <a className href="">
                  Home
                </a>
                <a className href="about.html">
                  About
                </a>
                <a className href="service.html">
                  Services
                </a>
                <a className="active" href="testimonial.html">
                  Testimonial
                </a>
                <a className href="news.html">
                  Latest News
                </a>
                <a className href="contact.html">
                  Contact Us
                </a>
              </div>
            </div>
            <a className="navbar-brand" href="index.html">
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
      </div>
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
                  <a className href="index.html">
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
                  <a className="active" href="testimonial.html">
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
    </div>
  );
}
