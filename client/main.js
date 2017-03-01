import React from 'react';
import ReactDOM from 'react-dom';
import PersonalInformation from './personal_information';
import WorkInformation from './work_information';
import OtherInformation from './other_information';

const App = () =>{

    return(

        <div>
            <h1>Become a Mentor</h1>
            <PersonalInformation />
            <WorkInformation />
            <OtherInformation />
            <p>
                <input type="submit" value="Sign up" />
            </p>
            <p >
                Already a member ?
                <a href="#tologin"> Go and log in </a>
            </p>


        </div>

    );

};

Meteor.startup(()=>{

    ReactDOM.render(<App />, document.querySelector('.container'));

});


