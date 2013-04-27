var Modernizr = require('./../../lib/Modernizr');
var addTest = require('./../../lib/addTest');


  // data uri test.
  // https://github.com/Modernizr/Modernizr/issues/14

  // This test is asynchronous. Watch out.

  Modernizr.addAsyncTest(function() {

    // IE7 throw a mixed content warning on HTTPS for this test, so we'll
    // just blacklist it (we know it doesn't support data URIs anyway)
    // https://github.com/Modernizr/Modernizr/issues/362
    if(navigator.userAgent.indexOf('MSIE 7.') !== -1) {
      // Keep the test async
      setTimeout(function () {
        addTest('datauri', false);
      }, 10);
    }

    var datauri = new Image();

    datauri.onerror = function() {
      addTest('datauri', false);
    };
    datauri.onload = function() {
      if(datauri.width == 1 && datauri.height == 1) {
        testOver32kb();
      }
      else {
        addTest('datauri', false);
      }
    };

    datauri.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

    // Once we have datauri, let's check to see if we can use data URIs over
    // 32kb (IE8 can't). https://github.com/Modernizr/Modernizr/issues/321
    function testOver32kb(){

      var datauriBig = new Image();

      datauriBig.onerror = function() {
          addTest('datauri', true);
          Modernizr.datauri = new Boolean(true);
          Modernizr.datauri.over32kb = false;
      };
      datauriBig.onload = function() {
          addTest('datauri', true);
          Modernizr.datauri = new Boolean(true);
          Modernizr.datauri.over32kb = (datauriBig.width == 1 && datauriBig.height == 1);
      };

      var base64str = "R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      while (base64str.length < 33000) {
        base64str = "\r\n" + base64str;
      }
      datauriBig.src= "data:image/gif;base64," + base64str;
    }

  });

