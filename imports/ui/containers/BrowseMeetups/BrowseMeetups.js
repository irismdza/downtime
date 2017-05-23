import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentClear from 'material-ui/svg-icons/content/clear';
import { createContainer } from 'meteor/react-meteor-data';
import Snackbar from 'material-ui/Snackbar';
import {Card, CardTitle} from 'material-ui/Card';

import MeetupInfoCard from '../../components/MeetupInfoCard';
import { Meetups, UserMeetups } from '../../../api/collections';


class BrowseMeetups extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  attendingMeetup() {
    this.setState({
      open: true,
    });
    Meteor.call('userMeetups.addAttendMeetup', this.props.meetup)
  }

  notAttendingMeetup() {
    Meteor.call('userMeetups.addNotAttendMeetup', this.props.meetup)
  }

  render() {
    const { meetup } = this.props;
    console.log(meetup);
    return (
      <div className="browse-container">
        <Tabs>
          <Tab label="Browse Meetups" />
        </Tabs>
        {
          !meetup &&
          <div className="no-meetups-message">
            <Card>
              <CardTitle title="Want more meetups?" />
              <CardTitle title="Post one of your own!" />
            </Card>
          </div>
        }

        {
          meetup &&
          <div className="meetup-info-container">
            <IconButton onTouchTap={() => this.notAttendingMeetup()} className="browse-icon-button"><ContentClear /></IconButton>
              <div className="browse-meetup-card"><MeetupInfoCard meetup={meetup} /></div>
            <IconButton onTouchTap={() => this.attendingMeetup()} className="browse-icon-button"><ActionFavorite /></IconButton>
          </div>
        }
        <Snackbar
            open={this.state.open}
            message="Meetup added to your list!"
            autoHideDuration={1000}
            onRequestClose={() => this.handleRequestClose()}
          />
      </div>
    )
  };
}

export default createContainer(() => {
  let meetup;

  const userMeetupsCursor = Meteor.subscribe('userMeetups');
  const meetupsCursor = Meteor.subscribe('meetups');

  if (userMeetupsCursor.ready() && meetupsCursor.ready()) {
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

