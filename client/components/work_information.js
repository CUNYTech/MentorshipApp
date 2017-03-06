import React from "react";

export default class WorkInformation extends React.Component {
     constructor(props) {
         super(props);
         this.state = {};

     }




     handleSubmit(event) {
        event.preventDefault();

        //occupation

         const r_occupation= this.refs.occupation;
         const v_occupation = r_occupation.value;

         //Employer Name
         const r_empName= this.refs.empName;
         const v_empName = r_empName.value;

         //Title

         const r_title= this.refs.jobtitle;
         const v_title = r_title.value;

         //length of Employment

         const r_lenEmp= this.refs.lenEmp;
         const v_lenEmp = r_lenEmp.value;

         //Name of Supervisor

         const r_namSup= this.refs.namSup;
         const v_namSup = r_namSup.value;


console.log(v_occupation+v_empName+v_title+v_lenEmp+v_namSup);

     }




    render()  {


// const WorkInformation = () => {


        return (

            <div>
                <h3>Work Information</h3>

<form className= "workInfo" onSubmit= {this.handleSubmit.bind(this)}>


                    <p>
                        <label >Occupation: </label>
                        <input ref="occupation" type="text" placeholder="Programmer"/>
                    </p>
                    <p>
                        <label>Employer name: </label>
                        <input type="text" ref="empName" placeholder="Snap Inc."/>
                    </p>
                    <p>
                        <label>Title: </label>
                        <input ref="jobtitle" placeholder="Senior Programmer"/>
                    </p>
                    <p>
                        <label>Length of employment: </label>
                        <input ref="lenEmp" placeholder="15 years"/>
                    </p>
                    <p>
                        <label>Name of supervisor: </label>
                        <input ref="namSup" placeholder="Jane Doe"/>
                    </p>

                    <p>
                        <input type="submit" value="Next"/>
                    </p>
</form>

            </div>

        );
    };

}


