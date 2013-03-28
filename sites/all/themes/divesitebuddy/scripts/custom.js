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

Drupal.behaviors.descriptions = {
  attach: function (context) {
    $('.description').each(function() {
      var description = $(this);
      description.hide();

      var label = description.parent('form-item').find('label:first');
      description.parent('.form-item').find('label:first').hover(
        function () { description.show(); },
        function () { description.hide(); }
      );
    });
  }
};

// You could add additional behaviors here.
Drupal.behaviors.myModuleMagic = {
  attach: function (context, settings) { },
  detach: function (context, settings) { }
};

}(jQuery));

