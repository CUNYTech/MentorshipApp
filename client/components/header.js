import React, {Component} from 'react';
import Accounts from './accounts';
import {Link} from 'react-router';


class Header extends Component {


    render() {
        return (

            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">Obec</a>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="home" href="localhost:3000/home">Home</Link>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">Sign Up <b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><Link to="registration" href="localhost:3000/registration">As a mentor</Link></li>
                            <li><a href="#">As a mentee</a></li>
                        </ul>
                    </li>
                    <li><Link to="login" href="localhost:3000/login">Login</Link></li>
                </ul>
            </nav>


        );
    }
}

export default Header;
