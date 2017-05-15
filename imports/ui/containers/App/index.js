import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavMenu from '../../components/NavMenu';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <NavMenu />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.obj,
};

export default App;
