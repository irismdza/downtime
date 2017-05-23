import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Search from 'material-ui/svg-icons/action/search';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ContentCreate from 'material-ui/svg-icons/content/create';
import BulletedList from 'material-ui/svg-icons/editor/format-list-bulleted';

class NavMenu extends Component {

  render() {
    return (
      <div className="nav-menu-wrapper">
        <BottomNavigation>
          <Link to='/create-profile' className="nav-menu-item">
            <BottomNavigationItem className="nav-menu-item-button"
              label="Profile"
              icon={<SocialPerson />}
            />
          </Link>
          <Link to='/' className="nav-menu-item">
            <BottomNavigationItem className="nav-menu-item-button"
              label="Browse"
              icon={<Search />}
            />
          </Link>
          <Link to='/create-meetup' className="nav-menu-item">
            <BottomNavigationItem
              label="Post"
              icon={<ContentCreate />}
            />
          </Link>
          <Link to='/meetups' className="nav-menu-item">
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
