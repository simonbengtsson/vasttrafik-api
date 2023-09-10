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
    instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
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

  describe('VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel', function() {
    it('should create an instance of VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel', function() {
      // uncomment below and update the code to test VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be.a(PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel);
    });

    it('should have the property stopPoint (base name: "stopPoint")', function() {
      // uncomment below and update the code to test the property stopPoint
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property plannedArrivalTime (base name: "plannedArrivalTime")', function() {
      // uncomment below and update the code to test the property plannedArrivalTime
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property plannedDepartureTime (base name: "plannedDepartureTime")', function() {
      // uncomment below and update the code to test the property plannedDepartureTime
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property estimatedArrivalTime (base name: "estimatedArrivalTime")', function() {
      // uncomment below and update the code to test the property estimatedArrivalTime
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property estimatedDepartureTime (base name: "estimatedDepartureTime")', function() {
      // uncomment below and update the code to test the property estimatedDepartureTime
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property estimatedOtherwisePlannedArrivalTime (base name: "estimatedOtherwisePlannedArrivalTime")', function() {
      // uncomment below and update the code to test the property estimatedOtherwisePlannedArrivalTime
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property estimatedOtherwisePlannedDepartureTime (base name: "estimatedOtherwisePlannedDepartureTime")', function() {
      // uncomment below and update the code to test the property estimatedOtherwisePlannedDepartureTime
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property plannedPlatform (base name: "plannedPlatform")', function() {
      // uncomment below and update the code to test the property plannedPlatform
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property estimatedPlatform (base name: "estimatedPlatform")', function() {
      // uncomment below and update the code to test the property estimatedPlatform
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property isOnTripLeg (base name: "isOnTripLeg")', function() {
      // uncomment below and update the code to test the property isOnTripLeg
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property isTripLegStart (base name: "isTripLegStart")', function() {
      // uncomment below and update the code to test the property isTripLegStart
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property isTripLegStop (base name: "isTripLegStop")', function() {
      // uncomment below and update the code to test the property isTripLegStop
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property tariffZones (base name: "tariffZones")', function() {
      // uncomment below and update the code to test the property tariffZones
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property occupancy (base name: "occupancy")', function() {
      // uncomment below and update the code to test the property occupancy
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property isCancelled (base name: "isCancelled")', function() {
      // uncomment below and update the code to test the property isCancelled
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property isDepartureCancelled (base name: "isDepartureCancelled")', function() {
      // uncomment below and update the code to test the property isDepartureCancelled
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

    it('should have the property isArrivalCancelled (base name: "isArrivalCancelled")', function() {
      // uncomment below and update the code to test the property isArrivalCancelled
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
      //expect(instance).to.be();
    });

  });

}));