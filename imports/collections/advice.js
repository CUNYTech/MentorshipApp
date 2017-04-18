import {Mongo} from 'meteor/mongo'


Meteor.methods({
    'advice.add': function (user, message) {
        if (Meteor.userId() === null) {
            return;
        }
        return Advice.insert({
            createdAt: new Date(),
            ownerId: user._id,          // mentor id
            message: message
        });
    }
});

export const Advice = new Mongo.Collection('advice');











