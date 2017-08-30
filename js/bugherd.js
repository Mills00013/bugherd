/**
 * @file
 * JS to init Bugherd with the proper api key.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bugherd = {
    attach: function (context, settings) {

      // Get the bugherd settings so we can extract the api key.
      var config = settings.bugherd;

      // Add bugherd embed script.
      (function (d, t) {
        var bh = d.createElement(t), s = d.getElementsByTagName(t)[0];
        bh.type = 'text/javascript';
        bh.src = '//www.bugherd.com/sidebarv2.js?apikey='+config.api_key;
        s.parentNode.insertBefore(bh, s);
      })(document, 'script');

    }
  };
})(jQuery, Drupal);
