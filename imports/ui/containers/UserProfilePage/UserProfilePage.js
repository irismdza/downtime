import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { UserProfiles } from '../../../api/collections';

class UserProfilePage extends Component {
  render() {
    const { meetup } = this.props;
    return (
      <div className="user-profile-page">
        <div>
        </div>
      </div>
    )
  };
}

export default createContainer((props) => {
  let userProfileId = props.match.params.user_id;
  let user;

  const userProfilesCursor = Meteor.subscribe('userProfiles');

  if(userProfilesCursor.ready()) {
    user = UserProfiles.find({user: {$eq: userProfileId}}).fetch();
  }
  console.log(user);
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    user
  };
}, UserProfilePage);
