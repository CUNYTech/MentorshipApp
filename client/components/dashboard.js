import React               from 'react';
import { Meteor }          from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data';
import MentorList          from './mentor_list';

const Dashboard = (props) => {
    function getName() {
        if(!props.listLoading)
            return props.thisUser.profile.firstName + ' ' + props.thisUser.profile.lastName;
        else
            return "Undefined" ;
    }

    function getEmail() {
        if(!props.listLoading && props.thisUser)
            return props.thisUser.emails[0].address;
        else
            return "Please Login";
    }

    function getPic() {
        if(!props.listLoading && props.thisUser && props.thisUser.profile.avatar != '')
            return props.thisUser.avatar;
        else
            return  "default-user.png";
    }

    return (
        <div className="row">
            <div className="col-xs-6" id="addBorder">
                <div>
                    <img id="avatar" src={getPic()}/>
                </div>
                <div>
                    <div className = "action-field">
                        <p>Welcome, {getName()}</p>
                    </div>
                </div>
                <div className="action-field">
                    <a href="">
                        <p>Messages</p>
                    </a>
                    <a href="">
                        <p>Request</p>
                    </a>
                    <a href="">
                        <p>Notifications</p>
                    </a>
                </div>
            </div>
            <div className="col-xs-6">
                <MentorList />
            </div>
        </div>
    ) //end return()
} //end Dashboard

export default createContainer(() =>{
    //set up subscription
    var handle = Meteor.subscribe('users');

    //return an object, Whatever we return will be send to userList as props
    return {usersData: Meteor.users.find({}).fetch()
        , listLoading : !handle.ready()
        , thisUser: Meteor.user()
    }
}, Dashboard);
