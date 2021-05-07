import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <div className="header">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="header--title">
          Location Search
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
