import React from 'react';

export default function AboutArea() {
  return (
    <div className="about_area">
      <div className="icon_1 d-none d-md-block">
        <img src="img/icon/1.png" alt="" />
      </div>
      <div className="icon_2 d-none d-md-block">
        <img src="img/icon/2.png" alt="" />
      </div>
      <div className="icon_3 d-none d-md-block">
        <img src="img/icon/3.png" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about_info_wrap">
              <h3>Sun Homes BBQ</h3>
              <span className="long_dash"></span>
              <p>
                Sun Homes BBQ (Quán thịt nướng Hàn Quốc) sẽ đưa bạn đến Seoul,
                nơi những con phố bình dị, những quán ăn dân dã đã trở nên quen
                thuộc và gắn bó với người dân xứ Hàn. Nếu đã một lần thưởng thức
                thịt nướng tại Sun Homes BBQ, bạn sẽ không thể quên được hương
                vị “ngất ngây” của những món sườn non bò Mỹ, nạc vai bò Mỹ, dẻ
                sườn tươi…. khi hòa quyện vào với các loại gia vị đặc trưng của
                xứ sở Kimchi đã trở nên hấp dẫn đến thế nào. Bí quyết của Sun
                Homes BBQ nằm ở nước sốt tẩm ướp thịt được chế biến từ nguyên
                liệu hoàn toàn tự nhiên, theo công thức bí truyền, do Bếp Trưởng
                Park Sung Min hơn 40 năm kinh nghiệm nghiên cứu và chế biến. Sun
                Homes BBQ có 2 dạng thực đơn để Quý Khách lựa chọn là: Chọn
                Combo và Gọi Món.
              </p>
              <ul className="food_list">
                <li>
                  <img src="img/svg_icon/salad.svg" alt="" />
                  <span>Món lẩu </span>
                </li>
                <li>
                  <img src="img/svg_icon/tray.svg" alt="" />
                  <span>Món nướng</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_img">
              <div className="img_1">
                <img src="img/about/big.png" alt="" />
              </div>
              <div className="small_img">
                <img src="img/about/small.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
