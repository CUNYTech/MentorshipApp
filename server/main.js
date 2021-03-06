import { Meteor }   from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Mentors }  from '../imports/collections/mentors';
import { Mentees }  from '../imports/collections/mentees';
import { Advices }  from '../imports/collections/advices';

import _ from 'lodash';
import { image, helpers, lorem, internet, name } from 'faker';

Meteor.startup(()=>{

  Meteor.publish('mentors', function() {
    return Mentors.find({ ownerId: this.userId });
  });

  Meteor.publish('mentees', function() {
    return Mentees.find({ ownerId: this.userId });
  });

  Meteor.publish('mentorCounts', function() {
    return Mentors.find({});
  });

  Meteor.publish('menteeCounts', function() {
    return Mentees.find({});
  });

  Meteor.publish('advices', function() {
    return Advices.find({});
  });

  // See if the collection has any records already
  const numberRecords = Meteor.users.find({}).count();
  if (numberRecords < 40) {
    _.times(40, () => {
      const helper = helpers.contextualCard();
      const firstName = helper.name;
      const username = helper.username;
      const email = helper.email;
      const avatar = image.avatar();
      const blurb = lorem.sentences();
      const mentorTags = [ name.jobType().toLowerCase() ];
      const menteeTags = [ name.jobType().toLowerCase() ];
      const linkedInURL= "www.linkedin.com";
      const twitterURL= "www.twitter.com";

      Accounts.createUser({
        username: username,
        email: email,
        password:'faker',
        profile: { avatar: avatar,
                   firstName: firstName,
                   lastName: '',
                   blurb: blurb,
                   mentorTags: mentorTags,
                   menteeTags: menteeTags,
                   twitterURL:twitterURL,
                   linkedInURL:linkedInURL
                 }
      });
    }); // end loop
  } //end if
}); //end Meteor.startup()
