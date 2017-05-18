import React, { Component } from 'react';
import MeetupInfoCard from '../../components/MeetupInfoCard';
import AttendeeList from '../../components/AttendeeList';

import styles from './styles.css';

class MeetupInfoPage extends Component {
  render() {
    return (
      <div className="meetup-page">
        <div className="meetup-card">
          <h2>what's happening?</h2>
          <EventCard />
        </div>
        <div className="attendee-list">
          <h2>who's going?</h2>
          <AttendeeList />
        </div>
      </div>
    );
  }
}

export default MeetupInfoPage;