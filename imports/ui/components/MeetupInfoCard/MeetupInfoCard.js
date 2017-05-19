import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import Confirmation from '../Confirmation';
import {Card, CardTitle} from 'material-ui/Card';

const MeetupInfoCard = ( { meetup } ) => {
  console.log('hmmm', meetup);
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
