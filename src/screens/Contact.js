import React  from 'react';

export default function Contact() {
    return (
      <div>
        <div class="bradcam_area bradcam_bg_2">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="bradcam_text text-center">
                  {/* <h3>contact</h3> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-section">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="contact-title">Liên Hệ</h2>
              </div>
              <div class="col-lg-8">
                <form
                  class="form-contact contact_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          class="form-control w-100"
                          name="message"
                          id="message"
                          cols="30"
                          rows="9"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Message'"
                          placeholder="Vui lòng nhập lời nhắn "
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control valid"
                          name="name"
                          id="name"
                          type="text"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter your name'"
                          placeholder="Nhập tên"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          class="form-control valid"
                          name="email"
                          id="email"
                          type="email"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email address'"
                          placeholder="Địa chỉ email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          name="subject"
                          id="subject"
                          type="text"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Subject'"
                          placeholder="Chọn chủ đề"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <button
                      type="submit"
                      class="button button-contactForm boxed-btn"
                    >
                      Gửi
                    </button>
                  </div>
                </form>
              </div>
              <div class="col-lg-3 offset-lg-1">
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class="ti-home"></i>
                  </span>
                  <div class="media-body">
                    <h3>Số nhà 20, ngách 117/36 xóm Hoàng Văn Thụ</h3>
                    <p>Dương Nội, Hà Đông, Hà Nội</p>
                  </div>
                </div>
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class="ti-tablet"></i>
                  </span>
                  <div class="media-body">
                    <h3>+8473405092</h3>
                    <p>Nhà hàng mở mọi ngày từ thứ 2 đến chủ nhật, từ 18.00-1.00</p>
                  </div>
                </div>
                <div class="media contact-info">
                  <span class="contact-info__icon">
                    <i class="ti-email"></i>
                  </span>
                  <div class="media-body">
                    <h3>Codatduoc@gmail.com</h3>
                    <p>Hãy gửi chúng tôi bất cứ lúc nào!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
