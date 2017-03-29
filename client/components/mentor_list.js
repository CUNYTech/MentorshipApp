import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import MentorDetail         from './mentor_detail';
import MenteeDetail         from './mentee_detail';
import SearchMentorMentee   from './search_mentor_mentee';

class MentorList extends Component {
  constructor(props) {
    super(props);
  }

    renderMentor(){
        if(this.props.user.profile.mentor == null || this.props.user.profile.mentor == 'undefined') {
            return (<div><br/><p>No mentors yet</p></div>);
        }
        else {
            return (this.props.user.profile.mentor.map(user =>
                <MentorDetail key={user._id} user={user}/>));
        }
    }

    renderMentee() {
        if (this.props.user.profile.mentee == null || this.props.user.profile.mentee == 'undefined') {
            return (<div><br/><p>No mentees yet </p></div>);
        }
        else {
            return (this.props.user.profile.mentee.map(user =>
                <MenteeDetail key={user._id} user={user}/>));
        }
    }

    handleOptionChange () {
        if (this.state.selectedOption==='mentor'){
            this.setState({
                selectedOption:'mentee'
        });}

        else {
            this.setState({
                selectedOption:'mentor'
            });}
}


  render() {
    return (
      <div>
          <div className="radio">
              <SearchMentorMentee />
          </div>
          <div className="row">
              <div id="render-mentor">
                  <p>My Mentors</p>
                  <hr id="separation"/>
              </div>
              <div className="mentor-list">
                  {this.renderMentor()}
              </div>
              <div id="render-mentor">
                  <p>My Mentees</p>
                  <hr id="separation"/>
              </div>
              <div className="mentor-list">
                  {this.renderMentee()}
              </div>
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
