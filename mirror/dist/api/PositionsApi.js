"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaCoreModelsPositionTransportMode = _interopRequireDefault(require("../model/VTApiPlaneraResaCoreModelsPositionTransportMode"));
var _VTApiPlaneraResaWebV4ModelsApiError = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsApiError"));
var _VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel = _interopRequireDefault(require("../model/VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel"));
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
* Positions service.
* @module api/PositionsApi
* @version v4
*/
var PositionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PositionsApi. 
  * @alias module:api/PositionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PositionsApi(apiClient) {
    _classCallCheck(this, PositionsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the positionsGet operation.
   * @callback module:api/PositionsApi~positionsGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns journey positions within a bounding box
   * Sample request:        GET /positions?lowerLeftLat=57.721723&lowerLeftLong=12.011882&upperRightLat=57.737549&upperRightLong=12.039268&limit=100
   * @param {Number} lowerLeftLat Lower left latitude of bounding box.
   * @param {Number} lowerLeftLong Lower left longitude of bounding box.
   * @param {Number} upperRightLat Upper right latitude of bounding box.
   * @param {Number} upperRightLong Upper right longitude of bounding box.
   * @param {Object} opts Optional parameters
   * @param {Array.<module:model/VTApiPlaneraResaCoreModelsPositionTransportMode>} opts.transportModes The transport modes to include when searching for journeys, if none specified all transport modes are included.
   * @param {Array.<String>} opts.detailsReferences Filter journeys by one or more journey details reference.
   * @param {Array.<String>} opts.lineDesignations Only journeys running the given lineDesignations (case sensitive) are part of the result.
   * @param {Number} opts.limit Maximum number of journeys in response. Range from 1 to 200. Defaults to 100 (default to 100)
   * @param {module:api/PositionsApi~positionsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel>}
   */
  _createClass(PositionsApi, [{
    key: "positionsGet",
    value: function positionsGet(lowerLeftLat, lowerLeftLong, upperRightLat, upperRightLong, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'lowerLeftLat' is set
      if (lowerLeftLat === undefined || lowerLeftLat === null) {
        throw new Error("Missing the required parameter 'lowerLeftLat' when calling positionsGet");
      }
      // verify the required parameter 'lowerLeftLong' is set
      if (lowerLeftLong === undefined || lowerLeftLong === null) {
        throw new Error("Missing the required parameter 'lowerLeftLong' when calling positionsGet");
      }
      // verify the required parameter 'upperRightLat' is set
      if (upperRightLat === undefined || upperRightLat === null) {
        throw new Error("Missing the required parameter 'upperRightLat' when calling positionsGet");
      }
      // verify the required parameter 'upperRightLong' is set
      if (upperRightLong === undefined || upperRightLong === null) {
        throw new Error("Missing the required parameter 'upperRightLong' when calling positionsGet");
      }
      var pathParams = {};
      var queryParams = {
        'lowerLeftLat': lowerLeftLat,
        'lowerLeftLong': lowerLeftLong,
        'upperRightLat': upperRightLat,
        'upperRightLong': upperRightLong,
        'transportModes': this.apiClient.buildCollectionParam(opts['transportModes'], 'multi'),
        'detailsReferences': this.apiClient.buildCollectionParam(opts['detailsReferences'], 'multi'),
        'lineDesignations': this.apiClient.buildCollectionParam(opts['lineDesignations'], 'multi'),
        'limit': opts['limit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['auth'];
      var contentTypes = [];
      var accepts = ['text/plain', 'application/json', 'text/json'];
      var returnType = [_VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel["default"]];
      return this.apiClient.callApi('/positions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return PositionsApi;
}();
exports["default"] = PositionsApi;