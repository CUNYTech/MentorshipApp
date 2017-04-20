import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { createContainer }  from 'meteor/react-meteor-data';
import { Advices }          from '../../imports/collections/advices';

/* this.props.advice refers to the advice object in Advices collection */
class AdviceDetail extends Component {

  onRemoveAdvice(advice) {
    Meteor.call("advices.remove", advice);
  }

  render() {
    if(this.props.loading) {
      return <div></div>;
    }
    else {
      return (
        <div>
          <h2>
            <span className="label label-info">{this.props.advice.message}</span>
          </h2>
          {Meteor.userId() === this.props.advice.ownerId &&
            <button className="btn btn-danger" onClick={() => this.onRemoveAdvice(this.props.advice)}>
              Delete
            </button>
          }
        </div>
      );
    }//end else
  }//end render()
};

export default createContainer((props) => {
  const loading = !Meteor.subscribe('users').ready();

  return { loading: loading };
}, AdviceDetail);
