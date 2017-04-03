import { Meteor }   from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Mentors }  from '../imports/collections/mentors';
import { Mentees }  from '../imports/collections/mentees';

import _ from 'lodash';
import { image, helpers, lorem, internet } from 'faker';

Meteor.startup(()=>{

  Meteor.publish('mentors', function() {
    return Mentors.find({ ownerId: this.userId });
  });

  Meteor.publish('mentees', function() {
    return Mentees.find({ ownerId: this.userId });
  });
  
  /*Meteor.publish('messages', function(){
    return Message.find({});
  });*/

  // See if the collection has any records already
  const numberRecords = Meteor.users.find({}).count();
  if (numberRecords < 40) {
    _.times(40, () => {
      const { name, username, email, phone } = helpers.contextualCard();
      const avatar = image.avatar();
      const blurb = lorem.sentences();
      //console.log email when generating fake users.
      //console.log(email);
      Accounts.createUser({
        username: username,
        email: email,
        password:'faker',
        profile: { avatar: avatar, firstName: name, lastName: '', blurb: blurb }
      });
    }); // end loop
  } //end if
}); //end Meteor.startup()
