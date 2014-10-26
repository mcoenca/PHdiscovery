Template.mainView.events({
  'click #search' : function(e, templ){
    // we prevent the form to relaod the page
    e.preventDefault();
    Meteor.call('testApi2',
    [{
      query:templ.$("#search_field").val(),
      page:0
    }],function(error,response){
      console.log(response);
      var nbHits=response.nbHits;
      Meteor.call('testApi2',
        [{
          query:templ.$("#search_field").val(),
          hitsPerPage:nbHits
        }],function(error,response){
            Products.insert({
              query:templ.$("#search_field").val(),
              allproducts:response.hits
            });
            Router.go('/'+templ.$("#search_field").val());
          });
        });
      }
    });