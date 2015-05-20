/*global require*/
var xhr =  require('../../main');

document.addEventListener("DOMContentLoaded", function() {
	"use strict";
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});

document.querySelector('button.clear').onclick = function () {
  document.getElementById('results').innerText = '';
};

var buttons = document.querySelectorAll('button.request');

for(var i=0; i<buttons.length; i++) {
  var button = buttons[i];
  button.onclick = function () {
    makeCall(this.innerText);
  };
}

function makeCall (method) {
  xhr({
    url: document.getElementById('url').value,
    method: method,
    data: document.getElementById('data').value,
    onError: function (res) {
      formatResponse(res);
    },
    onComplete: function (res){
      formatResponse(res);
    }
  });
};

function formatResponse (res) {
  var pre = document.createElement('pre');
  var obj = JSON.parse(res);
  var json = document.createTextNode(JSON.stringify(obj, null, 2));
  pre.appendChild(json);
  document.getElementById('results').appendChild(pre);
};
