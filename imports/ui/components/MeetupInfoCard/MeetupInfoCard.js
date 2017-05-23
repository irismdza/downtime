import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import Confirmation from '../Confirmation';
import {Card, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const MeetupInfoCard = ( { meetup, deleteMeetup } ) => {
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
        <FlatButton onClick={() => deleteMeetup(meetup._id)}>delete</FlatButton>
        {console.log('har har har', deleteMeetup)}
      </Card>
      }
    </div>
  );
}

export default MeetupInfoCard;
