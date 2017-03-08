import { Mongo } from 'meteor/mongo';



Meteor.methods({
    'users.insert': function(userData) {
        return Users.insert({
            createdAt: new Date(),
            firstName: userData.firstName,
            lastName: userData.lastName,
            userName: userData.username,
            password: userData.password,



        });
    };

export const Users = new Mongo.Collection('users');