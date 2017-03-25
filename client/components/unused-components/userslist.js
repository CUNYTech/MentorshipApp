/*
import React, { Component } from 'react';
import { createContainer }  from 'meteor/react-meteor-data';
import { Userz }            from '../../imports/collections/users';
import Dashboard            from './dashboard';

const PER_PAGE = 20;

class UsersList extends Component {
  componentWillMount() {
    this.page = 1;
  }

  handleButtonClick() {
    Meteor.subscribe('userz', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    // props.userz => an array of employee objects
    return (
      <div>
        <div className="user-list">
          {this.props.userz.map(user =>
            <Dashboard key={user._id} user={user} />
          )}
        </div>
        <button onClick={this.handleButtonClick.bind(this)}
          className="btn btn-primary">
          Load More...
        </button>
      </div>
    );
  }
};

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('userz', PER_PAGE);

  // return an object.  Whatever we return will be sent to EmployeeList
  // as props
  return { userz: Userz.find({}).fetch() };
}, UsersList);
*/
