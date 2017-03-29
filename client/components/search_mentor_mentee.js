import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import { Link }             from 'react-router';
import { Accounts }         from 'meteor/accounts-base';


class SearchMentorMentee extends Component {
    constructor(props) {
        super(props);
        this.state = { users:[] };
    }

    renderList(user) {
      return (
          <li className="list-group-item">
            <img src={user.profile.avatar} />
            <h3>Name: {user.profile.firstName}</h3>
          </li>
      );
    }

    handleSubmit(event) {
      event.preventDefault();
      const search = this.refs.searchBox.value;
      Meteor.call('searchMentorMentee', search, (error, users) => {
        if(users) {
          this.setState({ users: users});
        }
      });
    }

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
                <input type="search" ref="searchBox" className="form-control" onKeyUp={this.handleSubmit.bind(this)} placeholder="Enter a tag"/>
                <Link to="mainsearch" href="localhost:3000/mainsearch">
                    <img id="search-icon" src="search-icon.png"/>
                </Link>
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
    /* user email, username, and profile are published by default, we don't have to set
     up subscription. */

Meteor.subscribe('user');

    //return an object, Whatever we return will be send to userList as props
    return { user: Meteor.user()};

}, SearchMentorMentee);
