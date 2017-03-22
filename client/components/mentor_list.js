import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import MentorDetail from './mentor_detail';

class MentorList extends Component {
  constructor(props) {
    super(props);
  }

  mentorButton() {
    /* Disabled until MentorDetail component is implemented
    this.props.mentors.map(mentor =>
      <MentorDetail mentor={mentor} />)
    */
  }

  menteeButton() {
    /* Disabled until MenteeDetail component is implemented
    this.props.mentees.map(mentee =>
      <MenteeDetail mentee={mentee} />)
    */
  }

  renderMentor(){

      return (this.props.user.profile.mentor.map(user =>
              <MentorDetail key={user._id} user={user} />))

  }



  render() {
    return (
      <div>
          <div className="btn-group" data-toggle="buttons">
              <label className="btn btn-primary active">
                  <input type="radio" name="options" autocomplete="off" />Mentees
              </label>
              <label className="btn btn-primary">
                  <input  type="radio" ref="c_mentor" name="options" checked/>Mentors
              </label>
          </div>
          <div className="mentor-list">

              { this.renderMentor()}

          </div>
      </div>
    ); //end return()
  } //end render()
}

export default createContainer(() =>{
    /* user email, username, and profile are published by default, we don't have to set
     up subscription. */



    //return an object, Whatever we return will be send to userList as props
    return { user: Meteor.user()};

}, MentorList);