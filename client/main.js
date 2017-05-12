import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
  </MuiThemeProvider>
);

Meteor.startup(() => {
  Meteor.autorun(() => {
    render(
      <App />,
      document.getElementById('root')
    );
  })
})
