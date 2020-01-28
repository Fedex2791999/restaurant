import React  from 'react';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
export default function ModalImage(props) {
  return (
    <div>
      <div className="thumb" >
        <ReactFancyBox
          thumbnail="img/delicious/1.png"
          width="50px"
          height="50px"
          image="img/delicious/test.jpg"
        />
      </div>
    </div>
  );
}
