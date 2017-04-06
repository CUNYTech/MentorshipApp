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
      'messages.markRead': function(messageId){
        check(messageId, String);

        const message = Messages.findOne(messageId);

        Messages.update(messageId, { $set: { read: true } });
  },

     'messages.remove': function(messageId) {
        check(messageId, String);

        Messages.remove(messageId);
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
    const tagExisted = Meteor.users.findOne(
      { _id: this.userId,
        'profile.mentorTags': { $elemMatch: {$eq: tags} } }
    );
    if(!tagExisted) {
      Meteor.users.update(Meteor.userId(), {$push: {
        "profile.mentorTags": tags
      }});
    }
  },

  'users.addMenteeTags': function(tags) {
    const tagExisted = Meteor.users.findOne(
      { _id: this.userId,
        'profile.menteeTags': { $elemMatch: {$eq: tags} } }
    );
    if(!tagExisted) {
      Meteor.users.update(Meteor.userId(), {$push: {
        "profile.menteeTags": tags
      }});
    }
  }

}); //end Meteor.methods()
