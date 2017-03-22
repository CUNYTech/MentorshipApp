import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import MentorDetail from './mentor_detail';

class MentorList extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedOption:'mentor'}
  }

    renderMentor(){
        if( this.state.selectedOption=='mentor'){
            if(this.props.user.profile.mentor==null || this.props.user.profile.mentor == 'undefined')
                return (<div><p>No mentors yet</p></div>);
            else
            return (this.props.user.profile.mentor.map(user =>
                <MentorDetail key={user._id} user={user} />))

        }
        else {
           if(this.props.user.profile.mentee==null || this.props.user.profile.mentee == 'undefined')
            return (<p>No mentees yet</p>);
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

        else if (this.state.selectedOption==='mentee'){
            this.setState({
                selectedOption:'mentor'
            });}
}


  render() {
    return (
      <div>
          <div>
              <label className="radio-input">
                  <input type="radio" name="mentee" defaultChecked={this.state.selectedOption === 'mentee'}
                         onClick={this.handleOptionChange.bind(this)}/> Mentees
              </label>
              <label className="radio-input">
                  <input type="radio"  name="mentor" defaultChecked={this.state.selectedOption === 'mentor'}
                         onClick={this.handleOptionChange.bind(this)}/> Mentors
              </label>

          </div>
          <div className="mentor-list">
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