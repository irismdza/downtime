import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



class CreateEvent extends Component {
  render() {
    return (
      <div>
        <TextField
          hintText="what do you want to do?"
        /><br />
        <br />
        <TextField
          hintText="where at?"
        /><br />
        <TextField
          hintText="what time?"
        /><br />
        <RaisedButton label="post" secondary={true} />
      </div>
    );
  }
}

export default CreateEvent;