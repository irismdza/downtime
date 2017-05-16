import React, { Component } from 'react';
import EventCard from '../../components/EventCard';
import AttendeeList from '../../components/AttendeeList';

import styles from './styles.css';

class EventPage extends Component {
  render() {
    return (
      <div className="event-page">
        <div className="event-card">
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

export default EventPage;