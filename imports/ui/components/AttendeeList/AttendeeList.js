import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { Link } from 'react-router-dom';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const AttendeeList = ({ users }) => {
    return (
      <div>
        <List>
          {users.map(user => (
            <Link to={`/profile/${user._id}`}>
              <ListItem
                primaryText={`${user.username}`}
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
            </Link>
          ))}
        </List>
      </div>
    );
  }

export default AttendeeList;
