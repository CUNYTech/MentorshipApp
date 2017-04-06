import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import {Link} from 'react-router'

/* this.props.user refers to the mentee object in Mentees collection */
class MenteeDetail extends Component {

  onAccept(user) {
    Meteor.call('mentors.accept', user);
    Meteor.call('mentees.accept', user);
  }

  onReject(user) {
    Meteor.call('mentors.reject', user);
    Meteor.call('mentees.reject', user);
  }

  render() {
    return (
      <div className="thumbnail">
        <img src={this.props.mentee.profile.avatar} />
        <div className="caption">
          <h2>  <Link to={"/profile/"+this.props.mentee.username}> {this.props.mentee.profile.firstName}</Link></h2>
          {!this.props.user.isMentee && [
            <p>Status: {this.props.user.status}</p>,
            <a onClick={() => this.onAccept(this.props.user)}>
              <img id="check-mark" src="/check-accept.png"/>
            </a>,
            <a onClick={() => this.onReject(this.props.user)}>
              <img id="reject" src="/x-reject.png"/>
            </a>
          ]}
        </div>
      </div>
    );
  }
};

export default createContainer((props) => {
  return { mentee: Meteor.users.findOne({_id: props.user.menteeId}) };
}, MenteeDetail);
