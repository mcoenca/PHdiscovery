Meteor.startup(function () {

  Accounts.onCreateUser(function(options, user) {
    // We're enforcing at least an empty profile object to avoid needing to check
    // for its existence later.
    user.profile = options.profile ? options.profile : {};
    user.profile.username = user.emails[0].address.split("@",1)[0];
    return user;
  });

  //Defaults values for users and topics on startup
  //for testing purposes
  if (Meteor.users.find().count() === 0) {
    var user_id = Accounts.createUser({
      email:"m.coenca@gmail.com",
      password:"kikoolol"
    });
  }
});