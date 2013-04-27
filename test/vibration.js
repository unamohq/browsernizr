var Modernizr = require('./../lib/Modernizr');
var prefixed = require('./../lib/prefixed');


  // Vibration API
  // http://www.w3.org/TR/vibration/
  // https://developer.mozilla.org/en/DOM/window.navigator.mozVibrate
  Modernizr.addTest('vibrate', !!prefixed('vibrate', navigator));

