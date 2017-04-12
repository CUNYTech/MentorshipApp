import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { Mongo }    from 'meteor/mongo';
import { Messages } from './messages'
import { createContainer }  from 'meteor/react-meteor-data';
import SearchResults        from './search_results';


class NewMessage extends Component {
    constructor(props){
        super(props)
    };

    sendMessage(){
        if (this.refs.to.value) {
            Meteor.call('sendMessage', this.refs.to.value, this.refs.message.value);
        }
    }

    deleteMessage() {
        const { message } = this.props;
        Meteor.call('messages.remove', message._id)
    }

     editMessage() {
        this.setState({updateMessage: true});
    }

    renderMessages() {
        return this.state.message.map(message => {
            return (
                <li className="list-group-item" key={message.to}>
                </li>
            );
        });
    }

    render(){
        return (
            <div className="row">
                <div className="col-xs-6" id="search-page">
                    <div id="search-div">
                        <SearchResults />
                        <input type="text" ref="to" className="form-control" placeholder="To.."/>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel-body">
                        <ul className="media-list">
                            {/*{this.renderMessages()}*/}
                        </ul>
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