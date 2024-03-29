"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel"));
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
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel</code>.
   * Describes the duration of validity of a single punch.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel
   */
  function VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel);
    VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel();
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel["default"].constructFromObject(data['unit']);
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel;
}();
/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel} unit
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel.prototype['unit'] = undefined;

/**
 * Duration of validity of a single punch.
 * @member {Number} amount
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel.prototype['amount'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel;
exports["default"] = _default;