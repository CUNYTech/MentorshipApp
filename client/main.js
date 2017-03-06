import React from "react";
import ReactDOM from "react-dom";
import PersonalInformation from "./components/personal_information";
import WorkInformation from "./components/work_information";
import OtherInformation from "./components/other_information";

class App extends React.Component{

    handleSubmit(event) {
        event.preventDefault();



    }




    render() {

        return (

            <div>
                <h1>Become a Mentor</h1>


                    <PersonalInformation />
                    <WorkInformation />
                    <OtherInformation />



                    <p>
                        <input type="submit" value="Sign up"/>
                    </p>



                <p >
                    Already a member ?
                    <a href="#tologin"> Go and log in </a>
                </p>


            </div>

        );

    };
}// end of class App


Meteor.startup(()=>{

    ReactDOM.render(<App />, document.querySelector('.container'));

});


