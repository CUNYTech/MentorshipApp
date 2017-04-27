import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { Mongo }    from 'meteor/mongo';
import { Messages } from './messages'
import { createContainer }  from 'meteor/react-meteor-data';
import SearchResults        from './search_results';
import ReactDOM from 'react-dom'


class NewMessage extends Component {
    constructor(props){
        super(props)
    };

    getUsername(username){

        //   var name =  Meteor.call('returnUsername',username);
        var name = Meteor.users.findOne({_id:username});

        if(name!==undefined){

            if(name.username == this.props.user.username){

                return('Me')
            }
            return (name.profile.firstName)

        }


    }


    sendMessage(){

        Meteor.call('sendNewMessage', this.refs.to.value, this.refs.message.value);
        this.refs.message.value='';
    }

    deleteMessage() {
        const { message } = this.props;
        Meteor.call('messages.remove', message._id)
    }

    editMessage() {
        this.setState({updateMessage: true});
    }



    renderMessages(userId) {
        var fromUser = [];
        this.props.data.messages.map(message => {
            if(message.fromuser==userId){
                fromUser.push(message)
            }
            if(message.fromuser==Meteor.userId()&&message.to==userId){
                fromUser.push(message)
            }

        });

        return (fromUser.map(message => {
            return( <p>{this.getUsername(message.fromuser)}: {message.message}</p>)


        }))
    }

    displayData(){
        console.log(this.props.data.messages)

    }
    render(){
        return (
            <div className="row">

                <div className="col-xs-6">
                    <div className="panel-body">
                        <div>
                            <input type="text" className="form-control" ref="to" placeholder="To"/>
                            {/*<input type="button" className="form-control" value="Cancel"/>*/}
                        </div>
                    </div>
                    <div className="panel-footer">
                        <div className="input-group">
                            <input type="text" ref="message" name="text" className="form-control" placeholder="Enter Message" />
                            <span className="input-group-btn">
                               <button className="btn btn-info" type="submit" onClick={this.sendMessage.bind(this)}>SEND</button>
                             </span>
                        </div>
                    </div>
                </div>
                <div  id="messageList"></div>
            </div>

        )};
}

export default createContainer(() =>{
    // user email, username, and profile are published by default, we don't have to set
    // up subscription.

    let data = {};
    data.handle=Meteor.subscribe('messageList');
    data.messages = Messages.find({$or:[{'to':Meteor.userId()},{'fromuser':Meteor.userId()}]},{sort:{createdOn:-1}}).fetch();

    //return an object, Whatever we return will be send to userList as props
    return { user: Meteor.user(), data};

}, NewMessage);