import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { Mongo }    from 'meteor/mongo';
import { Messages } from './messages'
import { createContainer }  from 'meteor/react-meteor-data';
import MessagesDetail from './messages_detail';
import ReactDOM from 'react-dom';
import SearchResults from './search_results';
import NewMessage from './new_message';


class MessagesLog extends Component {
    constructor(props){
        super(props);
        this.state = {usersList:[], dataToChild:"", newMessageInput:false, value:""};
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidUpdate(){
/*
        var tempArray =[];

        var done = false;

            this.props.data.messages.map(message => {
                if (tempArray.length == 0) {
                    if (message.fromuser != Meteor.userId()) {
                        tempArray.push(message.fromuser);
                    }
                    else {
                        tempArray.push(message.to)
                    }
                }
                else {
                    tempArray.map(user => {
                        if (user != message.fromuser) {
                            if (message.fromuser != Meteor.userId()) {
                                tempArray.push(message.fromuser);
                            }
                            else {
                                tempArray.push(message.to)
                            }
                        }
                    });
                }
            });


            tempArray.pop();

            console.log(tempArray);

this.setState({usersList:tempArray});

*/


    }

    getUsername(username){

        var name = Meteor.users.findOne({_id:username});
        if(name!==undefined){
            return (name.profile.avatar)
        }
    }

    getUsers() {



        var tempArray =[];
        this.props.data.messages.map(message => {
            if(tempArray.length==0){
                if(message.fromuser!= Meteor.userId()) {
                    tempArray.push(message.fromuser);
                }
                else if(message.fromuser==Meteor.userId()){
                    tempArray.push(message.to)

                }
            }
            else {
                tempArray.map(user => {
                    if (user != message.fromuser) {
                        if(message.fromuser!= Meteor.userId()) {
                            tempArray.push(message.fromuser);
                        }
                        else if(message.fromuser == Meteor.userId()){
                            tempArray.push(message.to)
                        }
                    }
                });
            }
        });

return (tempArray)

    }

    setUsersToState(userArray){
        this.setState({usersList:userArray});

    }

    displayMessageLog(userID){
        ReactDOM.unmountComponentAtNode(document.getElementById('newMessage'));
            this.setState({dataToChild:userID});
          var element= <MessagesDetail callback={userID}/>;
          ReactDOM.render(
            element,
            document.getElementById('root')
        );
    }

    renderMessages() {
        var tempArray = this.getUsers();

        if(tempArray.length!=0){
        return tempArray.map(user => {

            return (

                <li className="list-group-item" id="display-msg" key={user}>
                    <button  onClick={this.displayMessageLog.bind(this,user)}>
                        <img src={this.getUsername(user)}/>
                    </button>
                </li>
            );
        });
    }
    }

    newMessage(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        var element=<NewMessage/>;
///<input type="text" defaultValue={this.state.value} onChange={this.handleChange} />
        ReactDOM.render(
            element,
            document.getElementById('newMessage')
        );

    }

    setToUser(user) {
        this.setState({dataToChild:user});
    }

    newMessageAndLog(){


        /*
         this.newMessage();
         this.displayMessageLog(()=>{ var user = Meteor.users.findOne({username:this.state.value});
         console.log(user._id);
         return (user._id);
         });

        */
    }

    handleChange(event) {

        this.setState({value: event.target.value});

    }


    render(){
        return (
            <div className="row">
                <div className="col-xs-6">
                    <div className="panel-body">
                        <ul className="media-list">
                            <li className="list-group-item" id="display-msg"><input type="button" value="New Message" onClick={this.newMessage.bind(this)}/></li>
                            {this.renderMessages()}
                        </ul>
                    </div>

                </div>
                <div id="newMessage">

                </div>
                <div id="root"></div>

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

}, MessagesLog);