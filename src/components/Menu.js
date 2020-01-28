import React  from 'react';
import Home from './Home';
import About from './about/BradcamAbout';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default function Menu() {
  return (
    <div>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid p-0">
            <div className="header_bottom_border">
              <div className="row align-items-center no-gutters">
                <div className="col-xl-3 col-lg-2">
                  <div className="logo">
                    <Link to="/">
                      <img src="img/logo.png" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="main-menu  ">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <Link to="/" className="active">
                            Trang chủ
                          </Link>
                        </li>
                        <li>
                          <Link to="/menu">Thực đơn</Link>
                        </li>

                        <li>
                          <Link to="/about">Giới thiệu</Link>
                        </li>
                        <li>
                          <Link to="/element">Đặt bàn</Link>
                        </li>
                        {/* <li>
                            <Link to="/blog">Tin tức</Link>
                          </li> */}
                        <li>
                          <Link to="contact">Liên hệ</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="say_hello">
                    <Link to="/">Đặt Bàn</Link>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none">
                    <div className="slicknav_menu">
                      <a
                        href="#"
                        aria-haspopup="true"
                        role="button"
                        tabIndex="0"
                        className="slicknav_btn slicknav_collapsed"
                      >
                        <span className="slicknav_menutxt">MENU</span>
                        <span className="slicknav_icon">
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                        </span>
                      </a>
                      <ul
                        className="slicknav_nav slicknav_hidden"
                        aria-hidden="true"
                        role="menu"
                      >
                        <li>
                          <a
                            className="active"
                            href="index.html"
                            role="menuitem"
                            tabIndex="-1"
                          >
                            home
                          </a>
                        </li>
                        <li>
                          <a href="Menu.html" role="menuitem" tabIndex="-1">
                            Menu
                          </a>
                        </li>
                        <li className="slicknav_collapsed slicknav_parent">
                          <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabIndex="-1"
                            className="slicknav_item slicknav_row"
                          >
                            <a href="#" tabIndex="-1">
                              pages <i className="ti-angle-down"></i>
                            </a>
                            <span className="slicknav_arrow">+</span>
                          </a>
                          <ul
                            className="submenu slicknav_hidden"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li>
                              <a
                                href="about.html"
                                role="menuitem"
                                tabIndex="-1"
                              >
                                about
                              </a>
                            </li>
                            <li>
                              <a
                                href="elements.html"
                                role="menuitem"
                                tabIndex="-1"
                              >
                                elements
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="slicknav_collapsed slicknav_parent">
                          <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabIndex="-1"
                            className="slicknav_item slicknav_row"
                          >
                            <a href="#" tabIndex="-1">
                              blog <i className="ti-angle-down"></i>
                            </a>
                            <span className="slicknav_arrow">+</span>
                          </a>
                          <ul
                            className="submenu slicknav_hidden"
                            role="menu"
                            aria-hidden="true"
                          >
                            <li>
                              <a href="blog.html" role="menuitem" tabIndex="-1">
                                blog
                              </a>
                            </li>
                            <li>
                              <a
                                href="single-blog.html"
                                role="menuitem"
                                tabIndex="-1"
                              >
                                single-blog
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html" role="menuitem" tabIndex="-1">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

