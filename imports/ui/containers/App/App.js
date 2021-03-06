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

import MeetupInfoPage from '../MeetupInfoPage';
import SortMeetups from '../SortMeetups';
import BrowseMeetups from '../BrowseMeetups';
import CreateMeetup from '../CreateMeetup';
import NotFound from '../NotFound';
import CreateUserProfile from '../CreateUserProfile';
import UserProfilePage from '../UserProfilePage';

import { Meetups } from '../../../api/collections';

import styles from './styles.css';

class App extends Component {

  requireAuth(nextState, replace){
    if (!this.props.currentUser){
      replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    })
    }
  }

  render() {
    const isLoggedIn = this.props.currentUser;

    return (

      <div className="app-wrapper">
        <div className="login-wrapper">
          <AccountsUIWrapper />
        </div>

        { isLoggedIn ? (
          <Router>
            <div className="logged-in-wrapper">
              <Switch>
                  <Route exact path="/" render={() => (<BrowseMeetups />)} />
                  <Route
                    exact path="/create-meetup"
                    render={() => (<CreateMeetup />)} />
                  <Route
                    exact path="/create-profile"
                    render={() => (<CreateUserProfile />)} />
                  <Route
                    exact path="/meetups"
                    render={() => (<SortMeetups />)} />
                  <Route
                    exact path="/meetups/:meetup_id/meetup"
                    component={MeetupInfoPage} />
                  <Route
                    exact path="/profile/:user_id"
                    component={UserProfilePage} />
                  <Route path="*" component={NotFound} />
              </Switch>
              <div><NavMenu /></div>
            </div>
          </Router>
        ) : (

          <div className="logged-out-message">
            <img src="/images/downtime-logo.png" />
            <h2>Sign in to browse meetups around you!</h2>
          </div>

        )}

      </div>
    )
  }
}

export default createContainer(() => {

  const newEventsCursor = Meteor.subscribe('meetups', []);

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
}, App);
