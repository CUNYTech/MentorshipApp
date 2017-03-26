import { Meteor }   from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import _ from 'lodash';
import { image, helpers, lorem, internet } from 'faker';





Meteor.startup(()=>{
    // See if the collection has any records already

    const numberRecords = Meteor.users.find({}).count();
    if (numberRecords < 20) {
        _.times(20, () => {
 
            const { name, username, email, phone } = helpers.contextualCard();

            const { name, email, username } = helpers.createCard();

            const avatar = image.avatar();
            const blurb = lorem.sentence();
            //console.log email when generating fake users.
            //console.log(email);
            Accounts.createUser({

                email: email, password:'faker',  profile: { avatar: avatar, firstName: name, lastName: '', blurb: blurb, username:username }

                email: email,
                password:'faker',
                username:username,
                profile: { avatar: avatar, firstName: name, lastName: '', blurb: blurb }

            }); // end Userz.insert()
        }); // end loop
    } //end if






}); //end Meteor.startup()
