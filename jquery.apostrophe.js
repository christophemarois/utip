// Apostrophe, lightweight name mentions for jQuery
// Version 0.1
// (c) Syme (git @ symeapp)
// Released under the MIT license

(function($) {

  // Create namespace
  $.apostrophe = {};

  // Default config
  $.apostrophe.config = {
    eventHandlers: 'keypress'
  };

  $.fn.apostrophe = function(config) {

    // Extend global config with config arguments
    config = $.extend($.apostrophe.config, config || {});

    this
      // Keep only uninitialized textareas
      .filter('textarea')
      .filter(function(){ return !this.mirror })

      // Iterate on each
      .each(function(){

        // Shortcuts to DOM and jQuery versions of textarea
        var el = this, $el = $(this);

        // Copy style from textarea
        var originalStyle = {
          top:    $el.offset().top,
          left:   $el.offset().left,
          width:  $el.outerWidth(),
          height: $el.outerHeight()
        }

        // Create mirror, style it and append it to body
        var $mirror = $('<div />').css(originalStyle).appendTo('body');

        // Link the DOM mirror as an attribute to the textarea
        // Note: this does not deep copy the element, but rather link
        // it. This is exactly what we want: that way we don't have to
        // manually keep track of textarea-mirror relationships.
        el.mirror = $mirror.get(0);

        $el
          // Update event
          .on(config.eventHandlers, $.apostrophe.update)

          // Destroy event
          .on('apostrophe.destroy', function(){
            $el.off(config.eventHandlers, $.apostrophe.update);
            $mirror.remove();
          });

      });

    // Chainability
    return this;

  };

  // Update event.
  $.apostrophe.update = function(e) {
    this.mirror.innerHTML = this.value;
  };

})(jQuery);