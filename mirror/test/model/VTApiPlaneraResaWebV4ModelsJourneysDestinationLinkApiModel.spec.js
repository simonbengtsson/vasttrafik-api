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
    instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
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

  describe('VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel', function() {
    it('should create an instance of VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel', function() {
      // uncomment below and update the code to test VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be.a(PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel);
    });

    it('should have the property transportMode (base name: "transportMode")', function() {
      // uncomment below and update the code to test the property transportMode
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property transportSubMode (base name: "transportSubMode")', function() {
      // uncomment below and update the code to test the property transportSubMode
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property origin (base name: "origin")', function() {
      // uncomment below and update the code to test the property origin
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property destination (base name: "destination")', function() {
      // uncomment below and update the code to test the property destination
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property distanceInMeters (base name: "distanceInMeters")', function() {
      // uncomment below and update the code to test the property distanceInMeters
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property plannedDepartureTime (base name: "plannedDepartureTime")', function() {
      // uncomment below and update the code to test the property plannedDepartureTime
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property plannedArrivalTime (base name: "plannedArrivalTime")', function() {
      // uncomment below and update the code to test the property plannedArrivalTime
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property plannedDurationInMinutes (base name: "plannedDurationInMinutes")', function() {
      // uncomment below and update the code to test the property plannedDurationInMinutes
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property estimatedDepartureTime (base name: "estimatedDepartureTime")', function() {
      // uncomment below and update the code to test the property estimatedDepartureTime
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property estimatedArrivalTime (base name: "estimatedArrivalTime")', function() {
      // uncomment below and update the code to test the property estimatedArrivalTime
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property estimatedDurationInMinutes (base name: "estimatedDurationInMinutes")', function() {
      // uncomment below and update the code to test the property estimatedDurationInMinutes
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property estimatedNumberOfSteps (base name: "estimatedNumberOfSteps")', function() {
      // uncomment below and update the code to test the property estimatedNumberOfSteps
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property linkCoordinates (base name: "linkCoordinates")', function() {
      // uncomment below and update the code to test the property linkCoordinates
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

    it('should have the property segments (base name: "segments")', function() {
      // uncomment below and update the code to test the property segments
      //var instance = new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel();
      //expect(instance).to.be();
    });

  });

}));
