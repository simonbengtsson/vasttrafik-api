"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaCoreModelsLocationType = _interopRequireDefault(require("./VTApiPlaneraResaCoreModelsLocationType"));
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
 * The VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel</code>.
   * Information about a location.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel
   * @param name {String} The location name.
   * @param locationType {module:model/VTApiPlaneraResaCoreModelsLocationType} 
   */
  function VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel(name, locationType) {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel);
    VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.initialize(this, name, locationType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel, null, [{
    key: "initialize",
    value: function initialize(obj, name, locationType) {
      obj['name'] = name;
      obj['locationType'] = locationType;
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel();
        if (data.hasOwnProperty('gid')) {
          obj['gid'] = _ApiClient["default"].convertToType(data['gid'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('locationType')) {
          obj['locationType'] = _VTApiPlaneraResaCoreModelsLocationType["default"].constructFromObject(data['locationType']);
        }
        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }
        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }
        if (data.hasOwnProperty('platform')) {
          obj['platform'] = _ApiClient["default"].convertToType(data['platform'], 'String');
        }
        if (data.hasOwnProperty('straightLineDistanceInMeters')) {
          obj['straightLineDistanceInMeters'] = _ApiClient["default"].convertToType(data['straightLineDistanceInMeters'], 'Number');
        }
        if (data.hasOwnProperty('hasLocalService')) {
          obj['hasLocalService'] = _ApiClient["default"].convertToType(data['hasLocalService'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.RequiredProperties),
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
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      }
      // ensure the json data is a string
      if (data['platform'] && !(typeof data['platform'] === 'string' || data['platform'] instanceof String)) {
        throw new Error("Expected the field `platform` to be a primitive type in the JSON string but got " + data['platform']);
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel;
}();
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.RequiredProperties = ["name", "locationType"];

/**
 * The 16-digit Västtrafik gid.
 * @member {String} gid
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['gid'] = undefined;

/**
 * The location name.
 * @member {String} name
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['name'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaCoreModelsLocationType} locationType
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['locationType'] = undefined;

/**
 * The WGS84 latitude of the location.
 * @member {Number} latitude
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['latitude'] = undefined;

/**
 * The WGS84 longitude of the location.
 * @member {Number} longitude
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['longitude'] = undefined;

/**
 * The location platform, only available for stop points.
 * @member {String} platform
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['platform'] = undefined;

/**
 * The location straight line distance in meters.
 * @member {Number} straightLineDistanceInMeters
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['straightLineDistanceInMeters'] = undefined;

/**
 * Is \"Närtrafik\" (Local Service) available for the location?  Values are only available for LocationType: StopArea, PointOfInterest and Address.  Values are only available for endpoint: locations/by-text.
 * @member {Boolean} hasLocalService
 */
VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel.prototype['hasLocalService'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel;
exports["default"] = _default;