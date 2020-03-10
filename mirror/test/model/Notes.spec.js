/*
 * Reseplaneraren
 * Provides access to Västtrafik journey planner
 *
 * OpenAPI spec version: 1.10.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Reseplaneraren);
  }
}(this, function(expect, Reseplaneraren) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Notes', function() {
      beforeEach(function() {
        instance = new Reseplaneraren.Notes();
      });

      it('should create an instance of Notes', function() {
        // TODO: update the code to test Notes
        expect(instance).to.be.a(Reseplaneraren.Notes);
      });

      it('should have the property note (base name: "Note")', function() {
        // TODO: update the code to test the property note
        expect(instance).to.have.property('note');
        // expect(instance.note).to.be(expectedValueLiteral);
      });

    });
  });

}));
