var Modernizr = require('./../lib/Modernizr');
var createElement = require('./../lib/createElement');


  // test if IE userdata supported
  // msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx
  // test by @stereobooster
  Modernizr.addTest('userdata', !!createElement('div').addBehavior);

