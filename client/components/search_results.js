import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import { Link }             from 'react-router';
import { Accounts }         from 'meteor/accounts-base';
import MentorDetail         from './mentor_detail';
import MenteeDetail         from './mentee_detail';
import { Mentors }          from '../../imports/collections/mentors';
import { Mentees }          from '../../imports/collections/mentees';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {users:[], option: 'user'};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({option: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      const search = this.refs.searchBox.value;
      const option = this.state.option;

      if(option === 'user') {
        Meteor.call('searchUsers', search, (error, user) => {
          if(user) {
            this.setState({users: user});
          }
        });
      } //end if
      else if(option === 'mentor') {
        Meteor.call('searchMentors', search, (error, users) => {
          if(users) {
            this.setState({users: users});
          }
        });
      } //end else if
      else {
        Meteor.call('searchMentees', search, (error, users) => {
          if(users) {
            this.setState({users: users});
          }
        });
      } //end else
    } //end handleSubmit

    onAddMentor(user) {
      Meteor.call('mentors.add', user);
      Meteor.call('mentees.add', user);
    }

    renderList() {
      if(this.state.users[0] === null) {
        return <div> </div>;
      }
      return this.state.users.map(user => {
        const myMentor = this.props.mentors.find(mentor => mentor.mentorId === user._id);
        const myMentee = this.props.mentees.find(mentee => mentee.menteeId === user._id);
        return (
          <li className="list-group-item" key={user._id}>
            <img className="result-image" src={user.profile.avatar}/>
            <h2 id="username-result"><Link to={"/profile/"+user.username}>{user.profile.firstName}</Link></h2>
            {Meteor.userId() !== null && user._id !== Meteor.userId() && (!myMentor && !myMentee) &&
              <a onClick={() => this.onAddMentor(user)}>
                <img id="add-user" src="/add-user-icon.png"/>
              </a>
            }
          </li>
        );
      });
    }

    render() {
        return (
          <div>
            <div className="dropdown" id="searchBox-dashboard">
                <input type="search" ref="searchBox" className="form-control" onKeyUp={this.handleSubmit} placeholder="Search"/>

                <img className="dropdown-toggle" id="search-icon" src="/search-icon.png"/>

                {/*<div>*/}
                    {/*<div>*/}
                        {/*<select className="form-control" value={this.state.option} onChange={this.handleChange}>*/}
                            {/*<option value="user" defaultValue>User</option>*/}
                            {/*<option value="mentor">Mentor</option>*/}
                            {/*<option value="mentee">Mentee</option>*/}
                        {/*</select>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
            <div className="list-users">
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
          </div>
        ); //end return()
    } //end render()
}

export default createContainer(() =>{
  Meteor.subscribe('mentors');
  Meteor.subscribe('mentees');
  return { mentors: Mentors.find({}).fetch(), mentees: Mentees.find({}).fetch() };
}, SearchResults);
