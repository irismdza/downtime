import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import SocialPerson from 'material-ui/svg-icons/social/person';
import BulletedList from 'material-ui/svg-icons/editor/format-list-bulleted';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentClear from 'material-ui/svg-icons/content/clear';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Browse extends Component {
  render() {
    return (
      <div>
        <IconButton><ContentClear /></IconButton>
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
          </Card>
        <IconButton><ActionFavorite /></IconButton>
        <div>
          <FloatingActionButton><SocialPerson /></FloatingActionButton>
          <FloatingActionButton><ContentCreate /></FloatingActionButton>
          <FloatingActionButton><BulletedList /></FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default Browse;
