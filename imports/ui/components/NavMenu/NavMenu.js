import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import SocialPerson from 'material-ui/svg-icons/social/person';
import BulletedList from 'material-ui/svg-icons/editor/format-list-bulleted';
import { Link } from 'react-router-dom';

class NavMenu extends Component {
  render() {
    return (
      <div className='main-navigation'>
        <Link to={'/'}>
          <FloatingActionButton><SocialPerson /></FloatingActionButton>
        </Link>
        <Link to={'/create-event'}>
          <FloatingActionButton><ContentCreate /></FloatingActionButton>
        </Link>
        <Link to={'/events'}>
          <FloatingActionButton><BulletedList /></FloatingActionButton>
        </Link>
      </div>
    );
  }
}

export default NavMenu;
