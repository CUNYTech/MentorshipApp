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

  'users.removeAccount': function() {
 Meteor.users.remove({_id: this.userId});
  },

    'sendMessage':function(person,message){
        var to = Meteor.users.findOne({username: person});
        var from = Meteor.users.findOne({_id: this.userId});
        var msg = {
            to:to._id,
            fromuser:from._id,
            message:message,
            createAt: new Date()
        };
        if (person == this.userId) {
            throw new Meteor.Error("You can not send yourself a message.");
        }
        Messages.insert(msg);
    },
      'messages.markRead': function(messageId){
        check(messageId, String);

        const message = Messages.findOne(messageId);

        Messages.update(messageId, { $set: { read: true } });
  },

     'messages.remove': function(messageId) {
        check(messageId, String);

        Messages.remove(messageId);
    },

    'returnUsername':function(userID){
        var name = Meteor.users.findOne({_id:userID});
        return(
            name.username
        )

    },
  'searchUsers': function(searchValue) {
    var user = [];
    if (searchValue == '') {
      return user;
    }
    if (Match.test(searchValue, Match.OneOf(String, null, undefined))) {
      user.push(Accounts.findUserByEmail(searchValue) || Accounts.findUserByUsername(searchValue));
    }
    return user;
  },

  'searchMentors': function(searchValue) {
    if (searchValue == '') {
      return null;
    }
    else {
      return users = Meteor.users.find(
        { 'profile.mentorTags': { $elemMatch: {$eq: searchValue} } }
      ).fetch();
    } //end else
  },

  'searchMentees': function(searchValue) {
    if (searchValue == '') {
      return null;
    }
    else {
      return users = Meteor.users.find(
        { 'profile.menteeTags': { $elemMatch: {$eq: searchValue} } }
      ).fetch();
    } //end else
  },

  'users.addMentorTags': function(tags) {
    const tag = tags.toLowerCase();
    const tagExisted = Meteor.users.findOne(
      { _id: this.userId,
        'profile.mentorTags': { $elemMatch: {$eq: tag} } }
    );
    if(!tagExisted) {
      Meteor.users.update(Meteor.userId(), {$push: {
        "profile.mentorTags": tag
      }});
    }
  },

  'users.addMenteeTags': function(tags) {
    const tag = tags.toLowerCase();
    const tagExisted = Meteor.users.findOne(
      { _id: this.userId,
        'profile.menteeTags': { $elemMatch: {$eq: tag} } }
    );
    if(!tagExisted) {
      Meteor.users.update(Meteor.userId(), {$push: {
        "profile.menteeTags": tag
      }});
    }
  },

  'users.removeMentorTags': function(tags) {
    const tag = tags.toLowerCase();
    Meteor.users.update(Meteor.userId(), {$pull: {
      "profile.mentorTags": tag
    }});
  },

  'users.removeMenteeTags': function(tags) {
    const tag = tags.toLowerCase();
    Meteor.users.update(Meteor.userId(), {$pull: {
      "profile.menteeTags": tag
    }});
  },
}); //end Meteor.methods()
