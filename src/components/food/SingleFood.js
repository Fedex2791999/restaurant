import React from 'react';
import ModalImage from '../modal/ModalImage';
export default function SingleFood() {
  return (
    <div className="single_delicious d-flex align-items-center">
      <ModalImage/>
      <div className="info">
        <h3>1.Thịt Bò</h3>
        <p>Thịt tươi ngon bao gồm ba chỉ và bắp bò.</p>
        <span>20.000VND</span>
      </div>
    </div>
  );
}
