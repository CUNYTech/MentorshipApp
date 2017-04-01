import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';

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
          <h3>Name: {this.props.mentee.profile.firstName}</h3>
          {!this.props.user.isMentee && [
            <h3>Status: {this.props.user.status}</h3>,
            <button className="btn btn-success" onClick={() => this.onAccept(this.props.user)}>Accept</button>,
            <button className="btn btn-danger" onClick={() => this.onReject(this.props.user)}>Reject</button>
          ]}
        </div>
      </div>
    );
  }
};

export default createContainer((props) => {
  return { mentee: Meteor.users.findOne({_id: props.user.menteeId}) };
}, MenteeDetail);
