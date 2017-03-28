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
        <div className="thumbnail">
            <img src={user.profile.avatar} />
            <div className="caption">
                <h3>Name: {user.profile.firstName}</h3>
            </div>
        </div>
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
          <div key={user._id}>
            <div>
                <img className="result-image" src={user.profile.avatar}/>
            </div>
            <div>
                <h2>{user.profile.firstName}</h2>
                <p>Email: {user.emails[0].address} </p>
            </div>
          </div>
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
            <div>
              {this.renderList()}
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
