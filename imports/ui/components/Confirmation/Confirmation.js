import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const paperStyle = {
  height: 400,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
}

class Confirmation extends Component {
  render() {
    return (
      <div>
        <Paper style={paperStyle} zDepth={4} circle={true}>
          Are you sure you want to attend this happenin thing?
          <FlatButton
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
          >
            Yes
          </FlatButton>
          <FlatButton
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
          >
            No
          </FlatButton>
        </Paper>
      </div>
    );
  }
}

export default Confirmation;
