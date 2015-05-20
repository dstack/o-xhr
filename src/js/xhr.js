'use strict';

var noop = function () {};
module.exports = function (settings) {
  var successCodes = [ 200, 201, 202, 204 ];

  /* setup defaults */
  settings.url = settings.url || "";
  settings.method = settings.method || "GET";
  settings.onComplete = settings.onComplete || noop;
  settings.onError = settings.onError || noop;
  settings.data = settings.data || '';

  var r = new XMLHttpRequest();
  r.open(settings.method, settings.url, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4) {
      return;
    }
    else{
      if (successCodes.indexOf(r.status) === -1) {
        settings.onError(r.responseText);
      }
      else {
        settings.onComplete(r.responseText);
      }
    }
  };
  r.send(settings.data);
  return r;
};
