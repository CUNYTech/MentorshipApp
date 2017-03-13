import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        <button onClick={this.mentorButton.bind(this)}
          className="btn btn-primary">
          My Mentors
        </button>
        <button onClick={this.menteeButton.bind(this)}
          className="btn btn-primary">
          My Mentees
        </button>
      </div>
    ); //end return()
  } //end render()
}

export default MentorList;
