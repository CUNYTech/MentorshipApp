import { Meteor }       from 'meteor/meteor';
import { Accounts }     from 'meteor/accounts-base';
import { check, Match } from 'meteor/check';
import { Mongo }        from 'meteor/mongo';

export const Messages = new Mongo.Collection('message');


/* Publish users collection to see them on CTRL + M */
Meteor.publish('users', function() {
    return Meteor.users.find({});
});

Meteor.publish('messageList',function(){
    return Messages.find({});
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


    'sendMessage':function(person,subject,message){
        var to = Meteor.users.findOne({_id: person});
        var from = Meteor.users.findOne({_id: this.userId});
        var msg = {
            to:to,
            fromuser:from._id,
            title:subject,
            message:message,
            createAt: new Date()
        };
        if (person == this.userId) {
            throw new Meteor.Error("You can not send yourself a message.");
        }
        Messages.insert(msg);
    },


  'searchUsers': function(searchValue) {
    if (searchValue == '') {
      throw new Meteor.Error("Nothing found.");
    }
    if (Match.test(searchValue, Match.OneOf(String, null, undefined))) {
      return Accounts.findUserByEmail(searchValue) || Accounts.findUserByUsername(searchValue);
    }
  },

  'searchMentorMentee': function(searchValue) {
    if (searchValue == '') {
      return null;
    }
    else {
      return users = Meteor.users.find( { $or: [
        { 'profile.mentorTags': { $elemMatch: {$eq: searchValue} } },
        { 'profile.menteeTags': { $elemMatch: {$eq: searchValue} } }
      ]}).fetch();
    } //end else
  },

  'users.addMentorTags': function(tags) {
    Meteor.users.update(Meteor.userId(), {$push: {
      "profile.mentorTags": tags
    }});
  },

  'users.addMenteeTags': function(tags) {
    Meteor.users.update(Meteor.userId(), {$push: {
      "profile.menteeTags": tags
    }});
  }

}); //end Meteor.methods()
