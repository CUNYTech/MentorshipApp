import { Meteor }   from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import _ from 'lodash';
import { image, helpers, lorem } from 'faker';

Meteor.startup(() => {
    // See if the collection has any records already
    const numberRecords = Meteor.users.find({}).count();
    if (numberRecords < 20) {
        _.times(20, () => {
            const { name, email, phone } = helpers.createCard();
            const avatar = image.avatar();
            const blurb = lorem.sentences();
            //console.log email when generating fake users.
            console.log(email);
            Accounts.createUser({
                email: email, password:'faker',  profile: { avatar: avatar, firstName: name, lastName: '', blurb: blurb }
            }); // end Userz.insert()
        }); // end loop
    } //end if
}); //end Meteor.startup()
