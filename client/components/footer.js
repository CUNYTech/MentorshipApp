import React, { Component } from 'react';
import { Link }             from 'react-router';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';

class Footer extends Component {

    render() {
        return (
            <div>
                <hr/>
                <div>
                    <ul>

                        <li>
                            <Link to="home" href="localhost:3000/home">HOME</Link>
                        </li>
                        <li>
                            <Link to="about" href="localhost:3000/about">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="about" href="localhost:3000/about">CAREERS</Link>
                        </li>
                        <li>
                            <Link to="about" href="localhost:3000/about">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Connect with us</h5>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <hr/>
                <p>	&copy; Obec 2017</p>
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
