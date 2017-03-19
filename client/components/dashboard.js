import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import MentorList           from './mentor_list';

class Dashboard extends Component {
  getName() {
    return this.props.user.profile.firstName + ' ' + this.props.user.profile.lastName;
  }

  getEmail() {
    return this.props.user.emails[0].address;
  }

  getAvatar() {
    if(this.props.user.profile.avatar != '')
      return this.props.user.profile.avatar;
    else
      return  "default-user.png";
  }

  render() {
    if(!this.props.user) {
      return <div>Loading...</div>;
    }

    return (
      <div className="row">
        <div className="col-xs-6" id="addBorder">
          <div>
            <img id="avatar" src={this.getAvatar()}/>
          </div>
          <div>
            <div className = "action-field">
              <p>Welcome, {this.getName()}</p>
            </div>
          </div>
          <div className="action-field">
            <a href="#">
              <p>Messages</p>
            </a>
            <a href="#">
              <p>Request</p>
            </a>
            <a href="#">
              <p>Notifications</p>
            </a>
          </div>
        </div>
        <div className="col-xs-6">
          <MentorList />
        </div>
      </div>
    ); //end return()
  } // end render()
} //end Dashboard

export default createContainer(() =>{
  /* user email, username, and profile are published by default, we don't have to set
  up subscription. */
    //return an object, Whatever we return will be send to userList as props
    return { user: Meteor.user()};
}, Dashboard);
