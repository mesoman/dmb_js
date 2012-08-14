define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/welcome'
], function($, _, Backbone, Session, welcomeView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'welcome' : 'showWelcome',
      //'/projects': 'showProjects',
      //'/users': 'showUsers',

      // Default
      '*actions': 'defaultAction'
    },
    
    showWelcome: function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      console.log("view loaded");
      //welcomeView.render();
    },
  
    defaultAction: function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});