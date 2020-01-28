import React  from 'react';
import OwlCarousel from 'react-owl-carousel';

export default function Feedback() {
    return (
      <div className="testimonial_area overlay ">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-50">
                <p>Review</p>
                <h3>Khách Hàng Đánh Giá </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <OwlCarousel
                className="owl-theme"
                loop
                items={2}
                autoplay={true}
                autoplayTimeout={6000}
                dots={false}
              >
                <div className="single_carousel">
                  <div className="single_testmonial ">
                    <div className="author_opinion">
                      <p>
                        Đồ ăn tươi ngon, phục vụ rất nhiệt tình, chỗ ngồi thoải
                        mái.
                      </p>
                    </div>
                    <div className="testmonial_author">
                      <div className="thumb">
                        <img src="img/testimonial/author2.png" alt="" />
                      </div>
                      <div className="name">
                        <h3>Em Linh</h3>
                        <div className="icon">
                          <a href ="/">
                            <i className="fa fa-star"></i>{' '}
                          </a>
                          <a href ="/">
                            <i className="fa fa-star"></i>{' '}
                          </a>
                          <a href ="/">
                            <i className="fa fa-star"></i>{' '}
                          </a>
                          <a href ="/">
                            <i className="fa fa-star"></i>{' '}
                          </a>
                          <a href ="/">
                            <i className="fa fa-star"></i>{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single_carousel">
                  <div className="single_testmonial ">
                    <div className="author_opinion">
                      <p>
                        Phục vụ khách rất nhiệt tình, chúc nhà hàng sớm phát
                        triển có nhiều khách hơn nữa.
                      </p>
                    </div>
                    <div className="testmonial_author">
                      <div className="thumb">
                        <img src="img/testimonial/author.png" alt="" />
                      </div>
                      <div className="name">
                        <h3>Anh Hùng</h3>
                        <div className="icon">
                          <a href ="/">
                            <i className="fa fa-star"></i>{' '}
                          </a>
                          <a href ="/">
                            <i className="fa fa-star"></i>{' '}
                          </a>
                          <a href ="/">
                            <i className="fa fa-star"></i>{' '}
                          </a>
                          <a href ="/">
                            <i className="fa fa-star"></i>{' '}
                          </a>
                          <a href ="/">
                            <i className="fa fa-star"></i>{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    );
  
}
