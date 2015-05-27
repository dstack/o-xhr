/*global require*/
'use strict';

var xhr =  require('../../main');

document.querySelector('button.clear').onclick = function () {
	document.getElementById('results').innerText = '';
};

var buttons = document.querySelectorAll('button.request');

for(var i=0; i<buttons.length; i++) {
	buttons[i].addEventListener('click', makeCall(buttons[i].innerText));
}

function makeCall (method) {
	return function () {
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
}

function formatResponse (res) {
	var pre = document.createElement('pre');
	var obj = JSON.parse(res);
	var json = document.createTextNode(JSON.stringify(obj, null, 2));
	pre.appendChild(json);
	document.querySelector('.results').appendChild(pre);
}
