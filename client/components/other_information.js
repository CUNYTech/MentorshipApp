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
        const r_hobbies= this.refs.hobbies;
        const v_hobbies = r_hobbies.value;

        //support
        const r_support= this.refs.support;
        const v_support = r_support.value;
    } //end handleSubmit()

    render () {
        return (
            <div>
                <h3>Other Information</h3>
                <form className="OtherInfo" onSubmit= {this.handleSubmit.bind(this)} >
                    <p>
                        <label>Background info that may be useful for matching purposes?</label>
                        <br/>
                        <textarea className="form-control" ref="background" rows="4" cols="50" placeholder="BLA BLA BLA...">
                    </textarea>
                    </p>
                    <p>
                        <label>Favorite subjects in school?</label>
                        <br/>
                        <textarea className="form-control" ref="favMovie" rows="4" cols="50" placeholder="BLA BLA BLA...">
                    </textarea>
                    </p>

                    <p>
                        <label >Favorite subjects to read about?</label>
                        <br/>
                        <textarea className="form-control" ref="favSubject" rows="4" cols="50" placeholder="BLA BLA BLA...">

                    </textarea>
                    </p>
                    <p>
                        <label>Person that you admire?</label>
                        <br/>
                        <textarea className="form-control" ref="perAdmire" rows="4" cols="50" placeholder="BLA BLA BLA...">
                    </textarea>
                    </p>
                    <p>
                        <label>Activities of interest?</label>
                        <br/>
                        <textarea className="form-control" ref="actInterest"  rows="4" cols="50" placeholder="BLA BLA BLA...">
                    </textarea>
                    </p>
                    <p>
                        <label>Skills or interest that you can share with a mentee?</label>
                        <br/>
                        <textarea className="form-control" ref="skills" rows="4" cols="50" placeholder="BLA BLA BLA...">
                    </textarea>
                    </p>
                    <p>
                        <label>What would you expect from a mentee?</label>
                        <br/>
                        <textarea className="form-control" ref="expectations" rows="4" cols="50" placeholder="BLA BLA BLA...">
                    </textarea>
                    </p>
                    <p>
                        <label>Hobbies or specials skills?</label>
                        <br/>
                        <textarea className="form-control" ref="hobbies" rows="4" cols="50" placeholder="BLA BLA BLA...">
                    </textarea>
                    </p>
                    <p>
                        <label>What support or resources would you need to be a successful mentor?</label>
                        <br/>
                        <textarea className="form-control" ref="support" rows="4" cols="50" placeholder="BLA BLA BLA...">
                    </textarea>
                    </p>
                    <p>
                        <input type="submit" value="Next"/>
                    </p>
                </form>
            </div>
        ); //end return()
    }; //end render()
} // end of class
