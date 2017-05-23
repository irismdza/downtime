import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Meetups, UserMeetups } from '../../../api/collections';

import MeetupsList from '../../components/MeetupsList';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';


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
      <div className="sort-meetups-container">
        <div className="sort-buttons-container">
          <FlatButton className="sort-meetups-buttons" label="See All My Meetups" onClick={() => this.showAll()} />
          <FlatButton className="sort-meetups-buttons" label="See Meetups I'm Hosting" onClick={() => this.showHosting()} />
          <FlatButton className="sort-meetups-buttons" label="See Meetups I'm Attending" onClick={() => this.showAttending()} />
        </div>
        <div className="meetups-list-container">
          { !this.state &&
            <div>Loading your meetups <img src="/images/loading.gif" /></div>
          }
          { this.state &&
          <MeetupsList
            meetups={this.state.meetups} />
          }
        </div>
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
      .find({attending: true}, {userId: { $eq: Meteor.userId() }}, {fields:{ meetupId: 1 }})
      .fetch()
      .map(meetup =>  meetup.meetupId);

      console.log(userMeetupArray);

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
