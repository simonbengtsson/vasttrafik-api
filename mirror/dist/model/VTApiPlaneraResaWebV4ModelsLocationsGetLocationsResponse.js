"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel"));
var _VTApiPlaneraResaWebV4ModelsPaginationLinks = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsPaginationLinks"));
var _VTApiPlaneraResaWebV4ModelsPaginationProperties = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsPaginationProperties"));
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
 * The VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse model module.
 * @module model/VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse</code>.
   * The response to a get locations request, includes the results and pagination information.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse
   */
  function VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse);
    VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse} The populated <code>VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse();
        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel["default"]]);
        }
        if (data.hasOwnProperty('pagination')) {
          obj['pagination'] = _VTApiPlaneraResaWebV4ModelsPaginationProperties["default"].constructFromObject(data['pagination']);
        }
        if (data.hasOwnProperty('links')) {
          obj['links'] = _VTApiPlaneraResaWebV4ModelsPaginationLinks["default"].constructFromObject(data['links']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      if (data['results']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['results'])) {
          throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
        }
        // validate the optional field `results` (array)
        var _iterator = _createForOfIteratorHelper(data['results']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      // validate the optional field `pagination`
      if (data['pagination']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsPaginationProperties["default"].validateJSON(data['pagination']);
      }
      // validate the optional field `links`
      if (data['links']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsPaginationLinks["default"].validateJSON(data['links']);
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse;
}();
/**
 * The results.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel>} results
 */
VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse.prototype['results'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsPaginationProperties} pagination
 */
VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse.prototype['pagination'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsPaginationLinks} links
 */
VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse.prototype['links'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse;
exports["default"] = _default;