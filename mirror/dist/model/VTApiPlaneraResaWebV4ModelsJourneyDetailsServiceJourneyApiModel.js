"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaWebV4ModelsCoordinateApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsCoordinateApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel"));
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
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel</code>.
   * Information about a service journey.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel
   */
  function VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel);
    VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel();
        if (data.hasOwnProperty('gid')) {
          obj['gid'] = _ApiClient["default"].convertToType(data['gid'], 'String');
        }
        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }
        if (data.hasOwnProperty('line')) {
          obj['line'] = _VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel["default"].constructFromObject(data['line']);
        }
        if (data.hasOwnProperty('serviceJourneyCoordinates')) {
          obj['serviceJourneyCoordinates'] = _ApiClient["default"].convertToType(data['serviceJourneyCoordinates'], [_VTApiPlaneraResaWebV4ModelsCoordinateApiModel["default"]]);
        }
        if (data.hasOwnProperty('callsOnServiceJourney')) {
          obj['callsOnServiceJourney'] = _ApiClient["default"].convertToType(data['callsOnServiceJourney'], [_VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['gid'] && !(typeof data['gid'] === 'string' || data['gid'] instanceof String)) {
        throw new Error("Expected the field `gid` to be a primitive type in the JSON string but got " + data['gid']);
      }
      // ensure the json data is a string
      if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
        throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
      }
      // validate the optional field `line`
      if (data['line']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel["default"].validateJSON(data['line']);
      }
      if (data['serviceJourneyCoordinates']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['serviceJourneyCoordinates'])) {
          throw new Error("Expected the field `serviceJourneyCoordinates` to be an array in the JSON data but got " + data['serviceJourneyCoordinates']);
        }
        // validate the optional field `serviceJourneyCoordinates` (array)
        var _iterator = _createForOfIteratorHelper(data['serviceJourneyCoordinates']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _VTApiPlaneraResaWebV4ModelsCoordinateApiModel["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      if (data['callsOnServiceJourney']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['callsOnServiceJourney'])) {
          throw new Error("Expected the field `callsOnServiceJourney` to be an array in the JSON data but got " + data['callsOnServiceJourney']);
        }
        // validate the optional field `callsOnServiceJourney` (array)
        var _iterator2 = _createForOfIteratorHelper(data['callsOnServiceJourney']),
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
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel;
}();
/**
 * 16-digit Västtrafik service journey gid that the trip leg is a part of.
 * @member {String} gid
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel.prototype['gid'] = undefined;

/**
 * A description of the direction.
 * @member {String} direction
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel.prototype['direction'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel} line
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel.prototype['line'] = undefined;

/**
 * The coordinates on the service journey.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel>} serviceJourneyCoordinates
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel.prototype['serviceJourneyCoordinates'] = undefined;

/**
 * All calls on the service journey.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel>} callsOnServiceJourney
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel.prototype['callsOnServiceJourney'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel;
exports["default"] = _default;