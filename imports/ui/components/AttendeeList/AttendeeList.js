import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const AttendeeList = ({ users }) => {
    return (
      <div>
        <List>
          {users.map(user => (
            <ListItem
              primaryText={`${user.username}`}
              leftAvatar={<Avatar src="images/ok-128.jpg" />}
              rightIcon={<CommunicationChatBubble />}
            />
          ))}
        </List>
      </div>
    );
  }

export default AttendeeList;
