import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentClear from 'material-ui/svg-icons/content/clear';
import { createContainer } from 'meteor/react-meteor-data';

import EventCard from '../../components/EventCard';

class Browse extends Component {
  render() {
    return (
      <div>
      {
        !this.props.currentUser &&
        <div className="logged-out-message">
          <p>Please sign in to explore things to do</p>
        </div>
      }
      {
      !!this.props.currentUser &&
      <div className='browse-container'>
        <IconButton className='browse-icon-button'><ContentClear /></IconButton>
          <div className='browse-event-card'><EventCard /></div>
        <IconButton className='browse-icon-button'><ActionFavorite /></IconButton>
      </div>
    }
    </div>
    );
  }
}

export default Browse;

