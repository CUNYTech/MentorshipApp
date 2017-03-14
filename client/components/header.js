import React, {Component} from 'react';
import {Link} from 'react-router';


class Header extends Component {

    userLogout(){
        Meteor.logout();

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
                        <Link to="registration" href="localhost:3000/registration">SIGN UP</Link>
                    </li>

                    <li><Link to="login" href="localhost:3000/login">LOGIN</Link></li>

                    <li><a  href="#" onClick={this.userLogout.bind(this)}>LOGOUT</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
