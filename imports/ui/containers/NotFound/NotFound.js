import React, { Component } from 'react';
import AlertError from 'material-ui/svg-icons/alert/error';

class NotFound extends Component {
  render() {
    return (
      <div>
        <AlertError />
        <h1> I am sorry but that doesn't exist </h1>
      </div>
    );
  }
}

export default NotFound;
