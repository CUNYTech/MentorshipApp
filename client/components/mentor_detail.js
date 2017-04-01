import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';

/* this.props.user refers to the mentor object in Mentors collection */
class MentorDetail extends Component {
  render() {
    return (
      <div className="thumbnail">
        <img src={this.props.mentor.profile.avatar} />
        <div className="caption">
          <h3>Name: {this.props.mentor.profile.firstName}</h3>
          {!this.props.user.isMentor &&
            <h3>Status: {this.props.user.status}</h3>
          }
        </div>
      </div>
    );
  }
};

export default createContainer((props) => {
  return { mentor: Meteor.users.findOne({_id: props.user.mentorId}) };
}, MentorDetail);
