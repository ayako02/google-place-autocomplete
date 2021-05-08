import React, { Children } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

import ClearIcon from '@material-ui/icons/Clear';

import { List, ListItem, IconButton, ListItemText } from '@material-ui/core';

const HistorySection = ({ histories, onHistoryClear }) => (
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
          histories.map(item => (
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary={item} />
              </ListItem>
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
  onHistoryClear: PropTypes.func.isRequired,
};

export default HistorySection;
