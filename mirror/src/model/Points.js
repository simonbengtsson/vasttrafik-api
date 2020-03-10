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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Point'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Point'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.Points = factory(root.Reseplaneraren.ApiClient, root.Reseplaneraren.Point);
  }
}(this, function(ApiClient, Point) {
  'use strict';

  /**
   * The Points model module.
   * @module model/Points
   * @version 1.10.1
   */

  /**
   * Constructs a new <code>Points</code>.
   * @alias module:model/Points
   * @class
   * @param point {Array.<module:model/Point>} 
   */
  var exports = function(point) {
    this.point = point;
  };

  /**
   * Constructs a <code>Points</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Points} obj Optional instance to populate.
   * @return {module:model/Points} The populated <code>Points</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Point'))
        obj.point = ApiClient.convertToType(data['Point'], [Point]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Point>} point
   */
  exports.prototype.point = undefined;

  return exports;

}));
