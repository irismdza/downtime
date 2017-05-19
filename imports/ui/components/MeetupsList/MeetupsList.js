import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';


const MeetupsList = ({ meetups }) => {
  return (
    <div>
      <List>
        {meetups.map(meetup => (
          <div>
            <Link to={`/meetups/${meetup._id}/meetup`}>
              <ListItem
                primaryText={meetup.meetup}
                secondaryText={
                  `${meetup.time} / ${meetup.address} / ${meetup.city}`
                }
              />
            </Link>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}

export default MeetupsList;
