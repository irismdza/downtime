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
import SortMeetupsContainer from '../SortMeetupsContainer';
import BrowseMeetups from '../BrowseMeetups';
import CreateMeetup from '../CreateMeetup';
import NotFound from '../NotFound';

import { Meetups } from '../../../api/meetups';

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
                <Route exact path="/" component={BrowseMeetups} />
                <Route
                  exact path="/create-meetup"
                  render={() => (
                            this.props.currentUser ? (
                              <CreateMeetup />
                            ) : (
                              <Redirect to="/"/>
                            )
                          )} />
                <Route
                  exact path="/meetups"
                  render={() => (
                            this.props.currentUser ? (
                              <SortMeetupsContainer />
                            ) : (
                              <Redirect to="/"/>
                            )
                          )} />
                <Route
                  exact path="/meetups/:meetup_id/meetup"
                  render={() => (
                            this.props.currentUser ? (
                              <MeetupInfoPage />
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

  const newEventsCursor = Meteor.subscribe('newMeetups', []);

  if (newEventsCursor.ready()) {
    console.log('READY!', newEventsCursor);
    console.log(Events.findOne());
  }

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
}, App);
