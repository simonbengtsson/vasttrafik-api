"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _MicrosoftAspNetCoreMvcProblemDetails = _interopRequireDefault(require("../model/MicrosoftAspNetCoreMvcProblemDetails"));
var _VTApiPlaneraResaWebV4ModelsApiError = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsApiError"));
var _VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType"));
var _VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType"));
var _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel"));
var _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel"));
var _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse"));
var _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse"));
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
* StopAreas service.
* @module api/StopAreasApi
* @version v4
*/
var StopAreasApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StopAreasApi. 
  * @alias module:api/StopAreasApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StopAreasApi(apiClient) {
    _classCallCheck(this, StopAreasApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGet operation.
   * @callback module:api/StopAreasApi~stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns details about an arrival.
   * Sample request:        GET /stop-areas/9021014001760000/arrivals/{detailsReference}/details?includes=servicejourneycalls
   * @param {String} detailsReference The reference to the service journey, received from the arrivals call. A detailsReference is only valid during the same day as it was generated.
   * @param {String} stopAreaGid 
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType>} opts.includes The additional information to include in the response.
   * @param {module:api/StopAreasApi~stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel}
   */
  _createClass(StopAreasApi, [{
    key: "stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGet",
    value: function stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGet(detailsReference, stopAreaGid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'detailsReference' is set
      if (detailsReference === undefined || detailsReference === null) {
        throw new Error("Missing the required parameter 'detailsReference' when calling stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGet");
      }
      // verify the required parameter 'stopAreaGid' is set
      if (stopAreaGid === undefined || stopAreaGid === null) {
        throw new Error("Missing the required parameter 'stopAreaGid' when calling stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGet");
      }
      var pathParams = {
        'detailsReference': detailsReference,
        'stopAreaGid': stopAreaGid
      };
      var queryParams = {
        'includes': this.apiClient.buildCollectionParam(opts['includes'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['auth'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel["default"];
      return this.apiClient.callApi('/stop-areas/{stopAreaGid}/arrivals/{detailsReference}/details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the stopAreasStopAreaGidArrivalsGet operation.
     * @callback module:api/StopAreasApi~stopAreasStopAreaGidArrivalsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns arrivals to the specified stop area at the specified time.
     * Sample request:        GET /stop-areas/9021014003980000/arrivals
     * @param {String} stopAreaGid The 16-digit Västtrafik gid of the stop area.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDateTime The start of the time interval for which to get upcoming arrivals. Must be specified in RFC 3339 format or be null which means that the current time on the server is used.
     * @param {String} opts.platforms Filter results by platform. Multiple platforms are separated by comma. Case sensitive.
     * @param {Number} opts.timeSpanInMinutes The number of minutes from the start time for which to get upcoming arrivals. Allowed values are between 0 and 1440. (default to 60)
     * @param {Number} opts.maxArrivalsPerLineAndDirection The maximum number of arrivals for a single line in a specific direction. (default to 2)
     * @param {Number} opts.limit The number of results to return. (default to 10)
     * @param {Number} opts.offset The zero-based start offset of the pagination. (default to 0)
     * @param {module:api/StopAreasApi~stopAreasStopAreaGidArrivalsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse}
     */
  }, {
    key: "stopAreasStopAreaGidArrivalsGet",
    value: function stopAreasStopAreaGidArrivalsGet(stopAreaGid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'stopAreaGid' is set
      if (stopAreaGid === undefined || stopAreaGid === null) {
        throw new Error("Missing the required parameter 'stopAreaGid' when calling stopAreasStopAreaGidArrivalsGet");
      }
      var pathParams = {
        'stopAreaGid': stopAreaGid
      };
      var queryParams = {
        'startDateTime': opts['startDateTime'],
        'platforms': opts['platforms'],
        'timeSpanInMinutes': opts['timeSpanInMinutes'],
        'maxArrivalsPerLineAndDirection': opts['maxArrivalsPerLineAndDirection'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['auth'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse["default"];
      return this.apiClient.callApi('/stop-areas/{stopAreaGid}/arrivals', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGet operation.
     * @callback module:api/StopAreasApi~stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns details about a departure.
     * Sample request:        GET /stop-areas/9021014001760000/departures/{detailsReference}/details?includes=servicejourneycalls
     * @param {String} detailsReference The reference to the service journey, received from the departures call. A detailsReference is only valid during the same day as it was generated.
     * @param {String} stopAreaGid 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType>} opts.includes The additional information to include in the response.
     * @param {module:api/StopAreasApi~stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel}
     */
  }, {
    key: "stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGet",
    value: function stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGet(detailsReference, stopAreaGid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'detailsReference' is set
      if (detailsReference === undefined || detailsReference === null) {
        throw new Error("Missing the required parameter 'detailsReference' when calling stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGet");
      }
      // verify the required parameter 'stopAreaGid' is set
      if (stopAreaGid === undefined || stopAreaGid === null) {
        throw new Error("Missing the required parameter 'stopAreaGid' when calling stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGet");
      }
      var pathParams = {
        'detailsReference': detailsReference,
        'stopAreaGid': stopAreaGid
      };
      var queryParams = {
        'includes': this.apiClient.buildCollectionParam(opts['includes'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['auth'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel["default"];
      return this.apiClient.callApi('/stop-areas/{stopAreaGid}/departures/{detailsReference}/details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the stopAreasStopAreaGidDeparturesGet operation.
     * @callback module:api/StopAreasApi~stopAreasStopAreaGidDeparturesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns departures from the specified stop area at the specified time.
     * Sample request:        GET /stop-areas/9021014003980000/departures
     * @param {String} stopAreaGid The 16-digit Västtrafik gid of the stop area.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDateTime The start of the time interval for which to get upcoming departures. Must be specified in RFC 3339 format or be null which means that the current time on the server is used.
     * @param {String} opts.platforms Filter results by platform. Multiple platforms are separated by comma. Case sensitive.
     * @param {Number} opts.timeSpanInMinutes The number of minutes from the start time for which to get upcoming departures. Allowed values are between 0 and 1440. (default to 60)
     * @param {Number} opts.maxDeparturesPerLineAndDirection The maximum number of departures for a single line in a specific direction. (default to 2)
     * @param {Number} opts.limit The number of results to return. (default to 10)
     * @param {Number} opts.offset The zero-based start offset of the pagination. (default to 0)
     * @param {Boolean} opts.includeOccupancy Includes occupancy in departure. (default to false)
     * @param {module:api/StopAreasApi~stopAreasStopAreaGidDeparturesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse}
     */
  }, {
    key: "stopAreasStopAreaGidDeparturesGet",
    value: function stopAreasStopAreaGidDeparturesGet(stopAreaGid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'stopAreaGid' is set
      if (stopAreaGid === undefined || stopAreaGid === null) {
        throw new Error("Missing the required parameter 'stopAreaGid' when calling stopAreasStopAreaGidDeparturesGet");
      }
      var pathParams = {
        'stopAreaGid': stopAreaGid
      };
      var queryParams = {
        'startDateTime': opts['startDateTime'],
        'platforms': opts['platforms'],
        'timeSpanInMinutes': opts['timeSpanInMinutes'],
        'maxDeparturesPerLineAndDirection': opts['maxDeparturesPerLineAndDirection'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'includeOccupancy': opts['includeOccupancy']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['auth'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse["default"];
      return this.apiClient.callApi('/stop-areas/{stopAreaGid}/departures', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return StopAreasApi;
}();
exports["default"] = StopAreasApi;