'use strict';

describe('The o-he-xhr module', function () {

  var expect = require('expect.js');
  var sinon = require('sinon');
  var xhr = require('../src/js/xhr');

  var route = '/foo/bar';
  var headerValue = 'application/json';
  var body = '{ "some": "json" }';

  beforeEach(function () {
    this.server = sinon.fakeServer.create();
  });

  afterEach(function () {
    this.server.restore();
  });

  it('should execute onComplete function on a request with a return code of 200', function (done) {
    this.server.respondWith('FOO', route, [200,
      { 'Content-Type': headerValue }, body ]);

    new xhr({
      url: route,
      method: 'FOO',
      onError: function (res) {
        done(expect().fail('Called error when it should have been a success.'));
      },
      onComplete: function (res){
        expect(JSON.parse(res)).to.be.a(Object);
        done();
      }});
    this.server.respond();
  });

  it('should execute onComplete function on a request with a return code of 201', function (done) {
    this.server.respondWith('FOO', route, [201,
      { 'Content-Type': headerValue }, body ]);

    new xhr({
      url: route,
      method: 'FOO',
      onError: function (res) {
        done(expect().fail('Called error when it should have been a success.'));
      },
      onComplete: function (res){
        expect(JSON.parse(res)).to.be.a(Object);
        done();
      }});
    this.server.respond();
  });

  it('should execute onComplete function on a request with a return code of 202', function (done) {
    this.server.respondWith('FOO', route, [202,
      { 'Content-Type': headerValue }, body ]);

    new xhr({
      url: route,
      method: 'FOO',
      onError: function (res) {
        done(expect().fail('Called error when it should have been a success.'));
      },
      onComplete: function (res){
        expect(JSON.parse(res)).to.be.a(Object);
        done();
      }});
    this.server.respond();
  });

  it('should execute onComplete function on a request with a return code of 204', function (done) {
    this.server.respondWith('FOO', route, [204,
      { 'Content-Type': headerValue }, body ]);

    new xhr({
      url: route,
      method: 'FOO',
      onError: function (res) {
        done(expect().fail('Called error when it should have been a success.'));
      },
      onComplete: function (res){
        expect(JSON.parse(res)).to.be.a(Object);
        done();
      }});
    this.server.respond();
  });

  it('should execute onError function on a failed request with a server error', function (done) {
    this.server.respondWith('FOO', route, [400,
      { 'Content-Type': headerValue }, body ]);

    new xhr({
      url: route,
      method: 'FOO',
      onError: function (res){
        expect(JSON.parse(res)).to.be.a(Object);
        done();
      },
      onComplete: function (res){
        done(expect().fail('Called success when it should have failed'));
      }});
    this.server.respond();
  });

  it('should execute onError function on a failed request with a server error', function (done) {
    this.server.respondWith('FOO', route, [500,
      { 'Content-Type': headerValue }, body ]);

    new xhr({
      url: route,
      method: 'FOO',
      onError: function (res){
        expect(JSON.parse(res)).to.be.a(Object);
        done();
      },
      onComplete: function (res){
        done(expect().fail('Called success when it should have failed'));
      }});
    this.server.respond();
  });
});
