Meteor.startup(function () {
  if (Meteor.isCordova) {
    //We are in Cordova


    Tracker.autorun(function(){ 
      if(Meteor.user()){
        //Do stuff when user is logged in
      }
    });
  }
});