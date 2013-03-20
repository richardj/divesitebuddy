// Using the closure to map jQuery to $. 
(function ($) {

// Store our function as a property of Drupal.behaviors.
Drupal.behaviors.fixedNavigation = {
  attach: function (context, settings) {
    $window = $(window);
    // when we scroll this function will be called
    $(window).scroll(function(){
      console.log($window.scrollTop());
    })
  }
};

// You could add additional behaviors here.
Drupal.behaviors.myModuleMagic = {
  attach: function (context, settings) { },
  detach: function (context, settings) { }
};

}(jQuery));

