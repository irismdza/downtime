import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ContentCreate from 'material-ui/svg-icons/content/create';
import BulletedList from 'material-ui/svg-icons/editor/format-list-bulleted';

class NavMenu extends Component {
  render() {
    return (
      <div className='main-navigation'>
        <BottomNavigation>
          <Link to='/'>
            <BottomNavigationItem
              label="Profile"
              icon={<SocialPerson />}
            />
          </Link>
          <Link to='/create-meetup'>
            <BottomNavigationItem
              label="Post"
              icon={<ContentCreate />}
            />
          </Link>
          <Link to='/meetups'>
            <BottomNavigationItem
              label="Meetups"
              icon={<BulletedList />}
            />
          </Link>
        </BottomNavigation>
      </div>
    );
  }
}

export default NavMenu;
