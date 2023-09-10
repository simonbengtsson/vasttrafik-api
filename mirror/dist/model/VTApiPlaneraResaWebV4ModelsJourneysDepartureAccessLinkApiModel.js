"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaCoreModelsNote = _interopRequireDefault(require("./VTApiPlaneraResaCoreModelsNote"));
var _VTApiPlaneraResaCoreModelsTransportMode = _interopRequireDefault(require("./VTApiPlaneraResaCoreModelsTransportMode"));
var _VTApiPlaneraResaCoreModelsTransportSubMode = _interopRequireDefault(require("./VTApiPlaneraResaCoreModelsTransportSubMode"));
var _VTApiPlaneraResaWebV4ModelsCoordinateApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsCoordinateApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneysCallApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneysCallApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel"));
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
 * The VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel</code>.
   * Information about a walk, bike or car link from origin to first public transport trip leg.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel
   */
  function VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel);
    VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel();
        if (data.hasOwnProperty('transportMode')) {
          obj['transportMode'] = _VTApiPlaneraResaCoreModelsTransportMode["default"].constructFromObject(data['transportMode']);
        }
        if (data.hasOwnProperty('transportSubMode')) {
          obj['transportSubMode'] = _VTApiPlaneraResaCoreModelsTransportSubMode["default"].constructFromObject(data['transportSubMode']);
        }
        if (data.hasOwnProperty('origin')) {
          obj['origin'] = _VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel["default"].constructFromObject(data['origin']);
        }
        if (data.hasOwnProperty('destination')) {
          obj['destination'] = _VTApiPlaneraResaWebV4ModelsJourneysCallApiModel["default"].constructFromObject(data['destination']);
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], [_VTApiPlaneraResaCoreModelsNote["default"]]);
        }
        if (data.hasOwnProperty('distanceInMeters')) {
          obj['distanceInMeters'] = _ApiClient["default"].convertToType(data['distanceInMeters'], 'Number');
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
        if (data.hasOwnProperty('estimatedNumberOfSteps')) {
          obj['estimatedNumberOfSteps'] = _ApiClient["default"].convertToType(data['estimatedNumberOfSteps'], 'Number');
        }
        if (data.hasOwnProperty('linkCoordinates')) {
          obj['linkCoordinates'] = _ApiClient["default"].convertToType(data['linkCoordinates'], [_VTApiPlaneraResaWebV4ModelsCoordinateApiModel["default"]]);
        }
        if (data.hasOwnProperty('segments')) {
          obj['segments'] = _ApiClient["default"].convertToType(data['segments'], [_VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `origin`
      if (data['origin']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel["default"].validateJSON(data['origin']);
      }
      // validate the optional field `destination`
      if (data['destination']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneysCallApiModel["default"].validateJSON(data['destination']);
      }
      if (data['notes']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['notes'])) {
          throw new Error("Expected the field `notes` to be an array in the JSON data but got " + data['notes']);
        }
        // validate the optional field `notes` (array)
        var _iterator = _createForOfIteratorHelper(data['notes']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _VTApiPlaneraResaCoreModelsNote["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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
      if (data['linkCoordinates']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['linkCoordinates'])) {
          throw new Error("Expected the field `linkCoordinates` to be an array in the JSON data but got " + data['linkCoordinates']);
        }
        // validate the optional field `linkCoordinates` (array)
        var _iterator2 = _createForOfIteratorHelper(data['linkCoordinates']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _VTApiPlaneraResaWebV4ModelsCoordinateApiModel["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['segments']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['segments'])) {
          throw new Error("Expected the field `segments` to be an array in the JSON data but got " + data['segments']);
        }
        // validate the optional field `segments` (array)
        var _iterator3 = _createForOfIteratorHelper(data['segments']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;
            _VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel["default"].validateJSON(_item2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel;
}();
/**
 * @member {module:model/VTApiPlaneraResaCoreModelsTransportMode} transportMode
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['transportMode'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaCoreModelsTransportSubMode} transportSubMode
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['transportSubMode'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel} origin
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['origin'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysCallApiModel} destination
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['destination'] = undefined;

/**
 * An ordered list (most important first) of notes related to the access link.
 * @member {Array.<module:model/VTApiPlaneraResaCoreModelsNote>} notes
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['notes'] = undefined;

/**
 * Distance in meters.
 * @member {Number} distanceInMeters
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['distanceInMeters'] = undefined;

/**
 * The planned departure time in RFC 3339 format.
 * @member {String} plannedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['plannedDepartureTime'] = undefined;

/**
 * The planned arrival time in RFC 3339 format.
 * @member {String} plannedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['plannedArrivalTime'] = undefined;

/**
 * The planned duration in minutes.
 * @member {Number} plannedDurationInMinutes
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['plannedDurationInMinutes'] = undefined;

/**
 * The estimated departure time in RFC 3339 format, if available.
 * @member {String} estimatedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['estimatedDepartureTime'] = undefined;

/**
 * The estimated arrival time in RFC 3339 format, if available.
 * @member {String} estimatedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['estimatedArrivalTime'] = undefined;

/**
 * The estimated duration in minutes, if available.
 * @member {Number} estimatedDurationInMinutes
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['estimatedDurationInMinutes'] = undefined;

/**
 * Number of steps based on the distance and an estimated step length of 0.65 meters.
 * @member {Number} estimatedNumberOfSteps
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['estimatedNumberOfSteps'] = undefined;

/**
 * The coordinates for the link.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel>} linkCoordinates
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['linkCoordinates'] = undefined;

/**
 * The segments that make up this link.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel>} segments
 */
VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.prototype['segments'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel;
exports["default"] = _default;