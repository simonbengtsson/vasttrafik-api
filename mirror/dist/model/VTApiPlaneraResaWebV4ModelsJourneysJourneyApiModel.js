"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel"));
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
 * The VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel</code>.
   * Information about a journey.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel
   */
  function VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel);
    VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();
        if (data.hasOwnProperty('reconstructionReference')) {
          obj['reconstructionReference'] = _ApiClient["default"].convertToType(data['reconstructionReference'], 'String');
        }
        if (data.hasOwnProperty('detailsReference')) {
          obj['detailsReference'] = _ApiClient["default"].convertToType(data['detailsReference'], 'String');
        }
        if (data.hasOwnProperty('departureAccessLink')) {
          obj['departureAccessLink'] = _VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel["default"].constructFromObject(data['departureAccessLink']);
        }
        if (data.hasOwnProperty('tripLegs')) {
          obj['tripLegs'] = _ApiClient["default"].convertToType(data['tripLegs'], [_VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel["default"]]);
        }
        if (data.hasOwnProperty('connectionLinks')) {
          obj['connectionLinks'] = _ApiClient["default"].convertToType(data['connectionLinks'], [_VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel["default"]]);
        }
        if (data.hasOwnProperty('arrivalAccessLink')) {
          obj['arrivalAccessLink'] = _VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel["default"].constructFromObject(data['arrivalAccessLink']);
        }
        if (data.hasOwnProperty('destinationLink')) {
          obj['destinationLink'] = _VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel["default"].constructFromObject(data['destinationLink']);
        }
        if (data.hasOwnProperty('isDeparted')) {
          obj['isDeparted'] = _ApiClient["default"].convertToType(data['isDeparted'], 'Boolean');
        }
        if (data.hasOwnProperty('occupancy')) {
          obj['occupancy'] = _VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel["default"].constructFromObject(data['occupancy']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['reconstructionReference'] && !(typeof data['reconstructionReference'] === 'string' || data['reconstructionReference'] instanceof String)) {
        throw new Error("Expected the field `reconstructionReference` to be a primitive type in the JSON string but got " + data['reconstructionReference']);
      }
      // ensure the json data is a string
      if (data['detailsReference'] && !(typeof data['detailsReference'] === 'string' || data['detailsReference'] instanceof String)) {
        throw new Error("Expected the field `detailsReference` to be a primitive type in the JSON string but got " + data['detailsReference']);
      }
      // validate the optional field `departureAccessLink`
      if (data['departureAccessLink']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel["default"].validateJSON(data['departureAccessLink']);
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
            _VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel["default"].validateJSON(item);
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
            _VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel["default"].validateJSON(_item);
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
        _VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel["default"].validateJSON(data['arrivalAccessLink']);
      }
      // validate the optional field `destinationLink`
      if (data['destinationLink']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel["default"].validateJSON(data['destinationLink']);
      }
      // validate the optional field `occupancy`
      if (data['occupancy']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel["default"].validateJSON(data['occupancy']);
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel;
}();
/**
 * A reference that can be used to reconstruct this journey at a later time.
 * @member {String} reconstructionReference
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['reconstructionReference'] = undefined;

/**
 * A reference that should be used when getting detailed information about the journey.
 * @member {String} detailsReference
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['detailsReference'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel} departureAccessLink
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['departureAccessLink'] = undefined;

/**
 * A list of trip legs on a journey, when applicable. A journey has either one or more trip legs or one  destination link.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel>} tripLegs
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['tripLegs'] = undefined;

/**
 * A list of ConnectionLinks between TripLegs, when applicable. The internal order of TripLegs and ConnectionLinks is defined by Index-property on the objects.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel>} connectionLinks
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['connectionLinks'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel} arrivalAccessLink
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['arrivalAccessLink'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel} destinationLink
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['destinationLink'] = undefined;

/**
 * Flag indicating if the first trip leg of the journey is departed.
 * @member {Boolean} isDeparted
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['isDeparted'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel} occupancy
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['occupancy'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel;
exports["default"] = _default;