import React,{useState} from 'react';
import SingleFood from './food/SingleFood';
import axios from 'axios'
export default function DeliciousArea() {
  const [test,setTest] = useState('')
  axios
  .get(' /test')
  .then(res => {
    const data = res.data;
    console.log(data);
     setTest(data[0].first_name)
    console.log('Được rồi nhá');
  })
  .catch(error => console.log('Đéo được rồi'));

  return (
    <div className="Delicious_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-50">
              <h3>Thực Đơn </h3>
            </div>
          </div>
        </div>
        <div className="tablist_menu">
          <div className="row">
            <div className="col-xl-12">
              <ul
                className="nav justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <div className="single_menu text-center">
                      <div className="icon">
                        <i className="flaticon-lunch"></i>
                      </div>
                      <h4>Nướng</h4>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    <div className="single_menu text-center">
                      <div className="icon">
                        <i className="flaticon-kitchen"></i>
                      </div>
                      <h4>Lẩu</h4>
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <div className="single_menu text-center">
                      <div className="icon">
                        <i className="flaticon-food"></i>
                      </div>
                      <h4>Tráng miệng</h4>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row">
              <div className="col-xl-6 col-md-6 col-lg-6">
                <SingleFood />
              </div>
              <div className="col-md-6 col-lg-6">
                <SingleFood />
              </div>
              <div className="col-lg-6 col-md-6">
                <SingleFood />
              </div>
              <div className="col-xl-6 col-md-6 col-lg-6">
                <SingleFood />
              </div>
              <div className="col-lg-6 col-md-6">
                <SingleFood />
              </div>
              <div className="col-lg-6 col-md-6">
                <SingleFood />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row">
              <div className="col-xl-6 col-md-6 col-lg-6">
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/1.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>1.Thịt Bò</h3>
                    <p>Thịt bò tươi ngon, bao gồm ba chỉ, bắp bò, được</p>
                    <span>20.000VND</span>
                  </div>
                </div>
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/3.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>#10. Fried Rice</h3>
                    <p>
                      Craft beer elit seitan exercitation photo booth et 8-bit
                      kale chips.
                    </p>
                    <span>20.000VND</span>
                  </div>
                </div>
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/5.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>#02. Burger Cury</h3>
                    <p>
                      Craft beer elit seitan exercitation photo booth et 8-bit
                      kale chips.
                    </p>
                    <span>20.000VND</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-lg-6">
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/2.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>#16. Chicken Chilis</h3>
                    <p>
                      Craft beer elit seitan exercitation photo booth et 8-bit
                      kale chips.
                    </p>
                    <span>20.000VND</span>
                  </div>
                </div>
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/4.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>#08. Vegetable fry</h3>
                    <p>
                      Craft beer elit seitan exercitation photo booth et 8-bit
                      kale chips.
                    </p>
                    <span>20.000VND</span>
                  </div>
                </div>
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/6.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>#01. Chicken Chilis</h3>
                    <p>
                      Craft beer elit seitan exercitation photo booth et 8-bit
                      kale chips.
                    </p>
                    <span>20.000VND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="row">
              <div className="col-xl-6 col-md-6 col-lg-6">
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/1.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>#12. Chicken Chilis</h3>
                    <p>
                      Craft beer elit seitan exercitation photo booth et 8-bit
                      kale chips.
                    </p>
                    <span>20.000VND</span>
                  </div>
                </div>
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/3.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>#10. Fried Rice</h3>
                    <p>
                      Craft beer elit seitan exercitation photo booth et 8-bit
                      kale chips.
                    </p>
                    <span>20.000VND</span>
                  </div>
                </div>
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/5.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>#02. Burger Cury</h3>
                    <p>
                      Craft beer elit seitan exercitation photo booth et 8-bit
                      kale chips.
                    </p>
                    <span>20.000VND</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-lg-6">
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/2.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>#16. Chicken Chilis</h3>
                    <p>
                      Craft beer elit seitan exercitation photo booth et 8-bit
                      kale chips.
                    </p>
                    <span>20.000VND</span>
                  </div>
                </div>
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/4.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>#08. Vegetable fry</h3>
                    <p>
                      Craft beer elit seitan exercitation photo booth et 8-bit
                      kale chips.
                    </p>
                    <span>20.000VND</span>
                  </div>
                </div>
                <div className="single_delicious d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/delicious/6.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>#01. Chicken Chilis</h3>
                    <p>
                      Craft beer elit seitan exercitation photo booth et 8-bit
                      kale chips.
                    </p>
                    <span>20.000VND</span>
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
