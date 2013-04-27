var Modernizr = require('./../../lib/Modernizr');
var prefixed = require('./../../lib/prefixed');


  // RTCPeerConnection
  // http://dev.w3.org/2011/webrtc/editor/webrtc.html#rtcpeerconnection-interface
  // By Ankur Oberoi

  Modernizr.addTest('peerconnection', !!prefixed('RTCPeerConnection', window));

