import React, { Component } from 'react';
import MeetupsList from '../../components/MeetupsList';
import {Tabs, Tab} from 'material-ui/Tabs';

class SortMeetupsContainer extends Component {

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="See All Meetups" >
            <div>
              <MeetupsList />
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

export default SortMeetupsContainer;