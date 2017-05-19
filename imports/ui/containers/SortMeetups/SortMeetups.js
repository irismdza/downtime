import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Meetups, UserMeetups } from '../../../api/collections';

import MeetupsList from '../../components/MeetupsList';
import FlatButton from 'material-ui/FlatButton';

class SortMeetups extends Component {

  componentWillReceiveProps(nextProps) {
    this.state = { meetups: nextProps.meetups }
  }

  showAll() {
    this.setState({ meetups: this.props.meetups });
  }

  showHosting() {
    this.setState({ meetups: this.props.meetupsHosting });
  }

  showAttending() {
    this.setState({ meetups: this.props.meetupsAttending });
  }

  render() {
    console.log('this.state', this.state);
    return (
      <div>
        <FlatButton label="See All Meetups" onClick={() => this.showAll()} />
        <FlatButton label="See My Meetups" onClick={() => this.showHosting()} />
        <FlatButton label="See Meetups I'm Attending" onClick={() => this.showAttending()} />
          { !this.state &&
            <div> Loading your Meetups </div>
          }
          { this.state &&
          <MeetupsList
            meetups={this.state.meetups} />
          }
      </div>
    )
  }
}

export default createContainer(() => {

  let meetups = [];
  let meetupsAttending;
  let meetupsHosting;
  let allMeetups
  const meetupsCursor = Meteor.subscribe('meetups');
  const userMeetupsCursor = Meteor.subscribe('userMeetups');

  if (userMeetupsCursor.ready() && meetupsCursor.ready()) {

    const userMeetupArray = UserMeetups
      .find({attending: true }, {fields:{ meetupId: 1 }})
      .fetch()
      .map(meetup =>  meetup.meetupId);

    meetupsHosting = Meetups.find({createdBy: {$eq: Meteor.userId()} }).fetch();

    meetupsAttending = Meetups.find({ $and: [{createdBy: { $ne: Meteor.userId() }},{_id: { $in: userMeetupArray }}]}).fetch();

    meetups = Meetups.find({ $or: [{createdBy: {$eq: Meteor.userId()}},{_id: { $in: userMeetupArray }}]}).fetch();
  }

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    meetups,
    meetupsAttending,
    meetupsHosting
  };
}, SortMeetups);
