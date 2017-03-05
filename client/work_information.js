import React from "react";

// class WorkInformation extends React.Component {

   //  handleSubmit(event) {
  //      alert('you have been alerted');
    //    event.preventDefault();
  //  }




    //render()  {


const WorkInformation = () => {


        return (

            <div>
                <h3>Work Information</h3>



                    <p>
                        <label >Occupation: </label>
                        <input ref="Occupation" type="text" placeholder="Programmer"/>
                    </p>
                    <p>
                        <label>Employer name: </label>
                        <input type="text" placeholder="Snap Inc."/>
                    </p>
                    <p>
                        <label>Title: </label>
                        <input placeholder="Senior Programmer"/>
                    </p>
                    <p>
                        <label>Length of employment: </label>
                        <input placeholder="15 years"/>
                    </p>
                    <p>
                        <label>Name of supervisor: </label>
                        <input placeholder="Jane Doe"/>
                    </p>
                    <p>
                        <label>Title: </label>
                        <input placeholder="VP of product"/>
                    </p>

                    <p>
                        <input type="submit" value="Next"/>
                    </p>


            </div>

        );
    };

//}


export default WorkInformation;