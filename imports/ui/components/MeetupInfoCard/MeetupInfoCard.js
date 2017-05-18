import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import Confirmation from '../Confirmation';
import {Card, CardActions, CardHeader, CardTitle} from 'material-ui/Card';

const MeetupInfoCard = ({ meetup }) => {
  return (
    <div>
      <Tabs>
        <Tab label="Browse Meetups" />
      </Tabs>
      <Card>
        <CardTitle title={meetup.meetup} subtitle="WHAT" />
        <CardTitle title={meetup.time} subtitle="WHEN" />
        <CardTitle title={meetup.address} subtitle="WHERE" />
      </Card>
    </div>
  );
}

export default MeetupInfoCard;