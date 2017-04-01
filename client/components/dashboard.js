import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { Mongo }    from 'meteor/mongo';
import { createContainer }  from 'meteor/react-meteor-data';
import MentorList           from './mentor_list';
import { Link }             from 'react-router';


class Dashboard extends Component {
    constructor(props){
        super(props)
    };

    getName() {
        console.log(this.props.allData);
        return this.props.user.profile.firstName + ' ' + this.props.user.profile.lastName;
    }

    getAvatar() {
        if(this.props.user.profile.avatar != '')
            return this.props.user.profile.avatar;
        else
            return  "default-user.png";
    }

    render() {
        if(!this.props.user) {
            return <div>Loading...</div>;
        }
        return (
            <div className="row">
              <div className="col-xs-6" id="addBorder">
                <div className="action-field">
                  <p><img id="avatar" src={this.getAvatar()}/></p>
                </div>
                <div>
                  <div className="action-field">
                    <p>Welcome, {this.getName()}</p>
                  </div>
                </div>
                <div className="action-field">
                  <Link to="/mainsearch">
                    <p>Search</p>
                  </Link>
                  <Link to="/messages" >
                    <p>Messages</p>
                  </Link>
                  <a href="#">
                    <p>Requests</p>
                  </a>
                  <a href="#">
                    <p>Notifications</p>
                  </a>
                </div>
              </div>
              <div className="col-xs-6">
                <MentorList />
              </div>
            </div>
        ); //end return()
    } // end render()
} //end Dashboard

export default createContainer(() =>{
    //return an object, Whatever we return will be send to userList as props
    Meteor.subscribe('users');
    var allData=Meteor.users.find({}).fetch();

    return { user: Meteor.user(), allData:allData};
}, Dashboard);
