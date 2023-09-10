"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaWebV4ModelsCoordinateApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsCoordinateApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel"));
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
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel</code>.
   * Detailed information about a Public Transport trip leg.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel
   */
  function VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel);
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel();
        if (data.hasOwnProperty('serviceJourneys')) {
          obj['serviceJourneys'] = _ApiClient["default"].convertToType(data['serviceJourneys'], [_VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel["default"]]);
        }
        if (data.hasOwnProperty('callsOnTripLeg')) {
          obj['callsOnTripLeg'] = _ApiClient["default"].convertToType(data['callsOnTripLeg'], [_VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel["default"]]);
        }
        if (data.hasOwnProperty('tripLegCoordinates')) {
          obj['tripLegCoordinates'] = _ApiClient["default"].convertToType(data['tripLegCoordinates'], [_VTApiPlaneraResaWebV4ModelsCoordinateApiModel["default"]]);
        }
        if (data.hasOwnProperty('tariffZones')) {
          obj['tariffZones'] = _ApiClient["default"].convertToType(data['tariffZones'], [_VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel["default"]]);
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
        if (data.hasOwnProperty('journeyLegIndex')) {
          obj['journeyLegIndex'] = _ApiClient["default"].convertToType(data['journeyLegIndex'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      if (data['serviceJourneys']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['serviceJourneys'])) {
          throw new Error("Expected the field `serviceJourneys` to be an array in the JSON data but got " + data['serviceJourneys']);
        }
        // validate the optional field `serviceJourneys` (array)
        var _iterator = _createForOfIteratorHelper(data['serviceJourneys']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      if (data['callsOnTripLeg']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['callsOnTripLeg'])) {
          throw new Error("Expected the field `callsOnTripLeg` to be an array in the JSON data but got " + data['callsOnTripLeg']);
        }
        // validate the optional field `callsOnTripLeg` (array)
        var _iterator2 = _createForOfIteratorHelper(data['callsOnTripLeg']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['tripLegCoordinates']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['tripLegCoordinates'])) {
          throw new Error("Expected the field `tripLegCoordinates` to be an array in the JSON data but got " + data['tripLegCoordinates']);
        }
        // validate the optional field `tripLegCoordinates` (array)
        var _iterator3 = _createForOfIteratorHelper(data['tripLegCoordinates']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;
            _VTApiPlaneraResaWebV4ModelsCoordinateApiModel["default"].validateJSON(_item2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      if (data['tariffZones']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['tariffZones'])) {
          throw new Error("Expected the field `tariffZones` to be an array in the JSON data but got " + data['tariffZones']);
        }
        // validate the optional field `tariffZones` (array)
        var _iterator4 = _createForOfIteratorHelper(data['tariffZones']),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item3 = _step4.value;
            _VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel["default"].validateJSON(_item3);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
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
  return VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel;
}();
/**
 * The service journey for the trip leg.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel>} serviceJourneys
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['serviceJourneys'] = undefined;

/**
 * The calls on the trip leg.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel>} callsOnTripLeg
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['callsOnTripLeg'] = undefined;

/**
 * The coordinates for the trip leg.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel>} tripLegCoordinates
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['tripLegCoordinates'] = undefined;

/**
 * The tariff zones that the trip leg traverses.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel>} tariffZones
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['tariffZones'] = undefined;

/**
 * Flag indicating if the trip leg is cancelled.
 * @member {Boolean} isCancelled
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['isCancelled'] = undefined;

/**
 * Flag indicating if the trip leg is partially cancelled.
 * @member {Boolean} isPartCancelled
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['isPartCancelled'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel} occupancy
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['occupancy'] = undefined;

/**
 * Index of Leg in Journey
 * @member {Number} journeyLegIndex
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel.prototype['journeyLegIndex'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel;
exports["default"] = _default;