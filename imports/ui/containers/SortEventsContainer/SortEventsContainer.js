import React, { Component } from 'react';
import EventsList from '../../components/EventsList';
import {Tabs, Tab} from 'material-ui/Tabs';

class SortEventsContainer extends Component {

  render() {
    return (
      <div>
        <Tabs>
          <Tab label="See All Events" >
            <div>
              <EventsList />
            </div>
          </Tab>
          <Tab label="Events I'm Hosting" >
            <div>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab
            label="Events I'm Attending"
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

export default SortEventsContainer;