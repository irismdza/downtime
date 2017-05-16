import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import Confirmation from '../Confirmation';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class EventCard extends Component {
  render() {
    return (
      <div>
          <Card>
            <CardMedia
              overlay={<CardTitle title="Go To The Park" subtitle="with Susan" />}
            >
            </CardMedia>
            <CardTitle title="11:00am" subtitle="When" />
            <CardTitle title="City Park" subtitle="Where" />
            <CardText>
              Bring your sweaters and a smile
            </CardText>
            <Confirmation />
          </Card>
      </div>
    );
  }
}

export default EventCard;
