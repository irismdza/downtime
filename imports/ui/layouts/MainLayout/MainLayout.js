import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

class MainLayout extends Component {
   render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.object,
  currentUser: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired
};

export default MainLayout;
