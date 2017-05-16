import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import SocialPerson from 'material-ui/svg-icons/social/person';
import BulletedList from 'material-ui/svg-icons/editor/format-list-bulleted';

class NavMenu extends Component {
  render() {
    return (
      <div>
        <FloatingActionButton><SocialPerson /></FloatingActionButton>
        <FloatingActionButton><ContentCreate /></FloatingActionButton>
        <FloatingActionButton><BulletedList /></FloatingActionButton>
      </div>
    );
  }
}

export default NavMenu;
