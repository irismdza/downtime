import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import MeetupInfoCard from '../../components/MeetupInfoCard';
import AttendeeList from '../../components/AttendeeList';
import { Meetups, UserMeetups } from '../../../api/collections';

import styles from './styles.css';

class MeetupInfoPage extends Component {
  render() {
    const { meetup } = this.props;
    return (
      <div className="meetup-page">
        <div className="meetup-card">
          <h2>what's happening?</h2>
          {
            !meetup &&
            <div> Loading </div>
          }
          {
            meetup &&
            <MeetupInfoCard meetup={meetup} />
          }
        </div>
        <div className="attendee-list">
          <h2>who's going?</h2>
          <AttendeeList />
        </div>
      </div>
    )
  };
}

export default createContainer((props) => {

  let meetup;

  const meetupsCursor = Meteor.subscribe('meetups');

  let meetupId = props.match.params.meetup_id;

  if(meetupsCursor.ready()) {
    meetup = Meetups.findOne({_id: {$eq: meetupId} });
  }

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    meetup
  };
}, MeetupInfoPage);
