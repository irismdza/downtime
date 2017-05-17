import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import muiTheme from './styles/mui-theme';

import '../imports/start-up/accounts-config.js';

import App from '../imports/ui/containers/App';

injectTapEventPlugin();

Meteor.startup(() => {
  Meteor.autorun(() => {
    render(
      <MuiThemeProvider muiTheme={muiTheme}>
        <App />
      </MuiThemeProvider>,
      document.getElementById('root')
    );
  })
})
