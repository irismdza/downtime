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



      {/*<List>
      <ListItem
        primaryText="brunch?"
        secondaryText={
          <div>
            <p>
              11:00 AM / Twisted Fork Bistro on Granville
            </p>
          </div>
        }
        secondaryTextLines={2}
      />
      <Divider />
      <ListItem
        primaryText="spin class at YYoga"
        secondaryText={
          <div>
            <p>
              3:30 PM / YYoga on Broadway
            </p>
          </div>
        }
        secondaryTextLines={2}
      />
      <Divider />
      <ListItem
        primaryText="study session?"
        secondaryText={
          <div>
            <p>
              5:00 PM / Starbucks on Seymour and Davie
            </p>
          </div>
        }
        secondaryTextLines={2}
      />
      <Divider />
      <ListItem
        primaryText="Launch open mic!"
        secondaryText={
          <div>
            <p>
              8:30 PM / Roundhouse Community Centre in Yaletown
            </p>
          </div>
        }
        secondaryTextLines={2}
      />
      <Divider />
      </List>*/}
    </div>
  );
}

export default MeetupsList;