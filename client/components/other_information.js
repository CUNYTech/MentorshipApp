import React from "react";

export default class OtherInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }


    handleSubmit(event) {
        event.preventDefault();


//background info

        const r_background= this.refs.background;
        const v_background = r_background.value;



//FavMovie

        const r_favMovie= this.refs.favMovie;
        const v_favMovie = r_favMovie.value;



//FavSubject

        const r_favSubject= this.refs.favSubject;
        const v_favSubject = r_favSubject.value;

//Person you admire

        const r_perAdmire= this.refs.perAdmire;
        const v_perAdmire = r_perAdmire.value;


//expectations

        const r_expectations= this.refs.expectations;
        const v_expectations = r_expectations.value;


//Hobbies

        const r_fName= this.refs.t_fName;
        const v_fName = r_fName.value;

//support

        const r_support= this.refs.support;
        const v_support = r_support.value;



    }


    render () {

        return (

            <div>
                <h3>Other Information</h3>
                <form className="OtherInfo" onSubmit= {this.handleSubmit.bind(this)} >

                    <p>
                        <label>Background info that may be useful for matching purposes?</label>
                        <br/>
                        <textarea ref="background" rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>
                    <p>
                        <label>Favorite subjects in school?</label>
                        <br/>
                        <textarea ref="favMovie" rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>

                    <p>
                        <label >Favorite subjects to read about?</label>
                        <br/>
                        <textarea ref="favSubjects" rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>
                    <p>
                        <label>Person that you admire?</label>
                        <br/>
                        <textarea ref="perAdmire" rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>
                    <p>
                        <label>Activities of interest?</label>
                        <br/>
                        <textarea ref="actInterest"  rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>
                    <p>
                        <label>Skills or interest that you can share with a mentee?</label>
                        <br/>
                        <textarea ref="skills" rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>
                    <p>
                        <label>What would you expect from a mentee?</label>
                        <br/>
                        <textarea ref="expectations" rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>
                    <p>
                        <label>Hobbies or specials skills?</label>
                        <br/>
                        <textarea ref="hobbies" rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>
                    <p>
                        <label>What support or resources would you need to be a successful mentor?</label>
                        <br/>
                        <textarea ref="support" rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>

                    <p>
                        <input type="submit" value="Next"/>
                    </p>


                </form>
            </div>

        );
    };

}// end of class
