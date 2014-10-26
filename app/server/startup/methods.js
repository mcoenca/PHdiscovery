Meteor.startup(function(){
  //Everything that looks like a Method to call on the server
  //Declare the methods on the server that can be accessed by the client
  //
  var log = function (error, response) {
    console.log(error);
    console.log(response);
  };

  Meteor.methods({
    testApi: function(args) {
      this.unblock();
      //url,method,callback,params
      var url = args[0];
      var method = args[1];
      var params = args[2];

      if(!params){
        params = {};
      }
      //We just use dev token right now
      var autho = "Bearer 6b2f93fd087e61d02c79938c68480749c2b20e5f22d3fe6735777bc62cd58990 ";
      var appdomain= "http://phdiscovery.meteor.com";
      // var appdomain= "http://localhost:3000";
      

      var options = {
        headers:{
          'Accept':'application/json',
          "Content-Type":'application/json',
          'Authorization':autho,
          'Host': appdomain,
          'Cookie':''
        },
      };
      console.log(options);
      var result = HTTP.call(method, url,options);
      if(result.statusCode==200) {
        var respJson = JSON.parse(result.content);
        console.log("response received.");
        return respJson;
      } else {
        console.log("Response issue: ", result.statusCode);
        var errorJson = JSON.parse(result.content);
        throw new Meteor.Error(result.statusCode, errorJson.error);
      }
    },testApi2: function(args) {
      this.unblock();
      //url,method,callback,params
      var url = "https://0H4SMABBSG.algolia.io/1/indexes/Post_production";
      var method = "GET";
      var params = args[0];

      var options = {
        headers:{
          'Accept':'application/json',
          "Content-Type":'application/json',
          "X-Algolia-Application-Id":"0H4SMABBSG",
          "X-Algolia-API-Key":"9670d2d619b9d07859448d7628eea5f3"
        },
        params:params
      };
      console.log(options);
      var result = HTTP.call(method, url,options);
      if(result.statusCode==200) {
        var respJson = JSON.parse(result.content);
        console.log("response received.");
        return respJson;
      } else {
        console.log("Response issue: ", result.statusCode);
        var errorJson = JSON.parse(result.content);
        throw new Meteor.Error(result.statusCode, errorJson.error);
      }
    }
  });  
}); 

