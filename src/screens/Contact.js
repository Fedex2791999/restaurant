import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  const style_validate = {
    color: 'red'
  };
  return (
    <div>
      <div className="bradcam_area bradcam_bg_2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
                {/* <h3>contact</h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Phản Hồi</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input
                        name="name"
                        ref={register({
                          required: true,
                          maxLength: 20,
                          minLength: 5
                        })}
                        placeholder="Nhập tên của bạn"
                      />
                      <div style={style_validate}>
                        {errors.name &&
                          errors.name.type === 'required' &&
                          'Vui lòng nhập tên của bạn!'}{' '}
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="content"
                        ref={register({ required: true })}
                        placeholder="Nội dung muốn phản hồi"
                      />
                       <div style={style_validate}>
                        {errors.content &&
                          errors.content.type === 'required' &&
                          'Vui lòng nhập nội dung muốn phản hồi!'}{' '}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home"></i>
                </span>
                <div className="media-body">
                  <h3>Số nhà 20, ngách 117/36 xóm Hoàng Văn Thụ</h3>
                  <p>Dương Nội, Hà Đông, Hà Nội</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet"></i>
                </span>
                <div className="media-body">
                  <h3>+8473405092</h3>
                  <p>
                    Nhà hàng mở mọi ngày từ thứ 2 đến chủ nhật, từ 18.00-1.00
                  </p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email"></i>
                </span>
                <div className="media-body">
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
