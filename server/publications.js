import { Meteor } from 'meteor/meteor';

/* Publish users to see them on CTRL + M */
Meteor.publish('users', function() {
    return Meteor.users.find({});
});
