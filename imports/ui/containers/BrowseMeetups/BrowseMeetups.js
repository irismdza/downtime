import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentClear from 'material-ui/svg-icons/content/clear';
import { createContainer } from 'meteor/react-meteor-data';

import MeetupInfoCard from '../../components/MeetupInfoCard';


class BrowseMeetups extends Component {
  render() {
    return (
      <div className='browse-container'>
        <IconButton className='browse-icon-button'><ContentClear /></IconButton>
          <div className='browse-meetup-card'><MeetupInfoCard /></div>
        <IconButton className='browse-icon-button'><ActionFavorite /></IconButton>
      </div>
    );
  }
}

export default BrowseMeetups;

