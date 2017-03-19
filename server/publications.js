import { Meteor } from 'meteor/meteor';


//user email, username, and profile are published by default, we don't have to set
//up publication.

Meteor.publish('users', function() {
    return Meteor.users.find({}, { fields: { profile: 1 } });
});
