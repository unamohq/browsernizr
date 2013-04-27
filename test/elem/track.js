var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // Track element + Timed Text Track API
  // http://www.w3.org/TR/html5/video.html#the-track-element
  // http://www.w3.org/TR/html5/media-elements.html#text-track-api
  //
  // While IE10 has implemented the track element, IE10 does not expose the underlying APIs to create timed text tracks by JS (really sad)
  // By Addy Osmani
  Modernizr.addTest('texttrackapi', typeof (createElement('video').addTextTrack) === 'function');
  // a more strict test for track including UI support: document.createElement('track').kind === 'subtitles'
  Modernizr.addTest('track', 'kind' in createElement('track'));

