import React, {Component} from 'react';
import {Link} from 'react-router';
import{Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data';


class Header extends Component {



    userLogout(){
        Meteor.logout();

    }


checkSignup(){

    if (Meteor.userId() == undefined || Meteor.userId() == null){
        return <Link to="registration" href="localhost:3000/registration">SIGN UP</Link>


    }
    else  {
        return <Link to="PROFILE" href="localhost:3000/profile">PROFILE</Link>

    }
}

    setLoginLogout(){
        if (Meteor.userId() == undefined || Meteor.userId() == null){
            return <Link to="login" href="localhost:3000/login">LOGIN</Link>


        }
        else  {
            return <Link to="home" href="localhost:3000/home" onClick={this.userLogout.bind(this)}>LOGOUT</Link>

        }
    }



    render() {
        return (
            <div className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <img id="logo" src="blank.png" />
                </div>

                <ul className="nav navbar-nav">
                    <li>
                        <img id="logo" className="navbar-header" src="meerkat2.png"/>

                    </li>

                    <li>
                        <img id="blank" src="blank.png"/>
                    </li>

                    <li>
                        <Link to="home" href="localhost:3000/home">HOME</Link>
                    </li>

                    <li>
                        <Link to="about" href="localhost:3000/about">ABOUT US</Link>
                    </li>

                    <li className="dropdown">
                        {this.checkSignup()}
                    </li>

                    <li>
                        {this.setLoginLogout()}
                    </li>
                    {console.log(this.props.thisUser)}

                </ul>
            </div>
        );
    }
}

export default createContainer(() =>{
//set up subscription


    var handle = Meteor.subscribe('users');

//return an object, Whatever we return will be send to userList as props


    return {usersData: Meteor.users.find({}).fetch()
        , listLoading : !handle.ready()
        , thisUser: Meteor.user()
    }
}, Header);
