import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import ClearIcon from '@material-ui/icons/Clear';
import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@material-ui/core';

import { memo } from 'utils/react';

import AutoCompleteDropdown from './Dropdown';

const AutoCompleteTextInput = ({ address, onSelect, onChange, onTextClear }) => {
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
            <FormControl variant="outlined">
              <OutlinedInput
                autoComplete
                autoFocus
                labelWidth={0}
                variant="outlined"
                {...getInputProps({
                  placeholder: 'Search Places ...',
                })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={onTextClear}>
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

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
  onTextClear: PropTypes.func.isRequired,
};

export default memo(AutoCompleteTextInput);
