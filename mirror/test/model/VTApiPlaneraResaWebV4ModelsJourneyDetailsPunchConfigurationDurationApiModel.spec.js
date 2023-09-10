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
    instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel();
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

  describe('VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel', function() {
    it('should create an instance of VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel', function() {
      // uncomment below and update the code to test VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel();
      //expect(instance).to.be.a(PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel);
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel();
      //expect(instance).to.be();
    });

  });

}));
