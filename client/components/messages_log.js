import React, { Component } from 'react';
import { Meteor }           from 'meteor/meteor'
import { Mongo }    from 'meteor/mongo';
import { Messages } from './messages'
import { createContainer }  from 'meteor/react-meteor-data';
import NewMessage from './messages_detail';
import ReactDOM from 'react-dom';


class MessagesLog extends Component {
    constructor(props){
        super(props);
        this.state = {usersList:[], dataToChild:""};

    };

    getUsername(username){

        //   var name =  Meteor.call('returnUsername',username);
        var name = Meteor.users.findOne({_id:username});

        if(name!==undefined){

            return (name.profile.firstName + ' ' + name.profile.lastName)

        }


    }

    getUsers() {


        var tempArray =[];
        this.props.data.messages.map(message => {

            if(tempArray.length==0){
                if(message.fromuser!= Meteor.userId()) {
                    tempArray.push(message.fromuser);
                }
            }
            else {

                tempArray.map(user => {
                    if (user != message.fromuser) {
                        if(message.fromuser!= Meteor.userId()) {
                            tempArray.push(message.fromuser);
                        }

                    }
                });



            }



        });

        console.log(tempArray);
        this.setUsersToState(tempArray);

    }


    setUsersToState(userArray){
        this.setState({usersList:userArray});
console.log('done')

    }


    displayMessageLog(userID){
            this.setState({dataToChild:userID});

          var element= <NewMessage callback={userID}/>;
          ReactDOM.render(
            element,
            document.getElementById('root')
        );


    }


    renderMessages() {
        if(this.state.usersList.length!=0){
        return this.state.usersList.map(user => {

            return (



                <li className="list-group-item" id="display-msg" key={user}>
                    <input type="button" value={this.getUsername(user)} onClick={this.displayMessageLog.bind(this,user)}/>
                </li>
            );
        });
    }
    }


    render(){
        return (
            <div className="row">
                <div className="col-xs-6">
                    <div className="panel-body">
                        <ul className="media-list">
                            {this.renderMessages()}
                        </ul>
                    </div>
                    <input type="button" onClick={this.getUsers.bind(this)}/>
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