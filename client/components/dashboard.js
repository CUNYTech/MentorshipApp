import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { Mongo }            from 'meteor/mongo';
import { createContainer }  from 'meteor/react-meteor-data';
import MentorList           from './mentor_list';
import { Mentees }          from '../../imports/collections/mentees';
import { Link }             from 'react-router';


class Dashboard extends Component {
    constructor(props){
        super(props)
    };

    getName() {
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
            return <div className="row"> /* Loading animated spining wheel */
                <div className="col-md-4 col-md-offset-5">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none"/>
                    </svg>
                    <p>Loading...</p>
                </div>
            </div>;
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
                  <Link to="/notifications">
                    <p>Notifications <span className="badge">{this.props.numOfPendingMentees}</span></p>
                  </Link>
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
    Meteor.subscribe('mentees');
    Meteor.subscribe('users');
    var allData=Meteor.users.find({}).fetch();
    return { user: Meteor.user(),
             allData: allData,
             numOfPendingMentees: Mentees.find({ status: "pending"}).count()
           };
}, Dashboard);
