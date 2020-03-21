import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default class Map extends Component {
  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyAFFpxll7sW4MZZRD-ptpUPX-eGZIomD6c"
      >
        <GoogleMap
          id="example-map"
          mapContainerStyle={{
            height: '570px',
            width: '570px'
          }}
          zoom={7}
          center={{
            lat: -3.745,
            lng: -38.52
          }}
        />
      </LoadScript>
    );
  }
}
