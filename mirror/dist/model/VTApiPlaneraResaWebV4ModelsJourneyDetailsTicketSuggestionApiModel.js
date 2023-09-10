"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _VTApiPlaneraResaCoreModelsTimeLimitation = _interopRequireDefault(require("./VTApiPlaneraResaCoreModelsTimeLimitation"));
var _VTApiPlaneraResaCoreModelsTravellerCategory = _interopRequireDefault(require("./VTApiPlaneraResaCoreModelsTravellerCategory"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsChannelApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsChannelApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel"));
var _VTApiPlaneraResaWebV4ModelsJourneyDetailsZoneApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsJourneyDetailsZoneApiModel"));
var _VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel = _interopRequireDefault(require("./VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel"));
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
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel
 * @version v4
 */
var VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel</code>.
   * Information about a ticket suggestion.
   * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel
   */
  function VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel() {
    _classCallCheck(this, VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel);
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel();
        if (data.hasOwnProperty('productId')) {
          obj['productId'] = _ApiClient["default"].convertToType(data['productId'], 'Number');
        }
        if (data.hasOwnProperty('productName')) {
          obj['productName'] = _ApiClient["default"].convertToType(data['productName'], 'String');
        }
        if (data.hasOwnProperty('productType')) {
          obj['productType'] = _ApiClient["default"].convertToType(data['productType'], 'Number');
        }
        if (data.hasOwnProperty('travellerCategory')) {
          obj['travellerCategory'] = _VTApiPlaneraResaCoreModelsTravellerCategory["default"].constructFromObject(data['travellerCategory']);
        }
        if (data.hasOwnProperty('priceInSek')) {
          obj['priceInSek'] = _ApiClient["default"].convertToType(data['priceInSek'], 'Number');
        }
        if (data.hasOwnProperty('timeValidity')) {
          obj['timeValidity'] = _VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel["default"].constructFromObject(data['timeValidity']);
        }
        if (data.hasOwnProperty('timeLimitation')) {
          obj['timeLimitation'] = _VTApiPlaneraResaCoreModelsTimeLimitation["default"].constructFromObject(data['timeLimitation']);
        }
        if (data.hasOwnProperty('saleChannels')) {
          obj['saleChannels'] = _ApiClient["default"].convertToType(data['saleChannels'], [_VTApiPlaneraResaWebV4ModelsJourneyDetailsChannelApiModel["default"]]);
        }
        if (data.hasOwnProperty('validZones')) {
          obj['validZones'] = _ApiClient["default"].convertToType(data['validZones'], [_VTApiPlaneraResaWebV4ModelsJourneyDetailsZoneApiModel["default"]]);
        }
        if (data.hasOwnProperty('productInstanceType')) {
          obj['productInstanceType'] = _VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel["default"].constructFromObject(data['productInstanceType']);
        }
        if (data.hasOwnProperty('punchConfiguration')) {
          obj['punchConfiguration'] = _VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationApiModel["default"].constructFromObject(data['punchConfiguration']);
        }
        if (data.hasOwnProperty('offerSpecification')) {
          obj['offerSpecification'] = _ApiClient["default"].convertToType(data['offerSpecification'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['productName'] && !(typeof data['productName'] === 'string' || data['productName'] instanceof String)) {
        throw new Error("Expected the field `productName` to be a primitive type in the JSON string but got " + data['productName']);
      }
      // validate the optional field `timeValidity`
      if (data['timeValidity']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel["default"].validateJSON(data['timeValidity']);
      }
      if (data['saleChannels']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['saleChannels'])) {
          throw new Error("Expected the field `saleChannels` to be an array in the JSON data but got " + data['saleChannels']);
        }
        // validate the optional field `saleChannels` (array)
        var _iterator = _createForOfIteratorHelper(data['saleChannels']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _VTApiPlaneraResaWebV4ModelsJourneyDetailsChannelApiModel["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      if (data['validZones']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['validZones'])) {
          throw new Error("Expected the field `validZones` to be an array in the JSON data but got " + data['validZones']);
        }
        // validate the optional field `validZones` (array)
        var _iterator2 = _createForOfIteratorHelper(data['validZones']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _item = _step2.value;
            _VTApiPlaneraResaWebV4ModelsJourneyDetailsZoneApiModel["default"].validateJSON(_item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // validate the optional field `punchConfiguration`
      if (data['punchConfiguration']) {
        // data not null
        _VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationApiModel["default"].validateJSON(data['punchConfiguration']);
      }
      // ensure the json data is a string
      if (data['offerSpecification'] && !(typeof data['offerSpecification'] === 'string' || data['offerSpecification'] instanceof String)) {
        throw new Error("Expected the field `offerSpecification` to be a primitive type in the JSON string but got " + data['offerSpecification']);
      }
      return true;
    }
  }]);
  return VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel;
}();
/**
 * The product id.
 * @member {Number} productId
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['productId'] = undefined;

/**
 * The product name.
 * @member {String} productName
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['productName'] = undefined;

/**
 * The product type.
 * @member {Number} productType
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['productType'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaCoreModelsTravellerCategory} travellerCategory
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['travellerCategory'] = undefined;

/**
 * The product price in SEK.
 * @member {Number} priceInSek
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['priceInSek'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel} timeValidity
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['timeValidity'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaCoreModelsTimeLimitation} timeLimitation
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['timeLimitation'] = undefined;

/**
 * A list of the channels that sell the product.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsChannelApiModel>} saleChannels
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['saleChannels'] = undefined;

/**
 * A list of the valid zones for the ticket.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsZoneApiModel>} validZones
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['validZones'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel} productInstanceType
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['productInstanceType'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationApiModel} punchConfiguration
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['punchConfiguration'] = undefined;

/**
 * Used to get ticket offer.
 * @member {String} offerSpecification
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.prototype['offerSpecification'] = undefined;
var _default = VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel;
exports["default"] = _default;