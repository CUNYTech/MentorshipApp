import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import {Link}               from 'react-router'
import { Mentors }          from '../../imports/collections/mentors';
import { Mentees }          from '../../imports/collections/mentees';

/* this.props.user refers to the mentor object in Mentors collection */
class MentorDetail extends Component {

  onRemoveMentor(user) {
    Meteor.call('mentors.deleteMentor', user);
  }

  render() {
    return (
      <div className="thumbnail">
        <img src={this.props.mentor.profile.avatar} />
        <div className="caption">
          <h2>
            <Link to={"/profile/"+this.props.mentor.username}>
              {this.props.mentor.profile.firstName}
            </Link>
            <a onClick={() => this.onRemoveMentor(this.props.user)}>
              <img id="remove-user" src="/remove-user-icon.png"/>
            </a>
          </h2>
          {!this.props.user.isMentor &&
            <p>Status: {this.props.user.status}</p>
          }
        </div>
      </div>
    );
  }
};

export default createContainer((props) => {
  return { mentor: Meteor.users.findOne({_id: props.user.mentorId}) };
}, MentorDetail);
