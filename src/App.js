import React from 'react';
import Home from './components/Home';
import axios from 'axios';
export default function App() {
  axios
    .get('/api/customers')
    .then(res => {
      const data = res.data;
      console.log(data);
      console.log('Được rồi nhá');
    })
    .catch(error => console.log('Đéo được rồi'));
  return (
    <div>
      <Home />
    </div>
  );
}
