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
            <div>
                <div id="root"></div>
            </div>
        )};
}

export default MainSearch;