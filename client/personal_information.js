import React from "react";

//we can move this later

class PersonalInformation extends React.Component {



    handleSubmit(event) {
        event.preventDefault();



    }



    render () {

        return (

            <div>
                <h3>Personal Information</h3>
                <form >
                    <p>
                        <label>First Name: </label>
                        <input ref="fName" required="required" type="text" placeholder="John"/>
                    </p>

                    <p>
                        <label >Last Name: </label>
                        <input ref="Lname" required="required" type="text" placeholder="Doe"/>
                    </p>

                    <p>
                        <label >Username: </label>
                        <input ref="Username" required="required" type="text" placeholder="mysuperusername690"/>
                    </p>

                    <p>
                        <label>E-mail: </label>
                        <input ref="email" required="required" type="email" placeholder="mysupermail@mail.com"/>
                    </p>

                    <p>
                        <label>Password: </label>
                        <input ref="password" required="required" type="password" placeholder="eg. X8df!90EO"/>
                    </p>

                    <p>
                        <label>Confirm your password: </label>
                        <input ref="conPassword" required="required" type="password" placeholder="eg. X8df!90EO"/>
                    </p>

                    <p>
                        <label>Date of Birth: </label>
                        <input ref="DOB" required="required" type="date"/>
                    </p>
                    <p>
                        <label>Address: </label>
                        <select>
                            <option value="us">United States</option>
                        </select> &nbsp;
                        <select>
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
                        <input required="required" type="text" placeholder="City"/> &nbsp;
                    </p>
                    <p>
                        <label>Ethnicity: </label>
                        <select>
                            <option value="white">White/Caucasian</option>
                            <option value="hispanic">Hispanic/Latino</option>
                            <option value="black">Black/African American</option>
                            <option value="asian">Asian</option>
                            <option value="notToSay">Prefer not to say</option>
                            <option value="other">Other</option>
                        </select>
                    </p>
                    <p>
                        <label>University Attended: </label>
                        <input ref="university" required="required" type="text" placeholder="Harvard"/>


                    </p>
                    <p>
                        <label>Number of times available to meet: </label>
                        <input ref="timesAvail" placeholder="3 times a week"/>
                    </p>
                    <p>
                        <label>Expectations of the program?</label>
                        <br/>
                        <textarea rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>
                    <p>
                        <label >Other languages that you know?</label>
                        <br/>
                        <textarea rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>
                    <p>
                        <label >Things that you like to do with other people?</label>
                        <br/>
                        <textarea rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>
                    <p>
                        <label >Why do you want to be a mentor?</label>
                        <br/>
                        <textarea rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>

                    <p>
                        <input type="submit" value="Next"/>
                    </p>

                </form>
            </div>

        );
    };


} // end of class file

export default PersonalInformation;