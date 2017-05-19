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
    const meetupsAttending = Meetups.find().fetch();
    this.setState();
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
  let meetupsAttending;
  const meetupsCursor = Meteor.subscribe('meetups');
  const userMeetupsCursor = Meteor.subscribe('userMeetups');

  // if(meetupsCursor.ready()) {
  //   console.log('READY');
  //   meetups = Meetups.find({}).fetch();
  //   console.log(meetups);
  // }

  if (userMeetupsCursor.ready() && meetupsCursor.ready()) {
    meetups = Meetups.find({}).fetch();

    const userMeetupArray = UserMeetups
      .find({}, { fields:{ meetupId: 1 }})
      .fetch()
      .map(meetup =>  meetup.meetupId);

    meetupsAttending = Meetups.find({ $and: [{createdBy: { $ne: Meteor.userId() }},{_id: { $nin: userMeetupArray }}]}).fetch();
  }

  console.log('meetupsAttending', meetupsAttending);

  // console.log('current user + meetups', Meteor.userId(), meetups);

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    meetups,
    meetupsAttending
  };
}, SortMeetups);