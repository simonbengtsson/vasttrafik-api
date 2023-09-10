"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaCoreModelsLocationType = _interopRequireDefault(require("./VTApiPlaneraResaCoreModelsLocationType"));
var _VTApiPlaneraResaCoreModelsNote = _interopRequireDefault(require("./VTApiPlaneraResaCoreModelsNote"));
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
 * The VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel</code>.
   * Information about an endpoint on an access link.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel
   * @param name {String} The location name.
   * @param locationType {module:model/VTApiPlaneraResaCoreModelsLocationType} 
   * @param plannedTime {String} The planned time in RFC 3339 format.
   */
  function VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel(name, locationType, plannedTime) {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel);
    VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.initialize(this, name, locationType, plannedTime);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel, null, [{
    key: "initialize",
    value: function initialize(obj, name, locationType, plannedTime) {
      obj['name'] = name;
      obj['locationType'] = locationType;
      obj['plannedTime'] = plannedTime;
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel();
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
        if (data.hasOwnProperty('plannedTime')) {
          obj['plannedTime'] = _ApiClient["default"].convertToType(data['plannedTime'], 'String');
        }
        if (data.hasOwnProperty('estimatedTime')) {
          obj['estimatedTime'] = _ApiClient["default"].convertToType(data['estimatedTime'], 'String');
        }
        if (data.hasOwnProperty('estimatedOtherwisePlannedTime')) {
          obj['estimatedOtherwisePlannedTime'] = _ApiClient["default"].convertToType(data['estimatedOtherwisePlannedTime'], 'String');
        }
        if (data.hasOwnProperty('notes')) {
          obj['notes'] = _ApiClient["default"].convertToType(data['notes'], [_VTApiPlaneraResaCoreModelsNote["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.RequiredProperties),
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
      if (data['notes']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['notes'])) {
          throw new Error("Expected the field `notes` to be an array in the JSON data but got " + data['notes']);
        }
        // validate the optional field `notes` (array)
        var _iterator2 = _createForOfIteratorHelper(data['notes']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _VTApiPlaneraResaCoreModelsNote["default"].validateJSON(item);
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
  return VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel;
}();
VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.RequiredProperties = ["name", "locationType", "plannedTime"];

/**
 * The 16-digit Västtrafik gid.
 * @member {String} gid
 */
VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.prototype['gid'] = undefined;

/**
 * The location name.
 * @member {String} name
 */
VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.prototype['name'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaCoreModelsLocationType} locationType
 */
VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.prototype['locationType'] = undefined;

/**
 * The WGS84 latitude of the location.
 * @member {Number} latitude
 */
VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.prototype['latitude'] = undefined;

/**
 * The WGS84 longitude of the location.
 * @member {Number} longitude
 */
VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.prototype['longitude'] = undefined;

/**
 * The planned time in RFC 3339 format.
 * @member {String} plannedTime
 */
VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.prototype['plannedTime'] = undefined;

/**
 * The estimated time in RFC 3339 format.
 * @member {String} estimatedTime
 */
VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.prototype['estimatedTime'] = undefined;

/**
 * The best known time of the link in RFC 3339 format. Is EstimatedTime if exists, otherwise PlannedTime.
 * @member {String} estimatedOtherwisePlannedTime
 */
VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.prototype['estimatedOtherwisePlannedTime'] = undefined;

/**
 * An ordered list (most important first) of notes related to the end point.
 * @member {Array.<module:model/VTApiPlaneraResaCoreModelsNote>} notes
 */
VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel.prototype['notes'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel;
exports["default"] = _default;