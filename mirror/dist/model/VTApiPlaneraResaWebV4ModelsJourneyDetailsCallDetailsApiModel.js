"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel"));
var _VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel</code>.
   * Information about a call on the trip leg.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel
   * @param stopPoint {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel} 
   */
  function VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel(stopPoint) {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel);
    VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.initialize(this, stopPoint);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel, null, [{
    key: "initialize",
    value: function initialize(obj, stopPoint) {
      obj['stopPoint'] = stopPoint;
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel();
        if (data.hasOwnProperty('stopPoint')) {
          obj['stopPoint'] = _VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel["default"].constructFromObject(data['stopPoint']);
        }
        if (data.hasOwnProperty('plannedArrivalTime')) {
          obj['plannedArrivalTime'] = _ApiClient["default"].convertToType(data['plannedArrivalTime'], 'String');
        }
        if (data.hasOwnProperty('plannedDepartureTime')) {
          obj['plannedDepartureTime'] = _ApiClient["default"].convertToType(data['plannedDepartureTime'], 'String');
        }
        if (data.hasOwnProperty('estimatedArrivalTime')) {
          obj['estimatedArrivalTime'] = _ApiClient["default"].convertToType(data['estimatedArrivalTime'], 'String');
        }
        if (data.hasOwnProperty('estimatedDepartureTime')) {
          obj['estimatedDepartureTime'] = _ApiClient["default"].convertToType(data['estimatedDepartureTime'], 'String');
        }
        if (data.hasOwnProperty('estimatedOtherwisePlannedArrivalTime')) {
          obj['estimatedOtherwisePlannedArrivalTime'] = _ApiClient["default"].convertToType(data['estimatedOtherwisePlannedArrivalTime'], 'String');
        }
        if (data.hasOwnProperty('estimatedOtherwisePlannedDepartureTime')) {
          obj['estimatedOtherwisePlannedDepartureTime'] = _ApiClient["default"].convertToType(data['estimatedOtherwisePlannedDepartureTime'], 'String');
        }
        if (data.hasOwnProperty('plannedPlatform')) {
          obj['plannedPlatform'] = _ApiClient["default"].convertToType(data['plannedPlatform'], 'String');
        }
        if (data.hasOwnProperty('estimatedPlatform')) {
          obj['estimatedPlatform'] = _ApiClient["default"].convertToType(data['estimatedPlatform'], 'String');
        }
        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }
        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'String');
        }
        if (data.hasOwnProperty('isOnTripLeg')) {
          obj['isOnTripLeg'] = _ApiClient["default"].convertToType(data['isOnTripLeg'], 'Boolean');
        }
        if (data.hasOwnProperty('isTripLegStart')) {
          obj['isTripLegStart'] = _ApiClient["default"].convertToType(data['isTripLegStart'], 'Boolean');
        }
        if (data.hasOwnProperty('isTripLegStop')) {
          obj['isTripLegStop'] = _ApiClient["default"].convertToType(data['isTripLegStop'], 'Boolean');
        }
        if (data.hasOwnProperty('tariffZones')) {
          obj['tariffZones'] = _ApiClient["default"].convertToType(data['tariffZones'], [_VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel["default"]]);
        }
        if (data.hasOwnProperty('occupancy')) {
          obj['occupancy'] = _VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel["default"].constructFromObject(data['occupancy']);
        }
        if (data.hasOwnProperty('isCancelled')) {
          obj['isCancelled'] = _ApiClient["default"].convertToType(data['isCancelled'], 'Boolean');
        }
        if (data.hasOwnProperty('isDepartureCancelled')) {
          obj['isDepartureCancelled'] = _ApiClient["default"].convertToType(data['isDepartureCancelled'], 'Boolean');
        }
        if (data.hasOwnProperty('isArrivalCancelled')) {
          obj['isArrivalCancelled'] = _ApiClient["default"].convertToType(data['isArrivalCancelled'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `stopPoint`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['stopPoint']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel["default"].validateJSON(data['stopPoint']);
      }
      // ensure the json data is a string
      if (data['plannedArrivalTime'] && !(typeof data['plannedArrivalTime'] === 'string' || data['plannedArrivalTime'] instanceof String)) {
        throw new Error("Expected the field `plannedArrivalTime` to be a primitive type in the JSON string but got " + data['plannedArrivalTime']);
      }
      // ensure the json data is a string
      if (data['plannedDepartureTime'] && !(typeof data['plannedDepartureTime'] === 'string' || data['plannedDepartureTime'] instanceof String)) {
        throw new Error("Expected the field `plannedDepartureTime` to be a primitive type in the JSON string but got " + data['plannedDepartureTime']);
      }
      // ensure the json data is a string
      if (data['estimatedArrivalTime'] && !(typeof data['estimatedArrivalTime'] === 'string' || data['estimatedArrivalTime'] instanceof String)) {
        throw new Error("Expected the field `estimatedArrivalTime` to be a primitive type in the JSON string but got " + data['estimatedArrivalTime']);
      }
      // ensure the json data is a string
      if (data['estimatedDepartureTime'] && !(typeof data['estimatedDepartureTime'] === 'string' || data['estimatedDepartureTime'] instanceof String)) {
        throw new Error("Expected the field `estimatedDepartureTime` to be a primitive type in the JSON string but got " + data['estimatedDepartureTime']);
      }
      // ensure the json data is a string
      if (data['estimatedOtherwisePlannedArrivalTime'] && !(typeof data['estimatedOtherwisePlannedArrivalTime'] === 'string' || data['estimatedOtherwisePlannedArrivalTime'] instanceof String)) {
        throw new Error("Expected the field `estimatedOtherwisePlannedArrivalTime` to be a primitive type in the JSON string but got " + data['estimatedOtherwisePlannedArrivalTime']);
      }
      // ensure the json data is a string
      if (data['estimatedOtherwisePlannedDepartureTime'] && !(typeof data['estimatedOtherwisePlannedDepartureTime'] === 'string' || data['estimatedOtherwisePlannedDepartureTime'] instanceof String)) {
        throw new Error("Expected the field `estimatedOtherwisePlannedDepartureTime` to be a primitive type in the JSON string but got " + data['estimatedOtherwisePlannedDepartureTime']);
      }
      // ensure the json data is a string
      if (data['plannedPlatform'] && !(typeof data['plannedPlatform'] === 'string' || data['plannedPlatform'] instanceof String)) {
        throw new Error("Expected the field `plannedPlatform` to be a primitive type in the JSON string but got " + data['plannedPlatform']);
      }
      // ensure the json data is a string
      if (data['estimatedPlatform'] && !(typeof data['estimatedPlatform'] === 'string' || data['estimatedPlatform'] instanceof String)) {
        throw new Error("Expected the field `estimatedPlatform` to be a primitive type in the JSON string but got " + data['estimatedPlatform']);
      }
      // ensure the json data is a string
      if (data['index'] && !(typeof data['index'] === 'string' || data['index'] instanceof String)) {
        throw new Error("Expected the field `index` to be a primitive type in the JSON string but got " + data['index']);
      }
      if (data['tariffZones']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['tariffZones'])) {
          throw new Error("Expected the field `tariffZones` to be an array in the JSON data but got " + data['tariffZones']);
        }
        // validate the optional field `tariffZones` (array)
        var _iterator2 = _createForOfIteratorHelper(data['tariffZones']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // validate the optional field `occupancy`
      if (data['occupancy']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel["default"].validateJSON(data['occupancy']);
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel;
}();
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.RequiredProperties = ["stopPoint"];

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel} stopPoint
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['stopPoint'] = undefined;

/**
 * The planned arrival time for the call in RFC 3339 format.
 * @member {String} plannedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['plannedArrivalTime'] = undefined;

/**
 * The planned departure time for the call in RFC 3339 format.
 * @member {String} plannedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['plannedDepartureTime'] = undefined;

/**
 * The estimated arrival time for the call in RFC 3339 format.
 * @member {String} estimatedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['estimatedArrivalTime'] = undefined;

/**
 * The estimated departure time for the call in RFC 3339 format.
 * @member {String} estimatedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['estimatedDepartureTime'] = undefined;

/**
 * The best known time of the call in RFC 3339 format. Is EstimatedArrivalTime if exists, otherwise PlannedArrivalTime.
 * @member {String} estimatedOtherwisePlannedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['estimatedOtherwisePlannedArrivalTime'] = undefined;

/**
 * The best known time of the call in RFC 3339 format. Is EstimatedDepartureTime if exists, otherwise PlannedDepartureTime.
 * @member {String} estimatedOtherwisePlannedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['estimatedOtherwisePlannedDepartureTime'] = undefined;

/**
 * The planned platform of the call.
 * @member {String} plannedPlatform
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['plannedPlatform'] = undefined;

/**
 * The estimated platform of the call.
 * @member {String} estimatedPlatform
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['estimatedPlatform'] = undefined;

/**
 * The latitude of the stop point of the call.
 * @member {Number} latitude
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['latitude'] = undefined;

/**
 * The longitude of the stop point of the call.
 * @member {Number} longitude
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['longitude'] = undefined;

/**
 * The index of the stop point of the call.
 * @member {String} index
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['index'] = undefined;

/**
 * The call is on the trip leg.
 * @member {Boolean} isOnTripLeg
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['isOnTripLeg'] = undefined;

/**
 * The call is the first on the trip leg.
 * @member {Boolean} isTripLegStart
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['isTripLegStart'] = undefined;

/**
 * The call is the last on the trip leg.
 * @member {Boolean} isTripLegStop
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['isTripLegStop'] = undefined;

/**
 * The primary tariff zone of the call. A call can be related to a stop area with multiple tariff zones  and this is the zone that for example should be displayed in overviews etc.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel>} tariffZones
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['tariffZones'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel} occupancy
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['occupancy'] = undefined;

/**
 * Flag indicating if the call is cancelled.
 * @member {Boolean} isCancelled
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['isCancelled'] = undefined;

/**
 * Flag indicating if the departure is cancelled.
 * @member {Boolean} isDepartureCancelled
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['isDepartureCancelled'] = undefined;

/**
 * Flag indicating if the arrival is cancelled.
 * @member {Boolean} isArrivalCancelled
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.prototype['isArrivalCancelled'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel;
exports["default"] = _default;