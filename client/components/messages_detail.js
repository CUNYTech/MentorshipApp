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


    newMessage(){
        var element = <div>
            <label>To: </label>
            <input type="text" /><br/>
            <label>Subject: </label>
            <input type="text" /><br/>
            <label>Message: </label>
            <Textarea/>
            <input type="button" value="Send" onClick={this.sendMessage.bind(this)}/>
        </div>;

        ReactDOM.render(element, document.getElementById("newMessage"));

    }

    sendMessage(){

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
               <input type="button" value="New Message" onClick={this.newMessage.bind(this)}/><br/>
                <div id="newMessage">

                </div>
            </div>

        )};
}
    /*displayMessages(messages){
         return messages.map((message, id) => {(
            sentBy: this.userId;


         )}

    }*/

export default createContainer(() =>{
    // user email, username, and profile are published by default, we don't have to set
    // up subscription.

    let data = {};
    data.handle=Meteor.subscribe('messageList');
    data.messages = Messages.find({$or:[{'to._id':Meteor.userId()},{'fromuser':Meteor.userId()}]},{sort:{createdOn:-1}}).fetch();

    //return an object, Whatever we return will be send to userList as props
    return { user: Meteor.user(), data};

}, NewMessage);