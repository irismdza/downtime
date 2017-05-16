import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class AttendeeList extends Component {
  render() {
    return (
      <div>
        <List>
          <ListItem
            primaryText="Han Solo"
            leftAvatar={<Avatar src="images/ok-128.jpg" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Yoda"
            leftAvatar={<Avatar src="images/kolage-128.jpg" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Darth Vader"
            leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Jar Jar Binx"
            leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Darth Maul"
            leftAvatar={<Avatar src="images/kerem-128.jpg" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Jabba the Hutt"
            leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
            rightIcon={<CommunicationChatBubble />}
          />
        </List>
      </div>
    );
  }
}

export default AttendeeList;