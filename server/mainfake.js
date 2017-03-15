import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Userz } from '../imports/collections/users';
import { image, helpers } from 'faker';

Meteor.startup(() => {

  // See if the collection has any records already
  const numberRecords = Userz.find({}).count();
  console.log(numberRecords);
  if (!numberRecords) {
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Userz.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('userz', function(per_page) {
    return Userz.find({}, { limit: per_page });
  });
});