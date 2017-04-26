import React, { Component } from 'react';
import { Link }             from 'react-router';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';

class Footer extends Component {

    render() {
        return (
            <div className="row" id="footer">
                <div className="col-md-3">
                    {/*<ul>*/}
                        {/*<li>*/}
                            {/*<Link to="home" href="/home"><img id="logo-footer" src="/meerkat2.png" /></Link>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                </div>
                <div className="col-md-3">
                    <ul>
                        <li>
                            <Link to="home" href="/home">HOME</Link>
                        </li>
                        <li>
                            <Link to="about" href="/about">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="about" href="/about">CAREERS</Link>
                        </li>
                        <li>
                            <Link to="about" href="/about">CONTACT US</Link>
                        </li>
                        <br/>
                        <li>
                            &copy; Obec 2017
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li>
                            <Link to="" href="">Terms Of Use</Link>
                        </li>
                        <li>
                            <Link to="" href="">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="" href="">FAQ</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li id="connect">Connect with us</li>
                        <li><a href="https://github.com/CUNYTech/MentorshipApp"> <img id="github_icon" src="/github_icon.png" /></a></li>
                    </ul>
                </div>
            </div>
        ); //end return()
    } // end render()
} // end class Header

export default createContainer(() => {
    /* subscribe to users collection to see them on CTRL + M */
    Meteor.subscribe('users');

    //return an object, Whatever we return will be send to userList as props
    return { user: Meteor.user() };
}, Footer);
