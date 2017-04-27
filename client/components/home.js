import React      from 'react';
import { Meteor } from 'meteor/meteor';
import Dashboard  from './dashboard';
import { Link }             from 'react-router';

export default class Home extends React.Component {
    checkLogin() {
        if(Meteor.loggingIn() || Meteor.user()) {
          return (<Dashboard />);
        }
        else {
          return (
                <div className="row">
                    <div className="row">
                        <div id="centering">
                            <img id="meerkat" src="/meerkat-hd.png"/>
                        </div>
                        <div className="row" id="home-page">
                            <h1>Be a Mentor</h1>
                        </div>
                        <p id="cent">
                            <Link id="started" to="/registration">
                                Get Started
                            </Link>
                        </p>
                    </div>
            </div>
          );
        }
    } // end checkLogin()

    render() {
      return (
        <div>
          {this.checkLogin()}
        </div>
      )
    }
} // end class
