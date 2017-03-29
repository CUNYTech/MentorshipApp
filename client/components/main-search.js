import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import { Meteor }           from 'meteor/meteor';
import SearchResults        from './search_results';
import SearchMentorMentee   from './search_mentor_mentee';

class MainSearch extends Component {

    constructor(props){
        super(props)
    };

    render(){

        return (
            <div className="row">
                <SearchResults/>
                <div className="col-md-4 col-md-offset-2" id="root"> </div>
            </div>
        )};
}

export default MainSearch;
