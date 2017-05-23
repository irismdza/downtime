import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { UserProfiles } from '../../../api/collections';
import UserProfileCard from '../../components/UserProfileCard';

class UserProfilePage extends Component {
  render() {
    return (
      <div className="user-profile-page">
        <div>
          <UserProfileCard user={this.props.user} />
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
    user = UserProfiles.findOne({user: {$eq: userProfileId}});
  }
  console.log(user);
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    user
  };
}, UserProfilePage);
