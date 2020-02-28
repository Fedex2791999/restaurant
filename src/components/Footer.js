import React  from 'react';
import {Link} from 'react-router-dom'
export default function Footer() {
    return (
      <div className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-lg-3 ">
                <div className="footer_widget">
                  <div className="footer_logo">
                     <Link to="/">
                      <img src="img/footer_logo.png" alt="" />
                    </Link>
                  </div>
                  <p>
                    Ngõ 48 Đường Lê Trọng Tấn <br /> Dương Nội, Hà Đông, Hà Nội
                    <br />
                     <Link to="/">+84904237071</Link>
                    <br />
                     <Link to="/">Codatduoc@gmail.com</Link>
                  </p>
                  <p></p>
                  <div className="socail_links">
                    <ul>
                      <li>
                         <a href="https://www.facebook.com/bui.q.huy.12">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                         <a href="https://twitter.com/BiQuang49230790">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li>
                         <a href="https://www.instagram.com/richard_cowell1231/">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                         <a href="https://github.com/Fedex2791999">
                         <i className="fa fa-github"></i>
                        </a>
                      </li>
                      <li>
                         <a href="https://www.youtube.com/channel/UCH-AwBJBg4Rzdlaj6jDabSg?view_as=subscriber">
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4 offset-xl-1">
                <div className="footer_widget">
                  <h3 className="footer_title">Lẩu nướng Quang Luyến quán</h3>
                  <ul>
                    <li>
                       <Link to="/menu">Thực đơn</Link>
                    </li>
                    <li>
                       <Link to="/about">Giới thiệu</Link>
                    </li>
                    <li>
                       <Link to="/booking"> Đặt bàn</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="footer_widget">
                  <h3 className="footer_title">Đăng ký</h3>
                  <form action="#" className="newsletter_form">
                    <input type="text" placeholder="Nhâp email của bạn" />
                    <button type="submit">Đăng ký</button>
                  </form>
                  <p className="newsletter_text">
                    Đăng ký email để nhận được thông báo, mỗi khi có khuyến mại.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right_text">
          <div className="container">
            <div className="footer_border"></div>
            <div className="row">
              <div className="col-xl-12">
                <p className="copy_right text-center">
                   ©
                  <script>document.write(new Date().getFullYear());</script>2020
                  Lẩu nướng Quang Luyến | Website được tạo {' '}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> bởi{' '}
                  <Link to="https://colorlib.com" >
                   Bùi Quang Huy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}
