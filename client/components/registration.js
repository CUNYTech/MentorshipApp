import React        from "react";
import { Meteor }   from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Welcome      from './welcome';

//we can move this later
export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = { passwordError: '', userError: '', mentorMenteeError:'', registerSucceeded: false };
    }

    handleSubmit(event) {
        event.preventDefault();

        const firstName = this.refs.t_fName.value;
        const lastName = this.refs.t_lName.value;
        const email = this.refs.t_email.value;
        const password = this.refs.t_password.value;
        const conPassword = this.refs.t_conPassword.value;
        const username = this.refs.t_username.value;

        //Checks whether both password entries match
        if(password != conPassword) {
            this.setState({ passwordError: 'Passwords do not match' });
        }
        else {
            this.setState({ passwordError: '' });

            var user = { username:username, email: email, password: password,
                profile: { avatar: '', firstName: firstName, lastName: lastName/*,  mentor:[Meteor.users.findOne({_id:"5GdcM36zgLG5kwB2F"}),
                    Meteor.users.findOne({_id:"MtsCh3taRxH87vm5Y"})], mentee:[Meteor.users.findOne({_id:"XkamGWKKC5adiN4Tu"}),
                    Meteor.users.findOne({_id:"EpfsxK4pi7uwKnXct"})] */}};

            Accounts.createUser(user, (error) => {
              if (error) {
                this.setState({ userError: error.reason });
              }
              else {
                Meteor.call('sendVerificationEmail');
                this.setState({ userError: '', registerSucceeded: true });
              }
            }); //end Accounts.createUser()
        } // end else
    } //end handleSubmit

    //rendering Sign Up Page
    render () {
      if(!this.state.registerSucceeded) {
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
                        <label >Username </label>
                        <input ref="t_username" className="form-control" type="text" required />
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
      }//end if
      else {
        return (
          <div><Welcome /></div>
        );
      }
    }; //end render()
} // end of class
