//We declare the routes
  Router.map(function() {
    this.route('login',{
      layoutTemplate: 'layout'
    });

    //This will render the topics board template
    this.route('mainView', {
      path: '/',
      layoutTemplate: 'layout',
      onBeforeAction: function () {
        //We "prefilter" if the user is logging in order to redirect to the good page
        if (Meteor.user() === null){
          if(!Meteor.loggingIn()){
            Router.go('login');
          }
        }
      },
      data: function(){
        var data ='';
        return data;
      }
    });
  });  
