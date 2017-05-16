import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentClear from 'material-ui/svg-icons/content/clear';

import EventCard from '../../components/EventCard';

class Browse extends Component {
  render() {
    return (
      <div className='browse-container'>
        <IconButton className='browse-icon-button'><ContentClear /></IconButton>
          <div className='browse-event-card'><EventCard /></div>
        <IconButton className='browse-icon-button'><ActionFavorite /></IconButton>
      </div>
    );
  }
}

export default Browse;
