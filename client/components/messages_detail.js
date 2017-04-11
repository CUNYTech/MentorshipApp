import React, { Component } from 'react';
import Textarea             from './textarea';
import ReactDOM             from 'react-dom';
import { Meteor }           from 'meteor/meteor'
import { Mongo }    from 'meteor/mongo';
import {Messages} from './messages'
import { createContainer }  from 'meteor/react-meteor-data';



class NewMessage extends Component {
    constructor(props){
        super(props)
    };

    sendMessage(){
        Meteor.call('sendMessage','W2KmLSJEfWitGkDz3', this.refs.message.value);
    }

    deleteMessage() {
        const { message } = this.props;
        Meteor.call('messages.remove', message._id)
    }
     editMessage() {
        this.setState({updateMessage: true});
    }

    render(){
        return (
            <div>
                <div>
                    <label>To: </label>
                    <input type="text" ref="to" className="form-control" /><br/>
                    <label>Message: </label>
                    <input type="text"  ref="message" className="form-control" />
                    <input type="button" value="Send" onClick={this.sendMessage.bind(this)}/>
                </div>
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

}, NewMessage);