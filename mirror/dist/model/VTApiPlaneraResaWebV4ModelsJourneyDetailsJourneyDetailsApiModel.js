"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsArrivalAccessLinkApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsArrivalAccessLinkApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsConnectionLinkApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsConnectionLinkApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsDepartureAccessLinkApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsDepartureAccessLinkApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsDestinationLinkApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsDestinationLinkApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel"));
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
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel</code>.
   * Detailed information about a journey.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel
   */
  function VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel);
    VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel();
        if (data.hasOwnProperty('departureAccessLink')) {
          obj['departureAccessLink'] = _VTApiPlaneraResaWebV4ModelsJourneyDetailsDepartureAccessLinkApiModel["default"].constructFromObject(data['departureAccessLink']);
        }
        if (data.hasOwnProperty('tripLegs')) {
          obj['tripLegs'] = _ApiClient["default"].convertToType(data['tripLegs'], [_VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel["default"]]);
        }
        if (data.hasOwnProperty('connectionLinks')) {
          obj['connectionLinks'] = _ApiClient["default"].convertToType(data['connectionLinks'], [_VTApiPlaneraResaWebV4ModelsJourneyDetailsConnectionLinkApiModel["default"]]);
        }
        if (data.hasOwnProperty('arrivalAccessLink')) {
          obj['arrivalAccessLink'] = _VTApiPlaneraResaWebV4ModelsJourneyDetailsArrivalAccessLinkApiModel["default"].constructFromObject(data['arrivalAccessLink']);
        }
        if (data.hasOwnProperty('destinationLink')) {
          obj['destinationLink'] = _VTApiPlaneraResaWebV4ModelsJourneyDetailsDestinationLinkApiModel["default"].constructFromObject(data['destinationLink']);
        }
        if (data.hasOwnProperty('ticketSuggestionsResult')) {
          obj['ticketSuggestionsResult'] = _VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel["default"].constructFromObject(data['ticketSuggestionsResult']);
        }
        if (data.hasOwnProperty('tariffZones')) {
          obj['tariffZones'] = _ApiClient["default"].convertToType(data['tariffZones'], [_VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel["default"]]);
        }
        if (data.hasOwnProperty('occupancy')) {
          obj['occupancy'] = _VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel["default"].constructFromObject(data['occupancy']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // validate the optional field `departureAccessLink`
      if (data['departureAccessLink']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneyDetailsDepartureAccessLinkApiModel["default"].validateJSON(data['departureAccessLink']);
      }
      if (data['tripLegs']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['tripLegs'])) {
          throw new Error("Expected the field `tripLegs` to be an array in the JSON data but got " + data['tripLegs']);
        }
        // validate the optional field `tripLegs` (array)
        var _iterator = _createForOfIteratorHelper(data['tripLegs']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      if (data['connectionLinks']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['connectionLinks'])) {
          throw new Error("Expected the field `connectionLinks` to be an array in the JSON data but got " + data['connectionLinks']);
        }
        // validate the optional field `connectionLinks` (array)
        var _iterator2 = _createForOfIteratorHelper(data['connectionLinks']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _VTApiPlaneraResaWebV4ModelsJourneyDetailsConnectionLinkApiModel["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // validate the optional field `arrivalAccessLink`
      if (data['arrivalAccessLink']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneyDetailsArrivalAccessLinkApiModel["default"].validateJSON(data['arrivalAccessLink']);
      }
      // validate the optional field `destinationLink`
      if (data['destinationLink']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneyDetailsDestinationLinkApiModel["default"].validateJSON(data['destinationLink']);
      }
      // validate the optional field `ticketSuggestionsResult`
      if (data['ticketSuggestionsResult']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel["default"].validateJSON(data['ticketSuggestionsResult']);
      }
      if (data['tariffZones']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['tariffZones'])) {
          throw new Error("Expected the field `tariffZones` to be an array in the JSON data but got " + data['tariffZones']);
        }
        // validate the optional field `tariffZones` (array)
        var _iterator3 = _createForOfIteratorHelper(data['tariffZones']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item2 = _step3.value;
            _VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel["default"].validateJSON(_item2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
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
  return VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel;
}();
/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsDepartureAccessLinkApiModel} departureAccessLink
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel.prototype['departureAccessLink'] = undefined;

/**
 * Detailed information, including stops, about the trip legs.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel>} tripLegs
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel.prototype['tripLegs'] = undefined;

/**
 * A list of ConnectionLinks between TripLegs, when applicable. The internal order of TripLegs and ConnectionLinks is defined by Index-property on the objects.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsConnectionLinkApiModel>} connectionLinks
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel.prototype['connectionLinks'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsArrivalAccessLinkApiModel} arrivalAccessLink
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel.prototype['arrivalAccessLink'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsDestinationLinkApiModel} destinationLink
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel.prototype['destinationLink'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel} ticketSuggestionsResult
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel.prototype['ticketSuggestionsResult'] = undefined;

/**
 * The tariff zones that the journey traverses.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel>} tariffZones
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel.prototype['tariffZones'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel} occupancy
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel.prototype['occupancy'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel;
exports["default"] = _default;