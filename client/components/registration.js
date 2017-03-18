import React        from "react";
import { Meteor }   from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Link }     from 'react-router';
import { Router }   from 'react-router';
import Welcome      from './welcome';

//we can move this later
export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = { passwordError: '', userError: '' };
    }

    handleSubmit(event) {
        event.preventDefault();

        var Router = require('react-router');

        const firstName = this.refs.t_fName.value;
        const lastName = this.refs.t_lName.value;
        const email = this.refs.t_email.value;
        const password = this.refs.t_password.value;
        const conPassword = this.refs.t_conPassword.value;

        //Checks whether both password entries match
        if(password != conPassword) {
            this.setState({ passwordError: 'Passwords do not match' });
        }
        else {
            this.setState({ passwordError: '' });
            var user = { email: email, password: password,
                         profile: { avatar: '', firstName: firstName, lastName: lastName }
                       }
            Accounts.createUser(user, (error) => {
              if (error) {
                this.setState({ userError: error.reason });
              }
              else {
                //console.log(Meteor.user());
                this.setState({ userError: '' });
                //route to confirmation page
                Router.browserHistory.push('/welcome');
              }
            }) //end Accounts.createUser()
        } // end else
    } //end handleSubmit

    //rendering Sign Up Page
    render () {
        return (
            <div className="form-group">
                <h2>Personal Information</h2>
                <form className="form-horizontal" onSubmit= {this.handleSubmit.bind(this)} >
                    <p>
                        <label>First Name </label>
                        <input ref="t_fName" className="form-control" type="text" required />
                    </p>
                    <p>
                        <label >Last Name </label>
                        <input ref="t_lName" className="form-control" type="text" required />
                    </p>
                    <p>
                        <label>E-mail </label>
                        <input ref="t_email" className="form-control" type="email" required />
                    </p>
                    <p>
                        <label>Password </label>
                        <input ref="t_password" className="form-control" type="password" required />
                    </p>
                    <p>
                        <label>Confirm your password </label>
                        <input ref="t_conPassword" className="form-control" type="password" required />
                    </p>
                    <div className="text-danger">{ this.state.passwordError }</div>
                    <p>
                        <input type="submit" value="Submit"/>
                    </p>
                    <div className="text-danger">{ this.state.userError }</div>
                </form>
            </div>
        ); //end return()
    }; //end render()
} // end of class
