import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import { memo } from 'utils/react';

import { mapContainerStyle, mapStyle } from './style';

import AutoCompleteTextInput from '../textinput';

const GOOGLE_API_KEY = 'AIzaSyCgqTOvoVMTZxpDNTBjYMphYIraj7jqmyo';

const GoogleMap = ({ google, location, address, onSelect, onChange }) => {
  const { lat, lng } = location;

  return (
    <>
      <div className="pa4 flex flex-column items-center">
        <AutoCompleteTextInput address={address} onChange={onChange} onSelect={onSelect} />
      </div>

      <Map google={google} style={mapStyle} containerStyle={mapContainerStyle} initialCenter={{ lat, lng }} center={{ lat, lng }}>
        <Marker position={{ lat, lng }} />
      </Map>
    </>
  );
};

GoogleMap.defaultProps = { address: '' };

GoogleMap.propTypes = {
  address: PropTypes.string,
  google: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default memo(
  GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY,
  })(GoogleMap)
);
