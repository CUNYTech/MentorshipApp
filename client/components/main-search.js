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
            <div id="search-page" className="row">
                <div className="col-md-4 col-md-offset-2" id="root"> </div>
                <div className="col-xs-6">
                    <SearchResults/>
                    <p>Filters:</p>
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
