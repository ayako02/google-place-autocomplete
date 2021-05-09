import React, { Children } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

import ClearIcon from '@material-ui/icons/Clear';

import { List, ListItem, IconButton, ListItemText, Divider } from '@material-ui/core';

const HistorySection = ({ histories, onHistoryClear, onSelect }) => (
  <div className="mt3">
    <div className="flex flex-row justify-between items-center">
      <h2>Your searched histories</h2>
      <IconButton aria-label="clear" onClick={onHistoryClear}>
        <ClearIcon />
      </IconButton>
    </div>

    <div className="mt3">
      {isEmpty(histories) ? (
        <h4 className="i silver">No histories</h4>
      ) : (
        Children.toArray(
          histories.map(location => (
            <List component="div" disablePadding>
              <ListItem button onClick={() => onSelect(location)}>
                <ListItemText primary={location} />
              </ListItem>
              <Divider />
            </List>
          ))
        )
      )}
    </div>
  </div>
);

HistorySection.defaultProps = { histories: [] };

HistorySection.propTypes = {
  histories: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
  onHistoryClear: PropTypes.func.isRequired,
};

export default HistorySection;
