import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import { Meteor }           from 'meteor/meteor';
import SearchResults        from './search_results';
import UserResults          from './user_results';

class MainSearch extends Component {

    constructor(props){
        super(props);
        this.state = {users:[], option: 'user'};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({option: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const search = this.refs.searchBox.value;
        const option = this.state.option;

        if(option === 'user') {
            Meteor.call('searchUsers', search, (error, user) => {
                if(user) {
                    this.setState({users: user});
                }
            });
        } //end if
        else if(option === 'mentor') {
            Meteor.call('searchMentors', search, (error, users) => {
                if(users) {
                    this.setState({users: users});
                }
            });
        } //end else if
        else {
            Meteor.call('searchMentees', search, (error, users) => {
                if(users) {
                    this.setState({users: users});
                }
            });
        }
        //end else
    } //end handleSubmit


    render(){

        return (
            <div className="row" id="mainsearch">
                <div className="col-xs-6" id="search-page">
                    <div id="search-div">
                        <input type="search" className="form-control" placeholder="Search"/>
                        <img className="dropdown-toggle" id="search-icon" src="/search-icon.png"/>
                    </div>
                    {/*<p className="bold">Contacts</p>*/}
                    {/*<ul id="list-filters">*/}
                        {/*<p><option className="">Mentors</option></p>*/}
                        {/*<p><option className="">Mentees</option></p>*/}
                    {/*</ul>*/}
                    <p className="bold">Search By</p>
                    <div>
                    <div>
                        <select className="form-control" value={this.state.option} onChange={this.handleChange}>
                            <option value="user" defaultValue>User</option>
                            <option value="mentor">Mentor</option>
                            <option value="mentee">Mentee</option>
                    </select>
                    </div>
                    </div>
                </div>
                <div className="col-xs-6">
                    <UserResults tags = {this.props.params.tag} role = {this.props.params.role} />
                </div>
            </div>
        )};
}

export default MainSearch;
