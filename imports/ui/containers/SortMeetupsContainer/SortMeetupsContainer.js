import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Meetups, UserMeetups } from '../../../api/collections';

import MeetupsList from '../../components/MeetupsList';
import {Tabs, Tab} from 'material-ui/Tabs';

class SortMeetupsContainer extends Component {

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="See All Meetups" >
            <div>
              <MeetupsList
                meetupsHosting={this.props.meetupsHosting}
                />
            </div>
          </Tab>
          <Tab label="Meetups I'm Hosting" >
            <div>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab
            label="Meetups I'm Attending"
          >
            <div>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default createContainer(() => {

  Meteor.subscribe('meetups');

  let meetupsHosting = Meetups
      .find( {createdBy: {$eq: Meteor.userId()} } )
      .fetch();

  console.log('current user + meetupsHosting', Meteor.userId(), meetupsHosting);

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    meetupsHosting
    };
}, SortMeetupsContainer);