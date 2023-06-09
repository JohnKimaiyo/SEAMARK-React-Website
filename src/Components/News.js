import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
export default function News() {
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
                        <a className href="index.html">
                          Home
                        </a>
                        <a className href="about.html">
                          About
                        </a>
                        <a className href="service.html">
                          Services
                        </a>
                        <a className href="testimonial.html">
                          Testimonial
                        </a>
                        <a className="active" href="news.html">
                          Latest News
                        </a>
                        <a className href="contact.html">
                          Contact Us
                        </a>
                      </div>
                    </div>
                    <a className="navbar-brand" href="index.html">
                      <span>
                        Seomark
                      </span>
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
                      <h6>
                        S
                        e
                        o
                        M
                        a
                        r
                        k
                        e
                        t
                        i
                        n
                        g
                      </h6>
                    </div>
                  </nav>
                </header>
                {/* end header section */}
              </div>
              {/* news section */}
              <section className="news_section layout_padding">
                <div className="container">
                  <div className="heading_container">
                    <h2>
                      Latest News
                    </h2>
                    <p>
                      Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 ">
                      <div className="detail_container">
                        <div className="detail-box">
                          <h4>
                            Publishing packages Web page
                          </h4>
                          <div className="news_social">
                            <a href>
                              <i className="fa fa-heart" aria-hidden="true" />
                              <span>
                                Like
                              </span>
                            </a>
                            <a href>
                              <i className="fa fa-comment" aria-hidden="true" />
                              <span>
                                Comment
                              </span>
                            </a>
                            <a href>
                              <i className="fa fa-share-alt" aria-hidden="true" />
                              <span>
                                Share
                              </span>
                            </a>
                          </div>
                          <p>
                            College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtableCollege in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
                          </p>
                        </div>
                        <div className="btn-box">
                          <a href>
                            Read More
                          </a>
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
              {/* info section */}
              <section className="info_section layout_padding2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="info_contact">
                        <h4>
                          Address
                        </h4>
                        <div className="contact_link_box">
                          <a href>
                            <i className="fa fa-map-marker" aria-hidden="true" />
                            <span>
                              Location
                            </span>
                          </a>
                          <a href>
                            <i className="fa fa-phone" aria-hidden="true" />
                            <span>
                              Call +01 1234567890
                            </span>
                          </a>
                          <a href>
                            <i className="fa fa-envelope" aria-hidden="true" />
                            <span>
                              demo@gmail.com
                            </span>
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
                        <h4>
                          Links
                        </h4>
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
                          <a className href="testimonial.html">
                            <img src="images/nav-bullet.png" alt="" />
                            Testimonial
                          </a>
                          <a className="active" href="news.html">
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
                        <h4>
                          Info
                        </h4>
                        <p>
                          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <h4>
                        Subscribe
                      </h4>
                      <form action="#">
                        <input type="text" placeholder="Enter email" />
                        <button type="submit">
                          Subscribe
                        </button>
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

