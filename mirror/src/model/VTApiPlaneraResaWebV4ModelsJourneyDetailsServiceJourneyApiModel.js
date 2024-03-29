/**
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

import ApiClient from '../ApiClient';
import VTApiPlaneraResaWebV4ModelsCoordinateApiModel from './VTApiPlaneraResaWebV4ModelsCoordinateApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel from './VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel from './VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel';

/**
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel</code>.
     * Information about a service journey.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('line')) {
                obj['line'] = VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel.constructFromObject(data['line']);
            }
            if (data.hasOwnProperty('serviceJourneyCoordinates')) {
                obj['serviceJourneyCoordinates'] = ApiClient.convertToType(data['serviceJourneyCoordinates'], [VTApiPlaneraResaWebV4ModelsCoordinateApiModel]);
            }
            if (data.hasOwnProperty('callsOnServiceJourney')) {
                obj['callsOnServiceJourney'] = ApiClient.convertToType(data['callsOnServiceJourney'], [VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['gid'] && !(typeof data['gid'] === 'string' || data['gid'] instanceof String)) {
            throw new Error("Expected the field `gid` to be a primitive type in the JSON string but got " + data['gid']);
        }
        // ensure the json data is a string
        if (data['direction'] && !(typeof data['direction'] === 'string' || data['direction'] instanceof String)) {
            throw new Error("Expected the field `direction` to be a primitive type in the JSON string but got " + data['direction']);
        }
        // validate the optional field `line`
        if (data['line']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel.validateJSON(data['line']);
        }
        if (data['serviceJourneyCoordinates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['serviceJourneyCoordinates'])) {
                throw new Error("Expected the field `serviceJourneyCoordinates` to be an array in the JSON data but got " + data['serviceJourneyCoordinates']);
            }
            // validate the optional field `serviceJourneyCoordinates` (array)
            for (const item of data['serviceJourneyCoordinates']) {
                VTApiPlaneraResaWebV4ModelsCoordinateApiModel.validateJSON(item);
            };
        }
        if (data['callsOnServiceJourney']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['callsOnServiceJourney'])) {
                throw new Error("Expected the field `callsOnServiceJourney` to be an array in the JSON data but got " + data['callsOnServiceJourney']);
            }
            // validate the optional field `callsOnServiceJourney` (array)
            for (const item of data['callsOnServiceJourney']) {
                VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel.validateJSON(item);
            };
        }

        return true;
    }


}



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






export default VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel;

