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
          <div className="btn-group" data-toggle="buttons">
              <label className="btn btn-primary active">
                  <input type="radio" name="options" autocomplete="off" checked/>Mentees
              </label>
              <label className="btn btn-primary">
                  <input type="radio" name="options" autocomplete="off"/>Mentors
              </label>
          </div>
      </div>
    ); //end return()
  } //end render()
}

export default MentorList;
