import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

class EventsHosting extends Component {
  render() {
    return (
      <div>
        <List>
        <Subheader>EVENTS I'M HOSTING TODAY</Subheader>
        <ListItem
          primaryText="brunch?"
          secondaryText={
            <div>
              <p>
                11:00 AM / Twisted fork on Granville
              </p>
            </div>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        <ListItem
          primaryText="Launch open mic!"
          secondaryText={
            <div>
              <p>
                7:30 AM / Roundhouse Community Centre in Yaletown
              </p>
            </div>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
        </List>
      </div>
    );
  }
}

export default EventsHosting;