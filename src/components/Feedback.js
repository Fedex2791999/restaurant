import React, { useEffect, useState } from 'react';
import SingleFeedback from '../components/feedback/SingleFeedback';
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';
export default function Feedback() {
  const [listFeedback, setListFeedback] = useState([]);
  useEffect(() => {
    axios.get('/feedback').then(res => {
      const data = res.data;
      console.log("test");
      setListFeedback(data);
    });
  }, []);


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
            {listFeedback.length && (
              <OwlCarousel
                className="owl-theme"
                loop
                items={2}
                autoplay={true}
                autoplayTimeout={3000}
                dots={false}
              >
                {listFeedback.map((data, index) => (
                  <SingleFeedback data={data} key={index} />
                ))}
              </OwlCarousel>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
