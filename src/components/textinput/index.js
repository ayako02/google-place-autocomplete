import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import TextField from '@material-ui/core/TextField';

import { memo } from 'utils/react';

import AutoCompleteDropdown from './Dropdown';

const AutoCompleteTextInput = ({ address, onSelect, onChange }) => {
  const [incomingSuggestions, setSuggestions] = useState([]);

  return (
    <PlacesAutocomplete value={address} onChange={onChange} onSelect={onSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
        // Store the incoming suggestions in state temporarily
        if (suggestions) {
          setSuggestions(suggestions);
        }
        return (
          <>
            <TextField
              label="Location"
              variant="outlined"
              {...getInputProps({
                placeholder: 'Search Places ...',
              })}
            />
            <AutoCompleteDropdown isLoading={loading} suggestions={incomingSuggestions} getSuggestionItemProps={getSuggestionItemProps} />
          </>
        );
      }}
    </PlacesAutocomplete>
  );
};

AutoCompleteTextInput.defaultProps = { address: '' };

AutoCompleteTextInput.propTypes = {
  address: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default memo(AutoCompleteTextInput);
