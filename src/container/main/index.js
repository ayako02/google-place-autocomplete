import React from 'react';

import TextField from '@material-ui/core/TextField';

import Header from 'components/header';
import GoogleMap from 'components/map';

import './style.scss';

const MainContainer = () => {
  // console.log({ places: window.google.maps.places.Autocomplete });

  return (
    <div className="main-container">
      <Header />
      <div className="pa4">
        <form className="mb3" autoComplete>
          <TextField className="pa3" label="Location" variant="outlined" />
        </form>

        <GoogleMap />
      </div>
    </div>
  );
};

export default MainContainer;
