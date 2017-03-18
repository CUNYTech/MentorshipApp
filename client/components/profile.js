import React                from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';

const Profile = (props) => {

    function getName() {
        if(!props.listLoading)
            return props.thisUser.profile.firstName + ' ' + props.thisUser.profile.lastName;
        else
            return "Undefined" ;
    }

    function getPic() {
        if(!props.listLoading && props.thisUser && props.thisUser.profile.avatar != '')
            return props.thisUser.avatar;
        else
            return  "default-user.png";
    }

    return (
            <div className="col-md-4 col-md-offset-4" id="profile">
                <div>
                    <img id="profile-pic" className="col-md-4 col-md-offset-4" src={getPic()}/>
                </div>
                <div id="action-field2" className="col-md-4 col-md-offset-4" >
                    <p>{getName()}</p>
                </div>
            </div>
    );
}; // end const Profile

export default createContainer(() => {

    //set up subscription
    var handle = Meteor.subscribe('users');

    //return an object, Whatever we return will be send to userList as props
    return {usersData: Meteor.users.find({}).fetch()
        , listLoading : !handle.ready()
        , thisUser: Meteor.user()
    }
}, Profile);
