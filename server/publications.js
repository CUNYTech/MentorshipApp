import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { Mongo }    from 'meteor/mongo';

export const Messages = new Mongo.Collection('message');


/* Publish users collection to see them on CTRL + M */
Meteor.publish('users', function() {
    return Meteor.users.find({});
});

Meteor.publish('messageList',function(){
    return Messages.find()
});


Meteor.methods({
  'sendVerificationEmail': function() {
    Accounts.sendVerificationEmail(Meteor.userId(), Meteor.user().emails[0].address);
  },

  'users.updateEmail': function(email) {
    if(email != Meteor.user().emails[0].address) {
      Accounts.addEmail(Meteor.userId(), email);
      Accounts.removeEmail(Meteor.userId(), Meteor.user().emails[0].address);
    }
  },

  'users.changePassword': function(newPassword) {
    Accounts.setPassword(Meteor.userId(), newPassword);
  },

 messages
    'sendMessage':function(person,subject,message){
        var to = Meteor.users.findOne({_id: person});
        var from = Meteor.users.findOne({_id: this.userId});
        var msg = {
            to:to,
            fromuser:from._id,
            title:subject,
            message:message,
        };
      //  console.log(msg);
        if (person == this.userId) {
            throw new Meteor.Error("You can not send yourself a message.")
        }
        Messages.insert(msg);
    }

  'searchUsers': function(searchValue) {
    var user = Accounts.findUserByUsername(searchValue);
    if(!user) {
      user = Accounts.findUserByEmail(searchValue);
    }
    return user;
}

}); //end Meteor.methods()
