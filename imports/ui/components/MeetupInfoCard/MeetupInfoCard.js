import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import Confirmation from '../Confirmation';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const MeetupInfoCard = ({ meetup }) => {
    return (
      <div>
          <Card>
            <CardMedia
              overlay={<CardTitle title={meetup.meetup} subtitle={meetup.createdBy} />}
            >
            </CardMedia>
            <CardTitle title={meetup.time} subtitle="When" />
            <CardTitle title={meetup.address} subtitle="Where" />
            <CardText>
              Bring your sweaters and a smile
            </CardText>
          </Card>
      </div>
    );
  }

export default MeetupInfoCard;
