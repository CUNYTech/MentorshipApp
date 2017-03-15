import React from 'react';
import { Accounts } from 'meteor/meteor'

export default class LoginPage extends React.Component{

    constructor(props) {
        super(props);

        this.state = { error: '' };
    }

    handleSubmit(event) {
        event.preventDefault();

        var Router = require('react-router');

        //email address

        const r_user = this.refs.usernameLogin;
        const v_user = r_user.value;

        //password

        const r_pass = this.refs.pass;
        const v_pass = r_pass.value;


        Meteor.loginWithPassword(v_user, v_pass, function(e){

                if(e) {

                    this.setState({error:'Email or Password are incorrect please try again'});
                     return false;
                }
                else {
                    this.setState({error:''});

                    Router.browserHistory.push('/dashboard');


                }



            }.bind(this));






    } //end handleSubmit





    // const LoginPage = () => {

    render() {

        return (
            <div className="col-md-4 col-md-offset-4">
                <h2>Login</h2>

                <form onSubmit= {this.handleSubmit.bind(this)} >
                    <p>
                        <label>Username: </label>
                        <input required="required" ref= "usernameLogin" className="form-control" type="text" placeholder="John@gmail.com"/>
                    </p>

                    <p>
                        <label >Password: </label>
                        <input required="required" ref="pass" className="form-control" type="password" placeholder="******"/>
                    </p>

                    <p>
                        <a href="#">Forgot password?</a>
                    </p>

                    <div className="col-md-4 col-md-offset-4">
                        <p>
                            <input type="submit" ref="user" value="Login"/>
                        </p>
                        <div className="text-danger">{this.state.error}</div>
                    </div>
                </form>
            </div>
        );

    }

}; //end of LogIn Page class










