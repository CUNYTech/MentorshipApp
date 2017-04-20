import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { Mongo }    from 'meteor/mongo';
import { createContainer }  from 'meteor/react-meteor-data';
import MessagesLog from './messages_log';

export const Messages = new Mongo.Collection('message');

class Messaging extends Component {

    constructor(props){
        super(props)

    };

    renderMail() {
        if (this.props.data.messages == null || this.props.data.messages == 'undefined')
            return (<div><br/><p>No mail yet</p></div>);

    }



    render(){
        if (!this.props.user) {
            return <div className="row">
                <div className="col-md-4 col-md-offset-5">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none"/>
                    </svg>
                    <p>Loading...</p>
                </div>
            </div>;

        }

        return (

            <div>
                {this.renderMail()}

                <MessagesLog/>
            </div>

        )};
}

export default createContainer(() =>{
    // user email, username, and profile are published by default, we don't have to set
    // up subscription.

    let data = {};
    data.handle=Meteor.subscribe('messageList');
    data.messages = Messages.find({$or:[{'to._id':Meteor.userId()},{'fromuser':Meteor.userId()}]},{sort:{createdOn:-1}}).fetch();

    //return an object, Whatever we return will be send to userList as props
    return { user: Meteor.user(), data};

}, Messaging);
