import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import muiTheme from './styles/mui-theme';

import '../imports/start-up/accounts-config.js';

// route components
import MainLayout from '../imports/ui/layouts/MainLayout';
import App from '../imports/ui/containers/App';

injectTapEventPlugin();

Meteor.startup(() => {
  Meteor.autorun(() => {
    render(
      <MuiThemeProvider muiTheme={muiTheme}>
          <MainLayout>
            <App />
          </MainLayout>
      </MuiThemeProvider>,
      document.getElementById('root')
    );
  })
})
