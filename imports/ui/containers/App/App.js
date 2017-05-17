import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavMenu from '../../components/NavMenu';
import AccountsUIWrapper from '../../components/AccountsUIWrapper';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  IndexRoute,
  Redirect
} from 'react-router-dom';

import { createContainer } from 'meteor/react-meteor-data';

import EventPage from '../EventPage';
import SortEventsContainer from '../SortEventsContainer';
import Browse from '../Browse';
import CreateEvent from '../CreateEvent';
import NotFound from '../NotFound';

import { Events } from '../../../api/events';

import styles from './styles.css';

class App extends Component {

  requireAuth(nextState, replace){
    console.log('yelllow')
    if (!this.props.currentUser){
      replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    })
    }
  }

  render() {
    return (
      <div className='app-wrapper'>
        <AccountsUIWrapper />
        <Router>
          <div>
            <Switch>
                <Route exact path="/" component={Browse} />
                <Route
                  exact path="/create-event"
                  render={() => (
                            this.props.currentUser ? (
                              <CreateEvent />
                            ) : (
                              <Redirect to="/"/>
                            )
                          )} />
                <Route
                  exact path="/events"
                  render={() => (
                            this.props.currentUser ? (
                              <SortEventsContainer />
                            ) : (
                              <Redirect to="/"/>
                            )
                          )} />
                <Route
                  exact path="/events/:event_id/event"
                  render={() => (
                            this.props.currentUser ? (
                              <EventPage />
                            ) : (
                              <Redirect to="/"/>
                            )
                          )} />
                <Route path="*" component={NotFound} />
                {/*<Route exact path="profile/:user_id" component={UserProfile} />*/}
            </Switch>
            <div><NavMenu /></div>
          </div>
        </Router>
      </div>
    )
  }
}

export default createContainer(() => {

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
}, App);
