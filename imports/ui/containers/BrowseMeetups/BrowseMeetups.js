import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentClear from 'material-ui/svg-icons/content/clear';
import { createContainer } from 'meteor/react-meteor-data';

import MeetupInfoCard from '../../components/MeetupInfoCard';
import { Meetups } from '../../../api/meetups';
import { UserMeetups } from '../../../api/userMeetups';


class BrowseMeetups extends Component {

  attendingMeetup() {
    Meteor.call('userMeetups.addAttendMeetup', this.props.meetup)
  }

  notAttendingMeetup() {
    Meteor.call('userMeetups.addNotAttendMeetup', this.props.meetup)
  }

  render() {
    return (
      <div className='browse-container'>
        <IconButton onTouchTap={() => this.notAttendingMeetup()} className='browse-icon-button'><ContentClear /></IconButton>
          <div className='browse-meetup-card'><MeetupInfoCard meetup={this.props.meetup} /></div>
        <IconButton onTouchTap={() => this.attendingMeetup()} className='browse-icon-button'><ActionFavorite /></IconButton>
      </div>
    );
  }
}

export default createContainer(() => {

Meteor.subscribe('userMeetups', []);
  console.log(UserMeetups.find().fetch());
  const newMeetupsCursor = Meteor.subscribe('newMeetups', [{$in: UserMeetups.meetupId}]);
  console.log('yo',Meetups);
  console.log(UserMeetups.findOne())
  const gotMeetup = newMeetupsCursor.ready();

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    meetup: gotMeetup && Meetups.findOne()
  };
}, BrowseMeetups);

