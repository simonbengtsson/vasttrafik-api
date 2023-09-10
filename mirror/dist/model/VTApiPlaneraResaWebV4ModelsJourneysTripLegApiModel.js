"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaCoreModelsNote = _interopRequireDefault(require("./VTApiPlaneraResaCoreModelsNote"));
var _VTApiPlaneraResaWebV4ModelsJourneysCallApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneysCallApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel"));
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
 * The VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel</code>.
   * Information about a journey trip leg.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel
   * @param origin {module:model/VTApiPlaneraResaWebV4ModelsJourneysCallApiModel} 
   * @param destination {module:model/VTApiPlaneraResaWebV4ModelsJourneysCallApiModel} 
   * @param isCancelled {Boolean} Flag indicating if the trip leg is cancelled.
   */
  function VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel(origin, destination, isCancelled) {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel);
    VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.initialize(this, origin, destination, isCancelled);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel, null, [{
    key: "initialize",
    value: function initialize(obj, origin, destination, isCancelled) {
      obj['origin'] = origin;
      obj['destination'] = destination;
      obj['isCancelled'] = isCancelled;
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel();
        if (data.hasOwnProperty('origin')) {
          obj['origin'] = _VTApiPlaneraResaWebV4ModelsJourneysCallApiModel["default"].constructFromObject(data['origin']);
        }
        if (data.hasOwnProperty('destination')) {
          obj['destination'] = _VTApiPlaneraResaWebV4ModelsJourneysCallApiModel["default"].constructFromObject(data['destination']);
        }
        if (data.hasOwnProperty('isCancelled')) {
          obj['isCancelled'] = _ApiClient["default"].convertToType(data['isCancelled'], 'Boolean');
        }
        if (data.hasOwnProperty('isPartCancelled')) {
          obj['isPartCancelled'] = _ApiClient["default"].convertToType(data['isPartCancelled'], 'Boolean');
        }
        if (data.hasOwnProperty('serviceJourney')) {
          obj['serviceJourney'] = _VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel["default"].constructFromObject(data['serviceJourney']);
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], [_VTApiPlaneraResaCoreModelsNote["default"]]);
        }
        if (data.hasOwnProperty('estimatedDistanceInMeters')) {
          obj['estimatedDistanceInMeters'] = _ApiClient["default"].convertToType(data['estimatedDistanceInMeters'], 'Number');
        }
        if (data.hasOwnProperty('plannedConnectingTimeInMinutes')) {
          obj['plannedConnectingTimeInMinutes'] = _ApiClient["default"].convertToType(data['plannedConnectingTimeInMinutes'], 'Number');
        }
        if (data.hasOwnProperty('estimatedConnectingTimeInMinutes')) {
          obj['estimatedConnectingTimeInMinutes'] = _ApiClient["default"].convertToType(data['estimatedConnectingTimeInMinutes'], 'Number');
        }
        if (data.hasOwnProperty('isRiskOfMissingConnection')) {
          obj['isRiskOfMissingConnection'] = _ApiClient["default"].convertToType(data['isRiskOfMissingConnection'], 'Boolean');
        }
        if (data.hasOwnProperty('plannedDepartureTime')) {
          obj['plannedDepartureTime'] = _ApiClient["default"].convertToType(data['plannedDepartureTime'], 'String');
        }
        if (data.hasOwnProperty('plannedArrivalTime')) {
          obj['plannedArrivalTime'] = _ApiClient["default"].convertToType(data['plannedArrivalTime'], 'String');
        }
        if (data.hasOwnProperty('plannedDurationInMinutes')) {
          obj['plannedDurationInMinutes'] = _ApiClient["default"].convertToType(data['plannedDurationInMinutes'], 'Number');
        }
        if (data.hasOwnProperty('estimatedDepartureTime')) {
          obj['estimatedDepartureTime'] = _ApiClient["default"].convertToType(data['estimatedDepartureTime'], 'String');
        }
        if (data.hasOwnProperty('estimatedArrivalTime')) {
          obj['estimatedArrivalTime'] = _ApiClient["default"].convertToType(data['estimatedArrivalTime'], 'String');
        }
        if (data.hasOwnProperty('estimatedDurationInMinutes')) {
          obj['estimatedDurationInMinutes'] = _ApiClient["default"].convertToType(data['estimatedDurationInMinutes'], 'Number');
        }
        if (data.hasOwnProperty('estimatedOtherwisePlannedArrivalTime')) {
          obj['estimatedOtherwisePlannedArrivalTime'] = _ApiClient["default"].convertToType(data['estimatedOtherwisePlannedArrivalTime'], 'String');
        }
        if (data.hasOwnProperty('estimatedOtherwisePlannedDepartureTime')) {
          obj['estimatedOtherwisePlannedDepartureTime'] = _ApiClient["default"].convertToType(data['estimatedOtherwisePlannedDepartureTime'], 'String');
        }
        if (data.hasOwnProperty('occupancy')) {
          obj['occupancy'] = _VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel["default"].constructFromObject(data['occupancy']);
        }
        if (data.hasOwnProperty('journeyLegIndex')) {
          obj['journeyLegIndex'] = _ApiClient["default"].convertToType(data['journeyLegIndex'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `origin`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['origin']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneysCallApiModel["default"].validateJSON(data['origin']);
      }
      // validate the optional field `destination`
      if (data['destination']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneysCallApiModel["default"].validateJSON(data['destination']);
      }
      // validate the optional field `serviceJourney`
      if (data['serviceJourney']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel["default"].validateJSON(data['serviceJourney']);
      }
      if (data['notes']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['notes'])) {
          throw new Error("Expected the field `notes` to be an array in the JSON data but got " + data['notes']);
        }
        // validate the optional field `notes` (array)
        var _iterator2 = _createForOfIteratorHelper(data['notes']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _VTApiPlaneraResaCoreModelsNote["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['plannedDepartureTime'] && !(typeof data['plannedDepartureTime'] === 'string' || data['plannedDepartureTime'] instanceof String)) {
        throw new Error("Expected the field `plannedDepartureTime` to be a primitive type in the JSON string but got " + data['plannedDepartureTime']);
      }
      // ensure the json data is a string
      if (data['plannedArrivalTime'] && !(typeof data['plannedArrivalTime'] === 'string' || data['plannedArrivalTime'] instanceof String)) {
        throw new Error("Expected the field `plannedArrivalTime` to be a primitive type in the JSON string but got " + data['plannedArrivalTime']);
      }
      // ensure the json data is a string
      if (data['estimatedDepartureTime'] && !(typeof data['estimatedDepartureTime'] === 'string' || data['estimatedDepartureTime'] instanceof String)) {
        throw new Error("Expected the field `estimatedDepartureTime` to be a primitive type in the JSON string but got " + data['estimatedDepartureTime']);
      }
      // ensure the json data is a string
      if (data['estimatedArrivalTime'] && !(typeof data['estimatedArrivalTime'] === 'string' || data['estimatedArrivalTime'] instanceof String)) {
        throw new Error("Expected the field `estimatedArrivalTime` to be a primitive type in the JSON string but got " + data['estimatedArrivalTime']);
      }
      // ensure the json data is a string
      if (data['estimatedOtherwisePlannedArrivalTime'] && !(typeof data['estimatedOtherwisePlannedArrivalTime'] === 'string' || data['estimatedOtherwisePlannedArrivalTime'] instanceof String)) {
        throw new Error("Expected the field `estimatedOtherwisePlannedArrivalTime` to be a primitive type in the JSON string but got " + data['estimatedOtherwisePlannedArrivalTime']);
      }
      // ensure the json data is a string
      if (data['estimatedOtherwisePlannedDepartureTime'] && !(typeof data['estimatedOtherwisePlannedDepartureTime'] === 'string' || data['estimatedOtherwisePlannedDepartureTime'] instanceof String)) {
        throw new Error("Expected the field `estimatedOtherwisePlannedDepartureTime` to be a primitive type in the JSON string but got " + data['estimatedOtherwisePlannedDepartureTime']);
      }
      // validate the optional field `occupancy`
      if (data['occupancy']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel["default"].validateJSON(data['occupancy']);
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel;
}();
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.RequiredProperties = ["origin", "destination", "isCancelled"];

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysCallApiModel} origin
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['origin'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysCallApiModel} destination
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['destination'] = undefined;

/**
 * Flag indicating if the trip leg is cancelled.
 * @member {Boolean} isCancelled
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['isCancelled'] = undefined;

/**
 * Flag indicating if the trip leg is partially cancelled.
 * @member {Boolean} isPartCancelled
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['isPartCancelled'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel} serviceJourney
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['serviceJourney'] = undefined;

/**
 * An ordered list (most important first) of notes related to the trip leg.
 * @member {Array.<module:model/VTApiPlaneraResaCoreModelsNote>} notes
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['notes'] = undefined;

/**
 * Estimated distance in meters. Only for transport mode Walk.
 * @member {Number} estimatedDistanceInMeters
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['estimatedDistanceInMeters'] = undefined;

/**
 * The planned (according to timetable) connecting time in minutes relative to  the previous public transport trip leg (if any).
 * @member {Number} plannedConnectingTimeInMinutes
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['plannedConnectingTimeInMinutes'] = undefined;

/**
 * The estimated (according to real-time data) connecting time in minutes relative to  the previous public transport trip leg (if any).
 * @member {Number} estimatedConnectingTimeInMinutes
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['estimatedConnectingTimeInMinutes'] = undefined;

/**
 * Flag indicating that there is less than 5 minutes margin between arriving at the  origin stop point and the departure from that stop point.
 * @member {Boolean} isRiskOfMissingConnection
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['isRiskOfMissingConnection'] = undefined;

/**
 * The planned departure time in RFC 3339 format.
 * @member {String} plannedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['plannedDepartureTime'] = undefined;

/**
 * The planned arrival time in RFC 3339 format.
 * @member {String} plannedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['plannedArrivalTime'] = undefined;

/**
 * The planned duration in minutes.
 * @member {Number} plannedDurationInMinutes
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['plannedDurationInMinutes'] = undefined;

/**
 * The estimated departure time in RFC 3339 format, if available.
 * @member {String} estimatedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['estimatedDepartureTime'] = undefined;

/**
 * The estimated arrival time in RFC 3339 format, if available.
 * @member {String} estimatedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['estimatedArrivalTime'] = undefined;

/**
 * The estimated duration in minutes, if available.
 * @member {Number} estimatedDurationInMinutes
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['estimatedDurationInMinutes'] = undefined;

/**
 * The best known time of the arrival in RFC 3339 format. Is EstimatedArrivalTime if exists, otherwise PlannedArrivalTime.
 * @member {String} estimatedOtherwisePlannedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['estimatedOtherwisePlannedArrivalTime'] = undefined;

/**
 * The best known time of the departure in RFC 3339 format. Is EstimatedDepartureTime if exists, otherwise PlannedDepartureTime.
 * @member {String} estimatedOtherwisePlannedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['estimatedOtherwisePlannedDepartureTime'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel} occupancy
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['occupancy'] = undefined;

/**
 * Index of Leg in Journey
 * @member {Number} journeyLegIndex
 */
VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.prototype['journeyLegIndex'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel;
exports["default"] = _default;