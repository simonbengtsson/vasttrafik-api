"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel"));
var _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel"));
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
 * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel</code>.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel
   * @param stopPoint {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel} 
   * @param plannedTime {String} The planned time of the call in RFC 3339 format.
   */
  function VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel(stopPoint, plannedTime) {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel);
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.initialize(this, stopPoint, plannedTime);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel, null, [{
    key: "initialize",
    value: function initialize(obj, stopPoint, plannedTime) {
      obj['stopPoint'] = stopPoint;
      obj['plannedTime'] = plannedTime;
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel();
        if (data.hasOwnProperty('detailsReference')) {
          obj['detailsReference'] = _ApiClient["default"].convertToType(data['detailsReference'], 'String');
        }
        if (data.hasOwnProperty('serviceJourney')) {
          obj['serviceJourney'] = _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel["default"].constructFromObject(data['serviceJourney']);
        }
        if (data.hasOwnProperty('stopPoint')) {
          obj['stopPoint'] = _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel["default"].constructFromObject(data['stopPoint']);
        }
        if (data.hasOwnProperty('plannedTime')) {
          obj['plannedTime'] = _ApiClient["default"].convertToType(data['plannedTime'], 'String');
        }
        if (data.hasOwnProperty('estimatedTime')) {
          obj['estimatedTime'] = _ApiClient["default"].convertToType(data['estimatedTime'], 'String');
        }
        if (data.hasOwnProperty('estimatedOtherwisePlannedTime')) {
          obj['estimatedOtherwisePlannedTime'] = _ApiClient["default"].convertToType(data['estimatedOtherwisePlannedTime'], 'String');
        }
        if (data.hasOwnProperty('isCancelled')) {
          obj['isCancelled'] = _ApiClient["default"].convertToType(data['isCancelled'], 'Boolean');
        }
        if (data.hasOwnProperty('isPartCancelled')) {
          obj['isPartCancelled'] = _ApiClient["default"].convertToType(data['isPartCancelled'], 'Boolean');
        }
        if (data.hasOwnProperty('occupancy')) {
          obj['occupancy'] = _VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel["default"].constructFromObject(data['occupancy']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['detailsReference'] && !(typeof data['detailsReference'] === 'string' || data['detailsReference'] instanceof String)) {
        throw new Error("Expected the field `detailsReference` to be a primitive type in the JSON string but got " + data['detailsReference']);
      }
      // validate the optional field `serviceJourney`
      if (data['serviceJourney']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel["default"].validateJSON(data['serviceJourney']);
      }
      // validate the optional field `stopPoint`
      if (data['stopPoint']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel["default"].validateJSON(data['stopPoint']);
      }
      // ensure the json data is a string
      if (data['plannedTime'] && !(typeof data['plannedTime'] === 'string' || data['plannedTime'] instanceof String)) {
        throw new Error("Expected the field `plannedTime` to be a primitive type in the JSON string but got " + data['plannedTime']);
      }
      // ensure the json data is a string
      if (data['estimatedTime'] && !(typeof data['estimatedTime'] === 'string' || data['estimatedTime'] instanceof String)) {
        throw new Error("Expected the field `estimatedTime` to be a primitive type in the JSON string but got " + data['estimatedTime']);
      }
      // ensure the json data is a string
      if (data['estimatedOtherwisePlannedTime'] && !(typeof data['estimatedOtherwisePlannedTime'] === 'string' || data['estimatedOtherwisePlannedTime'] instanceof String)) {
        throw new Error("Expected the field `estimatedOtherwisePlannedTime` to be a primitive type in the JSON string but got " + data['estimatedOtherwisePlannedTime']);
      }
      // validate the optional field `occupancy`
      if (data['occupancy']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel["default"].validateJSON(data['occupancy']);
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel;
}();
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.RequiredProperties = ["stopPoint", "plannedTime"];

/**
 * A reference that should be used when getting detailed information about the journey.
 * @member {String} detailsReference
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.prototype['detailsReference'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel} serviceJourney
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.prototype['serviceJourney'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel} stopPoint
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.prototype['stopPoint'] = undefined;

/**
 * The planned time of the call in RFC 3339 format.
 * @member {String} plannedTime
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.prototype['plannedTime'] = undefined;

/**
 * The estimated time of the call in RFC 3339 format.
 * @member {String} estimatedTime
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.prototype['estimatedTime'] = undefined;

/**
 * The best known time of the call in RFC 3339 format. Is EstimatedTime if exists, otherwise PlannedTime.
 * @member {String} estimatedOtherwisePlannedTime
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.prototype['estimatedOtherwisePlannedTime'] = undefined;

/**
 * Flag indicating if the departure or arrival is cancelled.
 * @member {Boolean} isCancelled
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.prototype['isCancelled'] = undefined;

/**
 * Flag indicating if the departure or arrival is partially cancelled.
 * @member {Boolean} isPartCancelled
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.prototype['isPartCancelled'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel} occupancy
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel.prototype['occupancy'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel;
exports["default"] = _default;