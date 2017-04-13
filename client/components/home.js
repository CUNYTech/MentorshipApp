import React      from 'react';
import { Meteor } from 'meteor/meteor';
import Dashboard  from './dashboard';

export default class Home extends React.Component {
    checkLogin() {
        if(Meteor.loggingIn() || Meteor.user()) {
          return (<Dashboard />);
        }
        else {
          return (
            <div className="row">
              <div className="row">
                <img src="/home-page.png" id="home-page"/>
              </div>
              <div className="row">
                <h2>Welcome</h2>
                <p>
                  Obec is a community of mentors where you can find a mentor or be one.
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
