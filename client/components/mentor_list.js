import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import MentorDetail         from './mentor_detail';
import MenteeDetail         from './mentee_detail';
import SearchMentorMentee   from './search_mentor_mentee';

class MentorList extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedOption:'mentor'}
  }

    renderMentor(){
        if( this.state.selectedOption=='mentor'){
            if(this.props.user.profile.mentor==null || this.props.user.profile.mentor == 'undefined')
                return (<div><br/><p>No mentors yet</p></div>);
            else
                return (this.props.user.profile.mentor.map(user =>
                    <MentorDetail key={user._id} user={user} />))

        }
        else {
           if(this.props.user.profile.mentee==null || this.props.user.profile.mentee == 'undefined')
                return (<div><br/><p>No mentees yet </p></div>);
           else
                return(this.props.user.profile.mentee.map(user =>
                    <MenteeDetail key={user._id} user={user} />))
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
          <div id="radio-buttons" className="radio">
              <label>
                  <button className="btn btn-default" onClick={this.handleOptionChange.bind(this)}>Mentees</button>
              </label>
              <label>
                  <button className="btn btn-default" onClick={this.handleOptionChange.bind(this)}>Mentors</button>
              </label>
              <SearchMentorMentee />
          </div>
          <div className="mentor-list">
            <div id="root">
            </div>
              {this.renderMentor()}
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
