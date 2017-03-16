import React from 'react';
import{Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data';
import MentorList from './mentor_list';

const Profile = (props) => {

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
        <div id="profile">
            <div className="col-sx-6">
                <img id="avatar" src={getPic()}/>
            </div>

            <div>
                <p>
                    {getUserBlurb()}
                </p>
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
