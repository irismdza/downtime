import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import Confirmation from '../Confirmation';
import {Card, CardTitle} from 'material-ui/Card';

const MeetupInfoCard = ( { user } ) => {
  console.log('hmmm',user)
  return (
    <div>
      {
        !user &&
        <div> Loading </div>
      }
      {
        user &&
      <Card>
        <CardTitle title={user.name} subtitle="NAME" />
        <CardTitle title={user.age} subtitle="AGE" />
        <CardTitle title={user.sex} subtitle="GENDER" />
        <CardTitle title={user.home} subtitle="HOMETOWN" />
      </Card>
      }
    </div>
  );
}

export default MeetupInfoCard;
