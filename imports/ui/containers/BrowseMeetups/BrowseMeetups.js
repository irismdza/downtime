import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentClear from 'material-ui/svg-icons/content/clear';
import { createContainer } from 'meteor/react-meteor-data';

import MeetupInfoCard from '../../components/MeetupInfoCard';
import { Meetups, UserMeetups } from '../../../api/collections';


class BrowseMeetups extends Component {

  attendingMeetup() {
    Meteor.call('userMeetups.addAttendMeetup', this.props.meetup)
  }

  notAttendingMeetup() {
    Meteor.call('userMeetups.addNotAttendMeetup', this.props.meetup)
  }

  render() {
    const { meetup } = this.props;
    return (
      <div>
        <Tabs>
          <Tab label="Browse Meetups" />
        </Tabs>
        {
          !meetup &&
          <div className="no-meetups-message">
            <h1>no more meetups right now...so post a new one!</h1>
          </div>
        }

        {
          meetup &&
          <div className='browse-container'>
            <IconButton onTouchTap={() => this.notAttendingMeetup()} className='browse-icon-button'><ContentClear /></IconButton>
              <div className='browse-meetup-card'><MeetupInfoCard meetup={this.props.meetup} /></div>
            <IconButton onTouchTap={() => this.attendingMeetup()} className='browse-icon-button'><ActionFavorite /></IconButton>
          </div>
        }
      </div>
    )
  };
}

export default createContainer(() => {
  let meetup;

  const userMeetupsCursor = Meteor.subscribe('userMeetups', []);
  const newMeetupsCursor = Meteor.subscribe('newMeetups');

  if (userMeetupsCursor.ready() && newMeetupsCursor.ready()) {
    const userMeetupArray = UserMeetups
      .find({}, { fields:{ meetupId: 1 }})
      .fetch()
      .map(meetup =>  meetup.meetupId);

    meetup = Meetups.findOne({ $and: [{createdBy: { $ne: Meteor.userId() }},{_id: { $nin: userMeetupArray }}]});
  }

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    meetup
  };
}, BrowseMeetups);

