import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import MentorDetail from './mentor_detail';
import MenteeDetail from './mentee_detail';
import { Accounts } from 'meteor/accounts-base';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {user:[]}

    }

    handleSubmit(event){
    event.preventDefault();
    const search = this.refs.searchBox.value;


            var result = Meteor.call('find_by_username', search, function find_by_username_callback(error,user){
                console.log(user.username);
                const element = <p>First name:{user.profile.firstName}   email:{user.emails[0].address}</p>;
                ReactDOM.render(
                    element,
                    document.getElementById('root')
                );

            });



        }




    render() {
        return (
            <div>
                <form>
                <input type="text" ref="searchBox"/>
                <input type="button" value="Search" onClick={this.handleSubmit.bind(this)}/>
                </form>
                <div id="root">

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

}, SearchResults);