import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavMenu from '../../components/NavMenu';
import AccountsUIWrapper from '../../components/AccountsUIWrapper';

import styles from './styles.css';

class App extends Component {
  componentWillMount() {

  }
  render() {
    return (
      <div className='app-wrapper'>
        <AccountsUIWrapper />
        {this.props.children}
        <div><NavMenu /></div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.obj,
  currentUser: PropTypes.object.isRequired,
  currentUserId: PropTypes.string.isRequired,
};

export default App;

/*
<div className="login-wrapper">
          <AccountsUIWrapper />
        </div>
        {
          !this.props.currentUser &&
          <div className="logged-out-message">
            <p>Please sign in to see what the happs is</p>
          </div>
        }

        {
          this.props.currentUser &&
          <div className='app-container'>
            {this.props.children}
            <div><NavMenu /></div>
          </div>
        }
        */
