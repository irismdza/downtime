import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';

const MeetupInfoCard = ( { meetup, deleteMeetup } ) => {
  return (
    <div>
      {
        !meetup &&
        <div> Loading </div>
      }
      {
        meetup &&
      <Card>
        <CardTitle title={meetup.meetup} subtitle="WHAT" />
        <CardTitle title={meetup.time} subtitle="WHEN" />
        <CardTitle title={meetup.address} subtitle="WHERE" />
      </Card>
      }
    </div>
  );
}

export default MeetupInfoCard;
