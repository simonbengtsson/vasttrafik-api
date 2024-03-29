/**
 * Planera Resa
 * Sök och planera resor med Västtrafik
 *
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PlaneraResa);
  }
}(this, function(expect, PlaneraResa) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsPaginationLinks();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VTApiPlaneraResaWebV4ModelsPaginationLinks', function() {
    it('should create an instance of VTApiPlaneraResaWebV4ModelsPaginationLinks', function() {
      // uncomment below and update the code to test VTApiPlaneraResaWebV4ModelsPaginationLinks
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsPaginationLinks();
      //expect(instance).to.be.a(PlaneraResa.VTApiPlaneraResaWebV4ModelsPaginationLinks);
    });

    it('should have the property previous (base name: "previous")', function() {
      // uncomment below and update the code to test the property previous
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsPaginationLinks();
      //expect(instance).to.be();
    });

    it('should have the property next (base name: "next")', function() {
      // uncomment below and update the code to test the property next
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsPaginationLinks();
      //expect(instance).to.be();
    });

    it('should have the property current (base name: "current")', function() {
      // uncomment below and update the code to test the property current
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsPaginationLinks();
      //expect(instance).to.be();
    });

  });

}));
