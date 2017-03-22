import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import MentorDetail from './mentor_detail';

class MentorList extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedOption:'mentor'}
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
        if( this.state.selectedOption=='mentor'){
            if(this.props.user.profile.mentor==null || this.props.user.profile.mentor == 'undefined')
                return (<p>No mentors yet</p>)
            else
            return (this.props.user.profile.mentor.map(user =>
                <MentorDetail key={user._id} user={user} />))

        }
        else {
           if(this.props.user.profile.mentee==null || this.props.user.profile.mentee == 'undefined')
            return (<p>No mentees yet</p>)
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
          <div className="btn-group">
              <label className="btn btn-primary" data-toggle="buttons">
                  <input type="radio" name="mentee" checked={this.state.selectedOption === 'mentee'}
                         onClick={this.handleOptionChange.bind(this)}/> Mentees
              </label>
              <label className="btn btn-primary active">
                  <input type="radio"  name="mentor"   checked={this.state.selectedOption === 'mentor'}
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