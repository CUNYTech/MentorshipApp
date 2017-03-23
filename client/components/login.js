import React        from 'react';
import { Accounts } from 'meteor/meteor';

export default class LoginPage extends React.Component {
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
                    this.setState({error:'Incorrect email or password. Please try again'});
                     return false;
                }
                else {
                    this.setState({error:''});
                    Router.browserHistory.push('/dashboard');
                }
            }.bind(this));
    } //end handleSubmit

    forgotPassword(event) {
      event.preventDefault();
      const email = this.refs.email.value;
      Accounts.forgotPassword(email);
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
                        <form className="form-inline">
                          <div id="forgotpass" className="collapse">
                            <label>Email: </label>
                            <input ref="email" className="form-control" type="text" />
                            <button className="btn btn-primary" onClick={this.forgotPassword.bind(this)}>Send</button>
                          </div>
                        </form>
                        <div className="col-md-4 col-md-offset-4">
                            <p>
                                <input type="submit" ref="user" value="Login"/>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        ); //end return()
    } //end render()
}; //end of LogIn Page class

/* Accounts.onResetPasswordLink is the function called when user click on the link
   in their email.
var done = function() {
  console.log("Succeeded in changing password");
}

Accounts.onResetPasswordLink((token, done) => {
  // Display the password reset UI, get the new password...
  const newPassword = "01234";
  Accounts.resetPassword(token, newPassword, (err) => {
    if (err) {
      // Display error
    } else {
      // Resume normal operation
      this.done();
    }
  });
});
*/
