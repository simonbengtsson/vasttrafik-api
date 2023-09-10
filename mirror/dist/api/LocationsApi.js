"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaWebV4ModelsApiError = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsApiError"));
var _VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType"));
var _VTApiPlaneraResaWebV4ModelsLocationByTextType = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsLocationByTextType"));
var _VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
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
/**
* Locations service.
* @module api/LocationsApi
* @version v4
*/
var LocationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LocationsApi. 
  * @alias module:api/LocationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LocationsApi(apiClient) {
    _classCallCheck(this, LocationsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the locationsByCoordinatesGet operation.
   * @callback module:api/LocationsApi~locationsByCoordinatesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns the locations nearest the specified coordinates. Currently only stop areas, stop points and meta-stations are supported.
   * Sample request:        GET /locations/by-coordinates?latitude=57.708734&longitude=11.974764&radiusInMeters=500&limit=10&offset=0
   * @param {Number} latitude The latitude.
   * @param {Number} longitude The longitude.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.radiusInMeters The search radius from the coordinates specified in meters. Must be a positive integer > 0. (default to 500)
   * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType>} opts.types The location types to include in the response, if none specified all locations types are included.
   * @param {Number} opts.limit The number of results to return. (default to 10)
   * @param {Number} opts.offset The zero-based start offset of the pagination. (default to 0)
   * @param {module:api/LocationsApi~locationsByCoordinatesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse}
   */
  _createClass(LocationsApi, [{
    key: "locationsByCoordinatesGet",
    value: function locationsByCoordinatesGet(latitude, longitude, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'latitude' is set
      if (latitude === undefined || latitude === null) {
        throw new Error("Missing the required parameter 'latitude' when calling locationsByCoordinatesGet");
      }
      // verify the required parameter 'longitude' is set
      if (longitude === undefined || longitude === null) {
        throw new Error("Missing the required parameter 'longitude' when calling locationsByCoordinatesGet");
      }
      var pathParams = {};
      var queryParams = {
        'latitude': latitude,
        'longitude': longitude,
        'radiusInMeters': opts['radiusInMeters'],
        'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['auth'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse["default"];
      return this.apiClient.callApi('/locations/by-coordinates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the locationsByTextGet operation.
     * @callback module:api/LocationsApi~locationsByTextGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns locations matching the specified text. Currently only stop areas, addresses, points of interest and meta-stations are supported.
     * Sample request:        GET /locations/by-text?q=brunnsparken&limit=10&offset=0
     * @param {String} q The search text (e.g. 'brunn', 'cent' or 'Kungsgatan'). The maximum length allowed is 256 characters.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsLocationByTextType>} opts.types The location types to include in the response, if none specified all locations types are included.
     * @param {Number} opts.limit The number of results to return. (default to 10)
     * @param {Number} opts.offset The zero-based start offset of the pagination. (default to 0)
     * @param {module:api/LocationsApi~locationsByTextGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse}
     */
  }, {
    key: "locationsByTextGet",
    value: function locationsByTextGet(q, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'q' is set
      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling locationsByTextGet");
      }
      var pathParams = {};
      var queryParams = {
        'q': q,
        'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['auth'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse["default"];
      return this.apiClient.callApi('/locations/by-text', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return LocationsApi;
}();
exports["default"] = LocationsApi;