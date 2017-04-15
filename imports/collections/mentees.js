import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'mentees.add': function(user) {
    if(Meteor.userId() === null) {
      return;
    }
    return Mentees.insert({
      createdAt: new Date(),
      ownerId: user._id,          // mentor id
      menteeId: Meteor.userId(),  // mentee id
      isMentee: false,            // true only if status is accepted
      status: 'pending'           // possible status: pending, accepted
    });
  },

  'mentees.remove': function() {
    Mentees.remove({ownerId: this.userId});
    Mentees.remove({menteeId: this.userId});
  },

  'mentees.accept': function(user) {
    return Mentees.update({ownerId: user.ownerId, menteeId: user.menteeId}, { $set: {isMentee: true, status: 'accepted'} });
  },

  'mentees.reject': function(user) {
    return Mentees.remove(user);
  }
});

export const Mentees = new Mongo.Collection('mentees');
