// This is a jQuery plugin based on a simple jquery slideshow tutorial that I found at
// the following http://jonraasch.com/blog/a-simple-jquery-slideshow. It was a decent
// basis to get something working but wasn't the most reusable code base so I turned it
// into a jQuery plugin called sliders.
//
// I built this plugin because I needed a very simple slider that didn't do too much
// that I could use in an app I was working on. All the other jQuery slideshow plugins
// I could find tried to help too much, in turn adding too many constraints on how they
// could be used. Hence, I am specificly trying to keep this plugin vague in the ways
// it can be used which probably means it won't be the most feature rich slideshow
// plugin available.

(function($){ // An anonymous function to wrap around your function to avoid conflicts
  $.fn.extend({ // Attach this new method to jQuery
    sliders: function(user_options) { // The plugin constructor/initialization method

      var defaults = {
        interval: 5000, // interval at which slides will change
        selector: ".slide", // selector used to identify slides
        active_class: "active-slide", // class used to identify active slides
        last_active_class: "last-active-slide" // class used to identify the last active slide
      };

      var options = $.extend(defaults, user_options);

      return this.each(function() { // Iterate over the current set of matched elements
        var o = options;

        var self = $(this);

        setInterval(function() {
          var active_slide_selector = o.selector + "." + o.active_class;
          var last_active_slide_selector = o.selector + "." + o.last_active_class;

          var active = self.find(active_slide_selector);
          if (active.length === 0) active = self.find(o.selector).last();

          var next = active.next().length ? active.next() : self.find(o.selector).first();

          active.addClass(o.last_active_class);

          next.css({ opacity: 0.0 })
          .addClass(o.active_class)
          .animate({ opacity: 1.0 }, 1000, function() {
            active.removeClass(o.last_active_class);
            active.removeClass(o.active_class);
          });
        }, o.interval);

        return this;
      });
    }
  });
})(jQuery);