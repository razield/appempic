'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('el nombre debe ser Juan', function () {
    appempic.getName().should.equal('Juan');
  });

  it('el apellido debe ser Zuluaga', function () {
    appempic.getLastName().should.equal('gomez');
  });

});
