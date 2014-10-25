Users = Meteor.users;
User = Model(Users);

User.extend({
  isAdmin: function() {
    //Or wheatehrver    
  },
  uname: function() {
    var username = this.profile.username;
    return username;
  }
});