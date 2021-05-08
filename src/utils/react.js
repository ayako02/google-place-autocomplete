import isEqual from 'lodash.isequal';

import { memo as reactMemo } from 'react';

// Memo function: To reduce component rerender time
export function memo(Component) {
  // Compare previous state & new state
  return reactMemo(Component, isEqual);
}
