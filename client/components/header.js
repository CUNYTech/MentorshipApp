import React, { Component } from 'react';
import { Link }             from 'react-router';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import SearchResults        from './search_results';

class Header extends Component {
    userLogout() {
        Meteor.logout();
    }

    checkSignup() {
        if (!this.props.user) {
            return <Link to="registration" href="localhost:3000/registration">SIGN UP</Link>
        }
        else {
            return <Link to="profile" href="localhost:3000/profile">PROFILE</Link>
        }
    }

    setLoginLogout() {
        if (!this.props.user) {
            return <Link to="login" href="localhost:3000/login">LOGIN</Link>
        }
        else  {
            return <Link to="login" href="localhost:3000/login" onClick={this.userLogout.bind(this)}>LOGOUT</Link>
        }
    }

    render() {
        return (
            <div className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <Link to="home" href="localhost:3000/home"><img id="logo" src="meerkat2.png" /></Link>
                </div>
                <ul className="nav navbar-nav">
                    <li id="searchBox">
                        <SearchResults/>
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
                </ul>
            </div>
        ); //end return()
    } // end render()
} // end class Header

export default createContainer(() => {
    /* subscribe to users collection to see them on CTRL + M */
    Meteor.subscribe('users');

    //return an object, Whatever we return will be send to userList as props
    return { user: Meteor.user() };
}, Header);
