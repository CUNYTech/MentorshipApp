import { Mongo }   from 'meteor/mongo';
import { Mentees } from '../../imports/collections/mentees';

Meteor.methods({
  'mentors.add': function(user) {
    if(Meteor.userId() === null) {
      return;
    }
    return Mentors.insert({
      createdAt: new Date(),
      ownerId: Meteor.userId(),   // mentee id
      mentorId: user._id,         // mentor id
      isMentor: false,            // true only if status is accepted
      status: 'pending'           // possible status: pending, accepted
    });
  },

  'mentors.remove': function() {
    Mentors.remove({ownerId: this.userId});
    Mentors.remove({mentorId: this.userId});
  },

  'mentors.deleteMentor': function(user) {
    Mentors.remove(user);
    Mentees.remove({ownerId: user.mentorId, menteeId: user.ownerId});
  },

  'mentors.accept': function(user) {
    return Mentors.update({ownerId: user.menteeId, mentorId: user.ownerId}, { $set: {isMentor: true, status: 'accepted'} });
  },

  'mentors.reject': function(user) {
    return Mentors.remove({ownerId: user.menteeId, mentorId: user.ownerId});
  }
});

export const Mentors = new Mongo.Collection('mentors');
