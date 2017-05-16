import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  IndexRoute,
  Redirect
} from 'react-router-dom';
import { browserHistory } from 'react-router';

import muiTheme from './styles/mui-theme';

import '../imports/start-up/accounts-config.js';

// route components
import App from '../imports/ui/containers/App';
import EventPage from '../imports/ui/containers/EventPage';
import SortEventsContainer from '../imports/ui/containers/SortEventsContainer';
import Browse from '../imports/ui/containers/Browse';
import CreateEvent from '../imports/ui/containers/CreateEvent';
import NotFound from '../imports/ui/containers/NotFound';


Meteor.startup(() => {
  Meteor.autorun(() => {
    render(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
          <App>
            <Switch>
              <Route exact path="/" component={Browse} />
              <Route exact path="/create-event" component={CreateEvent} />
              <Route exact path="/events" component={SortEventsContainer} />
              <Route exact path="/events/:event_id/event" component={EventPage} />
              <Route path="*" component={NotFound} />
              {/*<Route exact path="profile/:user_id" component={UserProfile} />*/}
            </Switch>
          </App>
        </Router>
      </MuiThemeProvider>,
      document.getElementById('root')
    );
  })
})
