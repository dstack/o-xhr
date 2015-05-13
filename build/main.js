(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global require, module*/
"use strict";

module.exports = {
	xhr: require("./src/js/xhr")
};

},{"./src/js/xhr":2}],2:[function(require,module,exports){
"use strict";

var noop = function noop() {};
module.exports = function (settings) {
  var successCodes = [200, 201, 202, 204];

  /* setup defaults */
  settings.url = settings.url || "";
  settings.method = settings.method || "GET";
  settings.onComplete = settings.onComplete || noop;
  settings.onError = settings.onError || noop;
  settings.data = settings.data || "";

  var r = new XMLHttpRequest();
  r.open(settings.method, settings.url, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4) {
      return;
    } else {
      if (successCodes.indexOf(r.status) === -1) {
        settings.onError(r.responseText);
      } else {
        settings.onComplete(r.responseText);
      }
    }
  };
  r.send(settings.data);
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbGliL25vZGVfbW9kdWxlcy9vcmlnYW1pLWJ1aWxkLXRvb2xzL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9qdXN0aW4vZGV2L2NvY28vby1oZS14aHIvbWFpbi5qcyIsIi9ob21lL2p1c3Rpbi9kZXYvY29jby9vLWhlLXhoci9zcmMvanMveGhyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0NBLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2hCLElBQUcsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDO0NBQzVCLENBQUM7OztBQ0xGLFlBQVksQ0FBQzs7QUFFYixJQUFJLElBQUksR0FBRyxnQkFBWSxFQUFFLENBQUM7QUFDMUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLFFBQVEsRUFBRTtBQUNuQyxNQUFJLFlBQVksR0FBRyxDQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRSxDQUFDOzs7QUFHMUMsVUFBUSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxVQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO0FBQzNDLFVBQVEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUM7QUFDbEQsVUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQztBQUM1QyxVQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDOztBQUVwQyxNQUFJLENBQUMsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0FBQzdCLEdBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVDLEdBQUMsQ0FBQyxrQkFBa0IsR0FBRyxZQUFZO0FBQ2pDLFFBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7QUFDckIsYUFBTztLQUNSLE1BQ0c7QUFDRixVQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ3pDLGdCQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztPQUNsQyxNQUNJO0FBQ0gsZ0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO09BQ3JDO0tBQ0Y7R0FDRixDQUFDO0FBQ0YsR0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDdkIsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKmdsb2JhbCByZXF1aXJlLCBtb2R1bGUqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0eGhyOiByZXF1aXJlKCcuL3NyYy9qcy94aHInKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNldHRpbmdzKSB7XG4gIHZhciBzdWNjZXNzQ29kZXMgPSBbIDIwMCwgMjAxLCAyMDIsIDIwNCBdO1xuXG4gIC8qIHNldHVwIGRlZmF1bHRzICovXG4gIHNldHRpbmdzLnVybCA9IHNldHRpbmdzLnVybCB8fCBcIlwiO1xuICBzZXR0aW5ncy5tZXRob2QgPSBzZXR0aW5ncy5tZXRob2QgfHwgXCJHRVRcIjtcbiAgc2V0dGluZ3Mub25Db21wbGV0ZSA9IHNldHRpbmdzLm9uQ29tcGxldGUgfHwgbm9vcDtcbiAgc2V0dGluZ3Mub25FcnJvciA9IHNldHRpbmdzLm9uRXJyb3IgfHwgbm9vcDtcbiAgc2V0dGluZ3MuZGF0YSA9IHNldHRpbmdzLmRhdGEgfHwgJyc7XG5cbiAgdmFyIHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgci5vcGVuKHNldHRpbmdzLm1ldGhvZCwgc2V0dGluZ3MudXJsLCB0cnVlKTtcbiAgci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHIucmVhZHlTdGF0ZSAhPSA0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBpZiAoc3VjY2Vzc0NvZGVzLmluZGV4T2Yoci5zdGF0dXMpID09PSAtMSkge1xuICAgICAgICBzZXR0aW5ncy5vbkVycm9yKHIucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXR0aW5ncy5vbkNvbXBsZXRlKHIucmVzcG9uc2VUZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHIuc2VuZChzZXR0aW5ncy5kYXRhKTtcbn07XG4iXX0=
