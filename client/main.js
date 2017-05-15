import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory } from 'react-router';

// route components
import { App } from '../imports/ui/containers/App';
import { EventsAttending } from '../imports/ui/containers/EventsAttending';
import { EventsHosting } from '../imports/ui/containers/EventsHosting';
import { EventPage } from '../imports/ui/containers/EventPage';
import { Browse } from '../imports/ui/containers/Browse';
import { CreateEvent } from '../imports/ui/containers/CreateEvent';
import { NotFound } from '../imports/ui/containers/NotFound';


Meteor.startup(() => {
  Meteor.autorun(() => {
    render(
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
          <App>
            <Switch>
              <Route exact path="/" component={Browse} />
              <Route exact path="/create-event" component={CreateEvent} />
              <Route exact path="events" component={EventsList} />
              <Route exact path="events/attending" component={EventsAttending} />
              <Route exact path="events/hosting" component={EventsHosting} />
              <Route exact path="events/:event_id/event" component={EventPage} />
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
