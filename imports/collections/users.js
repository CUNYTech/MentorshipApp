import { Mongo } from 'meteor/mongo';



Meteor.methods({
    'users.insert': function (userData) {
        return Users.insert({
            createdAt: new Date(),
            firstName: userData.firstName,
            lastName: userData.lastName,
            userName: userData.username,
            password: userData.password,


        }); //end of insert
    }


    }); //end of methods


export const Userz = new Mongo.Collection('userz');
