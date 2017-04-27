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
                    <div className="row" id="community">
                          <h1>Obec is a community of mentors where you can find a mentor or be one.</h1>
                          <p>
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
