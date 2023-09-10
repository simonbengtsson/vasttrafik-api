"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaCoreModelsNote = _interopRequireDefault(require("./VTApiPlaneraResaCoreModelsNote"));
var _VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel"));
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
 * The VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel</code>.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel
   */
  function VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel);
    VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel();
        if (data.hasOwnProperty('detailsReference')) {
          obj['detailsReference'] = _ApiClient["default"].convertToType(data['detailsReference'], 'String');
        }
        if (data.hasOwnProperty('line')) {
          obj['line'] = _VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel["default"].constructFromObject(data['line']);
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], [_VTApiPlaneraResaCoreModelsNote["default"]]);
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }
        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }
        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['detailsReference'] && !(typeof data['detailsReference'] === 'string' || data['detailsReference'] instanceof String)) {
        throw new Error("Expected the field `detailsReference` to be a primitive type in the JSON string but got " + data['detailsReference']);
      }
      // validate the optional field `line`
      if (data['line']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel["default"].validateJSON(data['line']);
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
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
        throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel;
}();
/**
 * Journey reference
 * @member {String} detailsReference
 */
VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel.prototype['detailsReference'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel} line
 */
VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel.prototype['line'] = undefined;

/**
 * Journey notes
 * @member {Array.<module:model/VTApiPlaneraResaCoreModelsNote>} notes
 */
VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel.prototype['notes'] = undefined;

/**
 * Journey name
 * @member {String} name
 */
VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel.prototype['name'] = undefined;

/**
 * Journey direction
 * @member {String} direction
 */
VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel.prototype['direction'] = undefined;

/**
 * Current latitude of journey
 * @member {Number} latitude
 */
VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel.prototype['latitude'] = undefined;

/**
 * Current longitude of journey
 * @member {Number} longitude
 */
VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel.prototype['longitude'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel;
exports["default"] = _default;