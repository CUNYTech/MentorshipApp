import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { Mongo }    from 'meteor/mongo';
import { createContainer }  from 'meteor/react-meteor-data';
import NewMessage from './messages_detail';

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
            return <div>Loading...</div>;

        }

        return (

            <div>
                {this.renderMail()}
                <NewMessage />
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
