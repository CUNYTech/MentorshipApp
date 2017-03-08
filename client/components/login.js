import React from 'react';
import { Accounts } from 'meteor/accounts-base'

export default class LoginPage extends React.Component{

    constructor(props) {
        super(props);

    }

    handleSubmit(event) {
        event.preventDefault();


        //email address

        const r_user = this.refs.usernameLogin;
        const v_user = r_user.value;

        //password

        const r_pass = this.refs.pass;
        const v_pass = r_pass.value;


Meteor.loginWithPassword(v_user, v_pass, function(e){

    if(e) { console.log("failed attempt"); return false; }

        console.log("logged in");


}

)





    } //end handleSubmit





    // const LoginPage = () => {

        render() {

            return (
            <div>
                <h3>Login</h3>
                <form login onSubmit= {this.handleSubmit.bind(this)} >
                    <p>
                        <label>Username: </label>
                        <input required="required" ref= "usernameLogin" type="text" placeholder="John@gmail.com"/>
                    </p>

                    <p>
                        <label >Password: </label>
                        <input required="required" ref="pass" type="text" placeholder="******"/>
                    </p>

                    <p>
                        <input type="submit" ref="user" value="Login"/>
                    </p>


                </form>


            </div>
            );

        }

}; //end of LogIn Page class










