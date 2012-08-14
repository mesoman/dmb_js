require.config({
  paths: {
    jQuery: 'libs/jquery',
    Underscore: 'libs/underscore',
    Backbone: 'libs/backbone'
  },
   shim: {
        'Backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['Underscore', 'jQuery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        }
    },

});

require(['app'],function(App){
	App.initialize();
});
