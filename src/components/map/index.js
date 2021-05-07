import React from 'react';
import GoogleMapReact from 'google-map-react';

import RoomIcon from '@material-ui/icons/Room';

const GoogleMap = () => {
  const location = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCgqTOvoVMTZxpDNTBjYMphYIraj7jqmyo' }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}
      >
        <div lat={59.955413} lng={30.337844}>
          <RoomIcon />
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
