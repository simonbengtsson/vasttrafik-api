"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaWebV4ModelsJourneysLineApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneysLineApiModel"));
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
 * The VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel</code>.
   * Information about a service journey of a departure or arrival.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel
   * @param gid {String} 16-digit Västtrafik service journey gid.
   */
  function VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel(gid) {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel);
    VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel.initialize(this, gid);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel, null, [{
    key: "initialize",
    value: function initialize(obj, gid) {
      obj['gid'] = gid;
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel();
        if (data.hasOwnProperty('gid')) {
          obj['gid'] = _ApiClient["default"].convertToType(data['gid'], 'String');
        }
        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }
        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'String');
        }
        if (data.hasOwnProperty('line')) {
          obj['line'] = _VTApiPlaneraResaWebV4ModelsJourneysLineApiModel["default"].constructFromObject(data['line']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel.RequiredProperties),
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
      if (data['gid'] && !(typeof data['gid'] === 'string' || data['gid'] instanceof String)) {
        throw new Error("Expected the field `gid` to be a primitive type in the JSON string but got " + data['gid']);
      }
      // ensure the json data is a string
      if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
        throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
      }
      // ensure the json data is a string
      if (data['number'] && !(typeof data['number'] === 'string' || data['number'] instanceof String)) {
        throw new Error("Expected the field `number` to be a primitive type in the JSON string but got " + data['number']);
      }
      // validate the optional field `line`
      if (data['line']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneysLineApiModel["default"].validateJSON(data['line']);
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel;
}();
VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel.RequiredProperties = ["gid"];

/**
 * 16-digit Västtrafik service journey gid.
 * @member {String} gid
 */
VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel.prototype['gid'] = undefined;

/**
 * A description of the direction.
 * @member {String} direction
 */
VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel.prototype['direction'] = undefined;

/**
 * Västtrafik service journey number that the trip leg is a part of.
 * @member {String} number
 */
VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel.prototype['number'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysLineApiModel} line
 */
VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel.prototype['line'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel;
exports["default"] = _default;