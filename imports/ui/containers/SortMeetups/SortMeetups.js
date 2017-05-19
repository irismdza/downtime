import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Meetups, UserMeetups } from '../../../api/collections';

import MeetupsList from '../../components/MeetupsList';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';

class SortMeetups extends Component {

  componentWillReceiveProps(nextProps) {
    this.state = { meetups: nextProps.meetups }
  }

  showAll() {
    const allMeetups = Meetups.find().fetch();
    this.setState({ meetups: allMeetups });
  }

  showMine() {
    const myMeetups = Meetups.find({createdBy: {$eq: Meteor.userId()} }).fetch();
    this.setState({ meetups: myMeetups });
  }

  showAttending() {

  }

  render() {
    console.log(this.state);
    return (
      <div>
        <FlatButton label="See All Meetups" onClick={() => this.showAll()} />
        <FlatButton label="See My Meetups" onClick={() => this.showMine()} />
        <FlatButton label="See Meetups I'm Attending" />
      </div>
    )
  }
}

export default createContainer(() => {

  let meetups = [];
  const meetupsCursor = Meteor.subscribe('meetups');

  if(meetupsCursor.ready()) {
    console.log('READY');
    meetups = Meetups.find({}).fetch();
    console.log(meetups);
  }

  // console.log('current user + meetupsHosting', Meteor.userId(), meetupsHosting);

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    meetups
  };
}, SortMeetups);