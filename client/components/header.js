import React, {Component} from 'react';
import Accounts from './accounts';
import {Link} from 'react-router';


class Header extends Component {


    render() {
        return (

            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <Link to="home" href="localhost:3000/home" className="navbar-left">
                        <img id="logo" src="meerkat.png" />
                    </Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="home" href="localhost:3000/home">Home</Link>
                    </li>
                    <li>
                        <Link to="about" href="localhost:3000/about">About Us</Link>
                    </li>
                    <li className="dropdown">
                        <Link to="registration" href="localhost:3000/registration">Sign Up</Link>
                    </li>
                    <li><Link to="login" href="localhost:3000/login">Login</Link></li>
                </ul>
            </nav>


        );
    }
}

export default Header;
