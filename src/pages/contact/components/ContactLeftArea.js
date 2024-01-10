import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const ContactLeftArea = () => {

  return (
    <div className="contact-left-area" id='mapId'>
      <Map center={{ lat: 37.247528199044, lng: 127.05092718441 }} style={{ width: '100%', height: '50vh' }} level={3}>
        <MapMarker position={{ lat: 37.247528199044, lng: 127.05092718441 }} />
      </Map>
    </div>
  );
};

export default ContactLeftArea;