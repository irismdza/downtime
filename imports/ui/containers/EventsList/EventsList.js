import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class EventsList extends Component {
  render() {
    return (
      <div>
        <h1>upcoming events</h1>
        <RaisedButton label="events i'm hosting" primary={true} />
        <br/>
        <RaisedButton label="events i'm attending" primary={true} />
      </div>
    );
  }
}

export default EventsList;