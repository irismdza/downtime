import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import NavMenu from '../../components/NavMenu';
import AccountsUIWrapper from '../../components/AccountsUIWrapper';

import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <div className="login-wrapper">
          <AccountsUIWrapper />
        </div>
        { this.props.currentUser ? (
        <div className='app-container'>
          {this.props.children}
          <div><NavMenu /></div>
        </div>
        ) : (
          <div className="logged-out-message">
            <p>Please sign in to see your what the happs is</p>
          </div>
        )}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.obj,
};

export default createContainer(() => {

  Meteor.subscribe('todos');

  return {
    currentUser: Meteor.user()
  };
}, App);
