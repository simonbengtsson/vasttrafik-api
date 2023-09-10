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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
* Enum class VTApiPlaneraResaCoreModelsTimeLimitation.
* @enum {}
* @readonly
*/
var VTApiPlaneraResaCoreModelsTimeLimitation = /*#__PURE__*/function () {
  function VTApiPlaneraResaCoreModelsTimeLimitation() {
    _classCallCheck(this, VTApiPlaneraResaCoreModelsTimeLimitation);
    /**
     * value: "unknown"
     * @const
     */
    _defineProperty(this, "unknown", "unknown");
    /**
     * value: "heltid"
     * @const
     */
    _defineProperty(this, "heltid", "heltid");
    /**
     * value: "lagtrafik"
     * @const
     */
    _defineProperty(this, "lagtrafik", "lagtrafik");
    /**
     * value: "skolkort04till19"
     * @const
     */
    _defineProperty(this, "skolkort04till19", "skolkort04till19");
    /**
     * value: "skolkort04till22"
     * @const
     */
    _defineProperty(this, "skolkort04till22", "skolkort04till22");
    /**
     * value: "skolkort04till1930"
     * @const
     */
    _defineProperty(this, "skolkort04till1930", "skolkort04till1930");
    /**
     * value: "fritid100"
     * @const
     */
    _defineProperty(this, "fritid100", "fritid100");
    /**
     * value: "fritidkomplement"
     * @const
     */
    _defineProperty(this, "fritidkomplement", "fritidkomplement");
    /**
     * value: "fritidvardag19till22"
     * @const
     */
    _defineProperty(this, "fritidvardag19till22", "fritidvardag19till22");
    /**
     * value: "fritidvardag14till24"
     * @const
     */
    _defineProperty(this, "fritidvardag14till24", "fritidvardag14till24");
    /**
     * value: "fritidkvallhelg"
     * @const
     */
    _defineProperty(this, "fritidkvallhelg", "fritidkvallhelg");
    /**
     * value: "fritidkvallhelglov"
     * @const
     */
    _defineProperty(this, "fritidkvallhelglov", "fritidkvallhelglov");
    /**
     * value: "fritidjulsommarlov"
     * @const
     */
    _defineProperty(this, "fritidjulsommarlov", "fritidjulsommarlov");
    /**
     * value: "fritidale"
     * @const
     */
    _defineProperty(this, "fritidale", "fritidale");
  }
  _createClass(VTApiPlaneraResaCoreModelsTimeLimitation, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>VTApiPlaneraResaCoreModelsTimeLimitation</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VTApiPlaneraResaCoreModelsTimeLimitation} The enum <code>VTApiPlaneraResaCoreModelsTimeLimitation</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);
  return VTApiPlaneraResaCoreModelsTimeLimitation;
}();
exports["default"] = VTApiPlaneraResaCoreModelsTimeLimitation;