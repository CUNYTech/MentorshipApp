import React from 'react';
import {Router} from 'react-router';
import Dashboard from './dashboard';


export default class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }

    goButton(event) {
        event.preventDefault();

        var Router = require('react-router');

        Router.browserHistory.push('/dashboard');
    }

    render () {

        return (
            <div className="row">
                <div className="col-xs-6">
                    <img src="meerkat.png"/>
                </div>
                <div className="col-xs-6">
                    <h2>Welcome Aboard!</h2>
                    <p>
                        You have succesfully signed up. We are happy to have you here. To explore more and
                        get involved with Opec, login with your email and password.
                    </p>

                    <p>
                        <button onClick={this.goButton.bind(this)}
                                className="btn-default">Go</button>
                    </p>

                </div>
            </div>

        );
    };
}