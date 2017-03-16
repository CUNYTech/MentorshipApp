import React from 'react';
import{Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data';

const Profile = (props) => {

    function getUsername() {
        if(!props.listLoading)
            return props.thisUser.profile.username;
        else
            return "Please Login" ;
    }

    function getName() {
        if(!props.listLoading)
            return props.thisUser.profile.firstname + ' ' + props.thisUser.profile.lastname;
        else
            return "Undefined" ;
    }

    function getUserBlurb()  {
        if(!props.listLoading && props.thisUser.profile.blurb)
            return props.thisUser.profile.blurb;
        else
            return "Empty";
    }

    function getPic() {
        if(!props.listLoading && props.thisUser && props.thisUser.profile.displayPic != ' ')
            return props.thisUser.displayPic;
        else
            return  "default-user.png";
    }

    return (
        <div className="row">
            <div id="profile">
                <img id="profile-pic" src={getPic()}/>
            </div>

            <div className="action-field">
                <p>{getName()}</p>
                <p>{getUsername()}</p>
                <p>{getUserBlurb()}</p>

            </div>

        </div>

    );
};

export default createContainer(() =>{
    //set up subscription

    var handle = Meteor.subscribe('users');

    //return an object, Whatever we return will be send to userList as props

    return {usersData: Meteor.users.find({}).fetch()
        , listLoading : !handle.ready()
        , thisUser: Meteor.user()
    }
}, Profile);
