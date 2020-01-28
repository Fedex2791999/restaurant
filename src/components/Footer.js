import React  from 'react';

export default function Footer() {
    return (
      <div className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-lg-3 ">
                <div className="footer_widget">
                  <div className="footer_logo">
                    <a href="/">
                      <img src="img/footer_logo.png" alt="" />
                    </a>
                  </div>
                  <p>
                    Ngõ 48 Đường Lê Trọng Tấn <br /> Dương Nội, Hà Đông, Hà Nội
                    <br />
                    <a href="/">+84904237071</a>
                    <br />
                    <a href="/">Codatduoc@gmail.com</a>
                  </p>
                  <p></p>
                  <div className="socail_links">
                    <ul>
                      <li>
                        <a href="/">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fa fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
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
                      <a href="/">Thực đơn</a>
                    </li>
                    <li>
                      <a href="/">Giới thiệu</a>
                    </li>
                    <li>
                      <a href="/"> Khuyến mãi</a>
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
                  <a href="https://colorlib.com" >
                   Bùi Quang Huy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}
