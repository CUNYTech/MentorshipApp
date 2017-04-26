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
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link className="navbar-brand" to="/home">
                                    <img id="logo" src="/meerkat2.png" />
                                </Link>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">

                                </ul>

                                <ul className="nav navbar-nav navbar-right">
                                    <li id="searchBox">
                                        {Meteor.userId() !== null &&
                                        <SearchResults/>}
                                        {Meteor.userId() == null &&
                                        <span id="space"> </span>}
                                    </li>
                                    <li>
                                        <Link to="/home" >HOME</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">ABOUT US</Link>
                                    </li>
                                    <li>
                                        {this.checkSignup()}
                                    </li>
                                    <li>
                                        {this.setLoginLogout()}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
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
