import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavMenu from '../../components/NavMenu';

import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        {this.props.children}
        <div><NavMenu /></div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.obj,
};

export default App;
