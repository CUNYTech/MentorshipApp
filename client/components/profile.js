import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';

class Profile extends Component {
  getName() {
    return this.props.user.profile.firstName + ' ' + this.props.user.profile.lastName;
  }

  getAvatar() {
    if(this.props.user.profile.avatar != '')
      return this.props.user.avatar;
    else
      return  "default-user.png";
  }

  render() {
    if(!this.props.user) {
      return <div>Loading...</div>;
    }

    return (
      <div className="col-md-4 col-md-offset-4" id="profile">
        <div>
          <img id="profile-pic" className="col-md-4 col-md-offset-4" src={this.getAvatar()}/>
        </div>
        <div id="action-field2" className="col-md-4 col-md-offset-4" >
          <p>{this.getName()}</p>
        </div>
      </div>
    ); // end return()
  } //end render()
}; // end class Profile

export default createContainer(() => {
/* user email, username, and profile are published by default, we don't have to set
up subscription. */

  //return an object, Whatever we return will be send to userList as props
  return { user: Meteor.user() };
}, Profile);
