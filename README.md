# o-xhr [![Build Status](https://travis-ci.org/jumolis/o-xhr.svg)](https://travis-ci.org/jumolis/o-xhr)

## Description

This component provides a lightweight, cross-browser abstraction for making XHR requests

### Example

```
var xhr = require('o-he-xhr');

xhr({
  url: 'http://reqr.es/api/users',
  onError: function (res) {
    formatResponse(res);
  },
  onComplete: function (res){
    formatResponse(res);
  }
});

```


The xhr function accepts a settings object as its only argument.  The settings object can contain the following options.

### url - Required

This should be a string to represent the path to the resource

### method - Optional

A string containing the HTTP verb you are using.  Please note that there is no validation on this field, so you should use care to make sure you are using valid methods.

### onComplete - Optional

A callback function to be executed on successful completion of the request.

### onError - Optional

A callback function to be executed if the request returns an error.

### data - Optional

A string representing the body of the request.

## Browser Support

This component has been tested in IE, Firefox, and Chrome.

## License

This software is published by Pearson Higher Education under the [MIT license](http://opensource.org/licenses/MIT).
