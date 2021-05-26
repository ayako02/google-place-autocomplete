import React from 'react';
import PropTypes from 'prop-types';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import Card from '@material-ui/core/Card';
import RoomIcon from '@material-ui/icons/Room';

import { memo } from 'utils/react';

import { mapContainerStyle, mapStyle } from './style';

import AutoCompleteTextInput from '../autocomplete-input';

const GOOGLE_API_KEY = 'YOUR_API_KEY';

const GoogleMap = ({ google, location, address, onSelect, onChange, onTextClear }) => {
  const { lat, lng } = location;

  return (
    <>
      <div className="section--header">
        <div className="header--content">
          <RoomIcon className="header--icon" />
          <h2>Google Location Search</h2>
        </div>
        <Card>
          <AutoCompleteTextInput address={address} onChange={onChange} onSelect={onSelect} onTextClear={onTextClear} />
        </Card>
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
  onTextClear: PropTypes.func.isRequired,
};

export default memo(
  GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY,
  })(GoogleMap)
);
