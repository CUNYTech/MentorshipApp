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
            return <Link to="/registration" >SIGN UP</Link>
        }
        else {
            const username = this.props.user.username;
            return <Link to={"/profile/"+username}>PROFILE</Link>
        }
    }

    setLoginLogout() {
        if (!this.props.user) {
            return <Link to="/login" >LOGIN</Link>
        }
        else  {
            return <Link to="/login" onClick={this.userLogout.bind(this)}>LOGOUT</Link>
        }
    }

    render() {
        return (
            <div className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <Link to="/home" ><img id="logo" src="/meerkat2.png" /></Link>
                </div>
                <ul className="nav navbar-nav">
                    <li id="searchBox">
                        <SearchResults/>
                    </li>
                    <li>
                        <Link to="/home" >HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT US</Link>
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
