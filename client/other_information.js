import React from "react";

class OtherInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }


    handleSubmit(event) {
        event.preventDefault();
console.log(this.refs.background.value);

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

export default OtherInformation;