import React, { Component } from 'react';
import MeetupInfoCard from '../../components/MeetupInfoCard';
import AttendeeList from '../../components/AttendeeList';

import styles from './styles.css';

const MeetupInfoPage = ({ meetup }) => {
  return (
    <div className="meetup-page">
      <div className="meetup-card">
        <h2>what's happening?</h2>
        <MeetupInfoCard
          meetup={meetup}
        />
      </div>
      <div className="attendee-list">
        <h2>who's going?</h2>
        <AttendeeList />
      </div>
    </div>
  );
}

export default MeetupInfoPage;