import React        from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: '', resetError: '' };
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
                    this.setState({error:'Incorrect email or password. Please try again'});
                     return false;
                }
                else {
                    this.setState({error:''});
                    Router.browserHistory.push('/home');
                }
            }.bind(this));
    } //end handleSubmit

    forgotPass(event) {
      event.preventDefault();
      const options = {email: this.refs.email.value};
      Accounts.forgotPassword(options, function (error) {
        if(error) {
          this.setState({resetError: error.message});
        }
        else {
          this.setState({resetError: "Reset link has been sent to your email"});
        }
      }.bind(this));
    }

    render() {
        return (
            <div className="row">
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
                            <a href="#" data-toggle="collapse" data-target="#forgotpass">Forgot password?</a>
                        </p>
                        <div className="text-danger">{this.state.error}</div>
                        <div className="col-md-4 col-md-offset-4">
                            <p>
                                <input type="submit" ref="user" value="Login"/>
                            </p>
                        </div>
                    </form>
                    <form className="form-inline">
                      <div id="forgotpass" className="collapse">
                        <input ref="email" placeholder="Please enter your email" className="form-control" type="text" />
                        <button className="btn btn-primary" onClick={this.forgotPass.bind(this)}>Send</button>
                      </div>
                      <div className="text-danger">{this.state.resetError}</div>
                    </form>
                </div>
            </div>
        ); //end return()
    } //end render()
}; //end of LogIn Page class
