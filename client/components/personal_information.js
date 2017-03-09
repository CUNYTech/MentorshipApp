import React from "react";
import {Meteor} from 'meteor/meteor'
import {Accounts} from 'meteor/accounts-base'
import{Link} from 'react-router';
//we can move this later

export default class PersonalInformation extends React.Component {

    constructor(props) {
        super(props);

    }

    handleSubmit(event) {
        event.preventDefault();

        //First Name
        const r_fName= this.refs.t_fName;
        const v_fName = r_fName.value;

        //Last Name
        const r_lName= this.refs.t_lName;
        const v_lName = r_lName.value;

        //Username
        const r_username= this.refs.t_username;
        const v_username = r_username.value;

        //email address
        const r_email= this.refs.t_email;
        const v_email = r_email.value;

        //password
        const r_password= this.refs.t_password;
        const v_password = r_password.value;

        //Confirm password
        const r_conPassword= this.refs.t_conPassword;
        const v_conPassword = r_conPassword.value;

        //Checks whether both password entries match
        if(v_password!=v_conPassword) {
            alert("Password's do not match");
        }

        else {

            var users = {email: v_email, password: v_password, profile: {displayPic: ' ', username: v_username}};


            Accounts.createUser(users, function (e) {

                //route to confirmation page

                //error
                if (e) {
                    alert("not working");
                }

                else {
                    alert("success");
                    console.log(Meteor.user().username);
                }


            })


        } // end of else



    } //end of handleSubmit


    //rendering Sign Up Page
    render () {

        return (

            <div className="form-group">
                <h3>Personal Information</h3>
                <form className="form-horizontal" onSubmit= {this.handleSubmit.bind(this)} >
                    <p>
                        <label>First Name: </label>
                        <input ref="t_fName" className="form-control" type="text" placeholder="John"/>
                    </p>

                    <p>
                        <label >Last Name: </label>
                        <input ref="t_lName" className="form-control" type="text" placeholder="Doe"/>
                    </p>

                    <p>
                        <label >Username: </label>
                        <input ref="t_username" className="form-control" type="text" placeholder="mysuperusername690"/>
                    </p>

                    <p>
                        <label>E-mail: </label>
                        <input ref="t_email" className="form-control" type="email" placeholder="mysupermail@mail.com"/>
                    </p>

                    <p>
                        <label>Password: </label>
                        <input ref="t_password" className="form-control" type="password" placeholder="eg. X8df!90EO"/>
                    </p>

                    <p>
                        <label>Confirm your password: </label>
                        <input ref="t_conPassword" className="form-control" type="password" placeholder="eg. X8df!90EO"/>
                    </p>

                    <p>
                        <label>Date of Birth: </label>
                        <input ref="DOB" className="form-control" type="date"/>
                    </p>
                    <p>
                        <label>Address: </label>
                        <select className="form-control">
                            <option value="us">United States</option>
                        </select> &nbsp;
                        <select className="form-control">
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>             &nbsp;
                        <input  type="text" className="form-control" placeholder="City"/> &nbsp;
                    </p>


                    <p>
                            
                    <Link id="submitButton"to="welcome" href="localhost:3000/welcome/">Submit</Link></p>

            

                </form>
            </div>

        );
    };


} // end of class file

