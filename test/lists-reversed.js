var Modernizr = require('./../lib/Modernizr');
var createElement = require('./../lib/createElement');


  // impressivewebs.com/reverse-ordered-lists-html5
  // polyfill: github.com/impressivewebs/HTML5-Reverse-Ordered-Lists

  Modernizr.addTest('olreversed', 'reversed' in createElement('ol'));

