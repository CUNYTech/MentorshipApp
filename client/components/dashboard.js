import React from 'react';
import{Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data';
import MentorList from './mentor_list';


const Dashboard = (props) => {





    //const email = props.usersData[1]._id;

    function getUsername(){
        if(!props.listLoading)
            return props.thisUser.profile.username;
    else
        return "Please Login" ;}
    // function getEmail(){ if(!props.listLoading)  return props.usersData[1].emails[0].address; }

    function getEmail(){
        if(!props.listLoading && props.thisUser)
            return props.thisUser.emails[0].address;
        else
            return "Please Login" ;}

function getPic() {
        if(!props.listLoading && props.thisUser && props.thisUser.profile.displayPic != ' ')
            return props.thisUser.displayPic;
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
                    <div className = "user-list">
                        Username :  {getUsername()}
                        <div></div>Email : {getEmail()}
                    </div>
                </div>



                <div className="action-field">
                    <p>
                        <a href="">
                            Search
                        </a>
                    </p>

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
    )



}

export default createContainer(() =>{
//set up subscription


    var handle = Meteor.subscribe('users');

//return an object, Whatever we return will be send to userList as props


    return {usersData: Meteor.users.find({}).fetch()
        , listLoading : !handle.ready()
        , thisUser: Meteor.user()
    }
}, Dashboard);
