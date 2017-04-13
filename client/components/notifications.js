import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor';
import { createContainer }  from 'meteor/react-meteor-data';
import { Mentors }          from '../../imports/collections/mentors';
import { Mentees }          from '../../imports/collections/mentees';
import { Link }             from 'react-router';

class Notifs extends Component {
	render() {
		return(
			<div>
				{this.props.numOfPendingMentees === 0 ? (
					<h3>No notifications</h3>
				):
					<h3>You have {this.props.numOfPendingMentees} mentees requests</h3>
				}
			</div>
		);
	}
}

export default createContainer(() =>{
	Meteor.subscribe('mentees');
  return { numOfPendingMentees: Mentees.find({ status: "pending"}).count() };
}, Notifs);
