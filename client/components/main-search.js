import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import { Meteor }           from 'meteor/meteor';
import SearchResults        from './search_results';

class MainSearch extends Component {

    constructor(props){
        super(props)
    };

    render(){

        return (
            <div className="row">
                <div className="col-xs-6" id="search-page">
                    <div id="search-div">
                        <SearchResults/>
                    </div>
                    <p className="bold">Contacts</p>
                    <ul id="list-filters">
                        <p><option className="">Mentors</option></p>
                        <p><option className="">Mentees</option></p>
                    </ul>
                    <p className="bold">Search By</p>
                    <ul id="list-filters">
                        <p><option className="">Users</option></p>
                        <p><option className="">Tags</option></p>
                    </ul>
                </div>
                <div className="col-xs-6">

                </div>
            </div>
        )};
}

export default MainSearch;
