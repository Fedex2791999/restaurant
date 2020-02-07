import React, { useState } from 'react';

export default function ReservationArea() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timeBooking, setTimeBooking] = useState('');

  const mySubmitHandler = event => {
    event.preventDefault();
    alert(timeBooking);
  };
  return (
    <div className="Reservation_area">
      <div className="rev_icon_1 d-none d-md-block">
        <img src="img/icon/4.png" alt="" />
      </div>
      <div className="rev_icon_2 d-none d-md-block">
        <img src="img/icon/5.png" alt="" />
      </div>
      <div className="rev_icon_3 d-none d-md-block">
        <img src="img/icon/6.png" alt="" />
      </div>
      <div className="container p-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-75">
              <h3>Đặt Bàn</h3>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-xl-6 col-lg-6">
            <div className="map_area">
              Map
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.7425348191364!2d105.75068699860151!3d20.973184321268846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453cbb2290535%3A0x96fe772983bfa7ca!2zUXVhbmcgTHV54bq_biBRdcOhbg!5e0!3m2!1svi!2s!4v1579590239634!5m2!1svi!2s"
                width="550"
                height="600"
                frameborder="0"
                style={{ border: '0;' }}
                allowfullscreen=""
              ></iframe> */}
            </div>
          </div>

          {/* Đặt chỗ ngồi */}
          <div className="col-lg-6">
            <div className="book_Form">
              <h3>Đặt chỗ ngồi</h3>

              <form onSubmit={mySubmitHandler}>
                <div className="row ">
                  <div className="col-lg-6">
                    <div className="input_field mb_15">
                      <input
                        type="text"
                        placeholder="Tên"
                        onChange={e => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field mb_15">
                      <input
                        type="text"
                        placeholder="Số điện thoại"
                        onChange={e => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <div
                        // role="wrapper"
                        className="gj-datepicker gj-datepicker-md gj-unselectable"
                      >
                        <input
                          id="datepicker2"
                          placeholder="Ngày sinh"
                          data-type="datepicker"
                          data-guid="aae9d56f-40a5-bf27-e011-337a9102e589"
                          data-datepicker="true"
                          className="gj-textbox-md"
                          // role="input"
                        />
                        <span
                          className="fa fa-calendar-o"
                          // role="right-icon"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input_field">
                      <div className="input_field">
                        <select
                          className="wide"
                          onChange={e => setTimeBooking(e.target.value)}
                          value={timeBooking}
                        >
                          <option value="react">React</option>
                          <option value="angular">Angular</option>
                          <option value="vue">Vue</option>
                        </select>
                        {/* <div className="nice-select wide" tabIndex="0">
                          <span className="current">Thời Điểm</span>
                          <ul className="list">
                            <li
                              data-value="Sáng"
                              className="option"
                            >
                              Sáng
                            </li>
                            <li data-value="Chiều" className="option">
                              Chiều
                            </li>
                            <li data-value="Tối" className="option">
                              Tối
                            </li>
                          </ul>
                        </div>
                 */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input_field">
                      <select className="wide">
                        <option data-display="Số người">Số người</option>
                        <option value="1"> 5</option>
                        <option value="1">10</option>
                      </select>
                      <div className="nice-select wide" tabIndex="0">
                        <span className="current"> Số Người </span>
                        <ul className="list">
                          <li
                            data-value="5"
                            data-display="5"
                            className="option selected"
                          >
                            5
                          </li>
                          <li data-value="1" className="option">
                            10
                          </li>
                          <li data-value="1" className="option">
                            >15
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <button className="sumbit_btn" type="submit">
                      Đặt bàn
                    </button>
                  </div>
                  <div className="col-lg-6">
                    <div className="single_add d-flex">
                      <div className="icon">
                        <img src="img/svg_icon/address.svg" alt="" />
                      </div>
                      <div className="ifno">
                        <h4>Địa chỉ</h4>
                        <p>
                          Ngõ 48 Đường Lê Trọng Tấn, Dương Kinh, Hà Đông, Hà Nội
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single_add d-flex">
                        <div className="icon">
                          <img src="img/svg_icon/head.svg" alt="" />
                        </div>
                        <div className="ifno">
                          <h4>Reservation</h4>
                          <p>+10 673 567 367</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
