/* Use to send email when user click on forgot password on the login page */
Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://obecinc%40gmail.com:12345abc@smtp.gmail.com:587';
});
