import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import MeetupInfoCard from '../../components/MeetupInfoCard';
import AttendeeList from '../../components/AttendeeList';
import { Meetups, UserMeetups } from '../../../api/collections';

import styles from './styles.css';

class MeetupInfoPage extends Component {

  deleteMeetup(data) {
    Meteor.call('meetups.deleteMeetup', data);
    console.log(data)
  };

  render() {
    const { meetup } = this.props;
    return (
      <div className="meetup-page">
        <div>
          {
            !meetup &&
            <div> Loading </div>
          }
          {
            meetup &&
          <div>
            <div className="meetup-card">
              <h2>what's happening?</h2>
                <MeetupInfoCard
                  meetup={meetup}
                  deleteMeetup={() => this.deleteMeetup()} />
            </div>
          </div>
          }
        </div>
        <div>
          {
            !this.props.users &&
            <div> Getting Users </div>
          }
          {
            this.props.users &&
            <div className="attendee-list">
              <h2>who's going?</h2>
                <AttendeeList users={this.props.users} />
            </div>
          }
        </div>
      </div>
    )
  };
}

export default createContainer((props) => {

  let meetup;
  let users;
  let meetupId = props.match.params.meetup_id;

  const meetupsCursor = Meteor.subscribe('meetups');
  const userMeetupsCursor = Meteor.subscribe('userMeetups');
  const usersCursor = Meteor.subscribe('downtimeUsers');

  if(userMeetupsCursor.ready() && meetupsCursor.ready() && usersCursor.ready()) {
    const userMeetupArray = UserMeetups
      .find({attending: true, meetupId: {$eq: meetupId}}, {fields:{ userId: 1 }})
      .fetch()
      .map(meetup =>  meetup.userId);
      console.log(userMeetupArray);

    meetup = Meetups.findOne({_id: {$eq: meetupId} });
    users = Meteor.users.find(({_id: { $in: userMeetupArray }})).fetch();
  }

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    meetup,
    users
  };
}, MeetupInfoPage);
