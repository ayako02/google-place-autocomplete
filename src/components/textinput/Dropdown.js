import get from 'lodash.get';
import PropTypes from 'prop-types';
import React, { Children } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { memo } from 'utils/react';

import { activeItemStyle, inactiveItemStyle } from './style';

const AutoCompleteDropdown = ({ isLoading, suggestions, getSuggestionItemProps }) => (
  <div className="autocomplete-dropdown-container">
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      Children.toArray(
        suggestions.map(suggestion => {
          const active = get(suggestion, 'active', false);
          const description = get(suggestion, 'description', '');

          const className = active ? 'suggestion-item--active' : 'suggestion-item';
          const style = active ? activeItemStyle : inactiveItemStyle;

          return (
            <ListItem {...getSuggestionItemProps(suggestion, { className, style })}>
              <ListItemText>{description}</ListItemText>
            </ListItem>
          );
        })
      )
    )}
  </div>
);

AutoCompleteDropdown.defaultProps = { suggestions: [] };

AutoCompleteDropdown.propTypes = {
  suggestions: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  getSuggestionItemProps: PropTypes.func.isRequired,
};

export default memo(AutoCompleteDropdown);
