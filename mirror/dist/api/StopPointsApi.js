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
* StopPoints service.
* @module api/StopPointsApi
* @version v4
*/
var StopPointsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StopPointsApi. 
  * @alias module:api/StopPointsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StopPointsApi(apiClient) {
    _classCallCheck(this, StopPointsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet operation.
   * @callback module:api/StopPointsApi~stopPointsStopPointGidArrivalsDetailsReferenceDetailsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns details about an arrival.
   * Sample request:        GET /stop-points/9022014001760003/arrivals/{detailsReference}/details?includes=servicejourneycalls
   * @param {String} detailsReference The reference to the service journey, received from the arrivals call. A detailsReference is only valid during the same day as it was generated.
   * @param {String} stopPointGid 
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType>} opts.includes The additional information to include in the response.
   * @param {module:api/StopPointsApi~stopPointsStopPointGidArrivalsDetailsReferenceDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel}
   */
  _createClass(StopPointsApi, [{
    key: "stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet",
    value: function stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet(detailsReference, stopPointGid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'detailsReference' is set
      if (detailsReference === undefined || detailsReference === null) {
        throw new Error("Missing the required parameter 'detailsReference' when calling stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet");
      }
      // verify the required parameter 'stopPointGid' is set
      if (stopPointGid === undefined || stopPointGid === null) {
        throw new Error("Missing the required parameter 'stopPointGid' when calling stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet");
      }
      var pathParams = {
        'detailsReference': detailsReference,
        'stopPointGid': stopPointGid
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
      return this.apiClient.callApi('/stop-points/{stopPointGid}/arrivals/{detailsReference}/details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the stopPointsStopPointGidArrivalsGet operation.
     * @callback module:api/StopPointsApi~stopPointsStopPointGidArrivalsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns arrivals to the specified stop point at the specified time.
     * Sample request:        GET /stop-points/9022014001760003/arrivals
     * @param {String} stopPointGid The 16-digit Västtrafik gid of the stop point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDateTime The start of the time interval for which to get upcoming arrivals. Must be specified in RFC 3339 format or be null which means that the current time on the server is used.
     * @param {Number} opts.timeSpanInMinutes The number of minutes from the start time for which to get upcoming arrivals. Allowed values are between 0 and 1440. (default to 60)
     * @param {Number} opts.maxArrivalsPerLineAndDirection The maximum number of arrivals for a single line in a specific direction. (default to 2)
     * @param {Number} opts.limit The number of results to return. (default to 10)
     * @param {Number} opts.offset The zero-based start offset of the pagination. (default to 0)
     * @param {module:api/StopPointsApi~stopPointsStopPointGidArrivalsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse}
     */
  }, {
    key: "stopPointsStopPointGidArrivalsGet",
    value: function stopPointsStopPointGidArrivalsGet(stopPointGid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'stopPointGid' is set
      if (stopPointGid === undefined || stopPointGid === null) {
        throw new Error("Missing the required parameter 'stopPointGid' when calling stopPointsStopPointGidArrivalsGet");
      }
      var pathParams = {
        'stopPointGid': stopPointGid
      };
      var queryParams = {
        'startDateTime': opts['startDateTime'],
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
      return this.apiClient.callApi('/stop-points/{stopPointGid}/arrivals', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet operation.
     * @callback module:api/StopPointsApi~stopPointsStopPointGidDeparturesDetailsReferenceDetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns details about a departure.
     * Sample request:        GET /stop-points/9022014001760003/departures/{detailsReference}/details?includes=servicejourneycalls
     * @param {String} detailsReference The reference to the service journey, received from the departures call. A detailsReference is only valid during the same day as it was generated.
     * @param {String} stopPointGid 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType>} opts.includes The additional information to include in the response.
     * @param {module:api/StopPointsApi~stopPointsStopPointGidDeparturesDetailsReferenceDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel}
     */
  }, {
    key: "stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet",
    value: function stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet(detailsReference, stopPointGid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'detailsReference' is set
      if (detailsReference === undefined || detailsReference === null) {
        throw new Error("Missing the required parameter 'detailsReference' when calling stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet");
      }
      // verify the required parameter 'stopPointGid' is set
      if (stopPointGid === undefined || stopPointGid === null) {
        throw new Error("Missing the required parameter 'stopPointGid' when calling stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet");
      }
      var pathParams = {
        'detailsReference': detailsReference,
        'stopPointGid': stopPointGid
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
      return this.apiClient.callApi('/stop-points/{stopPointGid}/departures/{detailsReference}/details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the stopPointsStopPointGidDeparturesGet operation.
     * @callback module:api/StopPointsApi~stopPointsStopPointGidDeparturesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns departures from the specified stop point at the specified time.
     * Sample request:        GET /stop-points/9022014001760003/departures
     * @param {String} stopPointGid The 16-digit Västtrafik gid of the stop point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDateTime The start of the time interval for which to get upcoming departures. Must be specified in RFC 3339 format or be null which means that the current time on the server is used.
     * @param {Number} opts.timeSpanInMinutes The number of minutes from the start time for which to get upcoming departures. Allowed values are between 0 and 1440. (default to 60)
     * @param {Number} opts.maxDeparturesPerLineAndDirection The maximum number of departures for a single line in a specific direction. (default to 2)
     * @param {Number} opts.limit The number of results to return. (default to 10)
     * @param {Number} opts.offset The zero-based start offset of the pagination. (default to 0)
     * @param {Boolean} opts.includeOccupancy Includes occupancy in departure. (default to false)
     * @param {module:api/StopPointsApi~stopPointsStopPointGidDeparturesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse}
     */
  }, {
    key: "stopPointsStopPointGidDeparturesGet",
    value: function stopPointsStopPointGidDeparturesGet(stopPointGid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'stopPointGid' is set
      if (stopPointGid === undefined || stopPointGid === null) {
        throw new Error("Missing the required parameter 'stopPointGid' when calling stopPointsStopPointGidDeparturesGet");
      }
      var pathParams = {
        'stopPointGid': stopPointGid
      };
      var queryParams = {
        'startDateTime': opts['startDateTime'],
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
      return this.apiClient.callApi('/stop-points/{stopPointGid}/departures', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return StopPointsApi;
}();
exports["default"] = StopPointsApi;