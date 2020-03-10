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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.CreationDate = factory(root.Reseplaneraren.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CreationDate model module.
   * @module model/CreationDate
   * @version 1.10.1
   */

  /**
   * Constructs a new <code>CreationDate</code>.
   * @alias module:model/CreationDate
   * @class
   * @param value {Date} Creation date of timetable data in format YYYY-MM-DD
   */
  var exports = function(value) {
    this.value = value;
  };

  /**
   * Constructs a <code>CreationDate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreationDate} obj Optional instance to populate.
   * @return {module:model/CreationDate} The populated <code>CreationDate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('$'))
        obj.value = ApiClient.convertToType(data['$'], 'Date');
    }
    return obj;
  }

  /**
   * Creation date of timetable data in format YYYY-MM-DD
   * @member {Date} value
   */
  exports.prototype.value = undefined;

  return exports;

}));
