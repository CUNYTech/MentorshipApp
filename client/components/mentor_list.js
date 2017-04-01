import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor';
import { createContainer }  from 'meteor/react-meteor-data';
import MentorDetail         from './mentor_detail';
import MenteeDetail         from './mentee_detail';
import { Mentors }          from '../../imports/collections/mentors';
import { Mentees }          from '../../imports/collections/mentees';

class MentorList extends Component {
  constructor(props) {
    super(props);
  }

  renderMentor(){
    if(this.props.mentors.length === 0) {
      return (<div><br/><p>No mentors yet</p></div>);
    }
    else {
      return (this.props.mentors.map(user =>
        <MentorDetail key={user._id} user={user} />));
    }
  }

  renderMentee() {
    if (this.props.mentees.length === 0) {
      return (<div><br/><p>No mentees yet </p></div>);
    }
    else {
      return (this.props.mentees.map(user =>
        <MenteeDetail key={user._id} user={user}/>));
    }
  }

  render() {
    return (
      <div>
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

export default createContainer(() => {
  Meteor.subscribe('mentors');
  Meteor.subscribe('mentees');
  return { mentors: Mentors.find({}).fetch(), mentees: Mentees.find({}).fetch() };
}, MentorList);
