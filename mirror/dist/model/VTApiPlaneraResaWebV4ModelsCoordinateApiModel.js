"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
 * The VTApiPlaneraResaWebV4ModelsCoordinateApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsCoordinateApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsCoordinateApiModel</code>.
   * Information about the coordinates
   * @alias module:model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel
   */
  function VTApiPlaneraResaWebV4ModelsCoordinateApiModel() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsCoordinateApiModel);
    VTApiPlaneraResaWebV4ModelsCoordinateApiModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsCoordinateApiModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsCoordinateApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsCoordinateApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsCoordinateApiModel();
        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }
        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }
        if (data.hasOwnProperty('elevation')) {
          obj['elevation'] = _ApiClient["default"].convertToType(data['elevation'], 'Number');
        }
        if (data.hasOwnProperty('isOnTripLeg')) {
          obj['isOnTripLeg'] = _ApiClient["default"].convertToType(data['isOnTripLeg'], 'Boolean');
        }
        if (data.hasOwnProperty('isTripLegStart')) {
          obj['isTripLegStart'] = _ApiClient["default"].convertToType(data['isTripLegStart'], 'Boolean');
        }
        if (data.hasOwnProperty('isTripLegStop')) {
          obj['isTripLegStop'] = _ApiClient["default"].convertToType(data['isTripLegStop'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsCoordinateApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsCoordinateApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsCoordinateApiModel;
}();
/**
 * The latitude of this position (WGS84).
 * @member {Number} latitude
 */
VTApiPlaneraResaWebV4ModelsCoordinateApiModel.prototype['latitude'] = undefined;

/**
 * The longitude of this position (WGS84).
 * @member {Number} longitude
 */
VTApiPlaneraResaWebV4ModelsCoordinateApiModel.prototype['longitude'] = undefined;

/**
 * The elevation of this position (WGS84).
 * @member {Number} elevation
 */
VTApiPlaneraResaWebV4ModelsCoordinateApiModel.prototype['elevation'] = undefined;

/**
 * The coordinate is on the tripleg.
 * @member {Boolean} isOnTripLeg
 */
VTApiPlaneraResaWebV4ModelsCoordinateApiModel.prototype['isOnTripLeg'] = undefined;

/**
 * The coordinate is on the first call of the leg.
 * @member {Boolean} isTripLegStart
 */
VTApiPlaneraResaWebV4ModelsCoordinateApiModel.prototype['isTripLegStart'] = undefined;

/**
 * The coordinate is on the last call of the leg.
 * @member {Boolean} isTripLegStop
 */
VTApiPlaneraResaWebV4ModelsCoordinateApiModel.prototype['isTripLegStop'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsCoordinateApiModel;
exports["default"] = _default;