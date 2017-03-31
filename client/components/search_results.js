import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import { Link }             from 'react-router';
import MentorDetail         from './mentor_detail';
import MenteeDetail         from './mentee_detail';
import { Accounts }         from 'meteor/accounts-base';

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

    renderList() {
      return this.state.users.map(user => {
        return (
          <li className="list-group-item" key={user._id}>
                <img className="result-image" src={user.profile.avatar}/>
                <h2 id="username-result">{user.profile.firstName}</h2>
          </li>
        );
      });
    }

    render() {
        return (
          <div>
            <div id="searchBox-dashboard">
                <input type="search" ref="searchBox" className="form-control" onKeyUp={this.handleSubmit} placeholder="Search"/>
                <Link to="mainsearch" href="localhost:3000/mainsearch">
                    <img id="search-icon" src="/search-icon.png"/>
                </Link>
                <select value={this.state.option} onChange={this.handleChange}>
                  <option value="user" defaultValue>User</option>
                  <option value="mentor">Mentor</option>
                  <option value="mentee">Mentee</option>
                </select>
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
Meteor.subscribe('user');
    //return an object, Whatever we return will be send to userList as props
    return { user: Meteor.user()};
}, SearchResults);
