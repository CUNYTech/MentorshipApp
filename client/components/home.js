import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

export default class Home extends React.Component {
    routeDashboard(){
        var Router = require('react-router');
        Router.browserHistory.push('/dashboard');
    }

    checkLogin() {
        if(Meteor.userId() == undefined || Meteor.userId() == null) {
          return (
            <div className="row">
              <div className="col-xs-6">
                <img src="meerkat.png"/>
              </div>
              <div className="col-xs-6">
                <h2>Welcome</h2>
                <p>
                  Obec is a community of mentors where you can find a mentor or be one.
                </p>
              </div>
            </div>
          )
        }
        else {
         this.routeDashboard();
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
