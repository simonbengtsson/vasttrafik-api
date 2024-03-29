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
import VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel from './VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel';
import VTApiPlaneraResaWebV4ModelsPaginationLinks from './VTApiPlaneraResaWebV4ModelsPaginationLinks';
import VTApiPlaneraResaWebV4ModelsPaginationProperties from './VTApiPlaneraResaWebV4ModelsPaginationProperties';

/**
 * The VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse</code>.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse} The populated <code>VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = VTApiPlaneraResaWebV4ModelsPaginationProperties.constructFromObject(data['pagination']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = VTApiPlaneraResaWebV4ModelsPaginationLinks.constructFromObject(data['links']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse</code>.
     */
    static validateJSON(data) {
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.validateJSON(item);
            };
        }
        // validate the optional field `pagination`
        if (data['pagination']) { // data not null
          VTApiPlaneraResaWebV4ModelsPaginationProperties.validateJSON(data['pagination']);
        }
        // validate the optional field `links`
        if (data['links']) { // data not null
          VTApiPlaneraResaWebV4ModelsPaginationLinks.validateJSON(data['links']);
        }

        return true;
    }


}



/**
 * The results.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel>} results
 */
VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse.prototype['results'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsPaginationProperties} pagination
 */
VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse.prototype['pagination'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsPaginationLinks} links
 */
VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse.prototype['links'] = undefined;






export default VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse;

