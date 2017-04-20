import { Mongo } from 'meteor/mongo'

Meteor.methods({
  'advices.add': function (message) {
    if (Meteor.userId() === null) {
        return;
    }
    return Advices.insert({
      createdAt: new Date(),
      ownerId: Meteor.userId(),
      message: message
    });
  },

  'advices.remove': function(advice) {
    Advices.remove(advice);
  }
});

export const Advices = new Mongo.Collection('advices');
