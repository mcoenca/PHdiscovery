//We declare the routes
  Router.map(function() {
    this.route('login',{
      layoutTemplate: 'layout'
    });

    //This will render the topics board template
    this.route('mainView', {
      path: '/:query',
      layoutTemplate: 'layout',
      onBeforeAction: function () {
        //We "prefilter" if the user is logging in order to redirect to the good page
        // if (Meteor.user() === null){
        //   if(!Meteor.loggingIn()){
        //     Router.go('login');
        //   }
        // }
      },
      data: function(){
        var data={};
        if (typeof Products.findOne({query:this.params.query}) !== 'undefined') {
          data ={products:Products.findOne({query:this.params.query}).allproducts};
        }
        return data;
      }
    });
  });  
