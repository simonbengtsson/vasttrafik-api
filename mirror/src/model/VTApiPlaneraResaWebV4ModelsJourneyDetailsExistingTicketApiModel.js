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

/**
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel</code>.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('offerSpecification')) {
                obj['offerSpecification'] = ApiClient.convertToType(data['offerSpecification'], 'String');
            }
            if (data.hasOwnProperty('timeOfIssue')) {
                obj['timeOfIssue'] = ApiClient.convertToType(data['timeOfIssue'], 'String');
            }
            if (data.hasOwnProperty('timeOfActivation')) {
                obj['timeOfActivation'] = ApiClient.convertToType(data['timeOfActivation'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['offerSpecification'] && !(typeof data['offerSpecification'] === 'string' || data['offerSpecification'] instanceof String)) {
            throw new Error("Expected the field `offerSpecification` to be a primitive type in the JSON string but got " + data['offerSpecification']);
        }
        // ensure the json data is a string
        if (data['timeOfIssue'] && !(typeof data['timeOfIssue'] === 'string' || data['timeOfIssue'] instanceof String)) {
            throw new Error("Expected the field `timeOfIssue` to be a primitive type in the JSON string but got " + data['timeOfIssue']);
        }
        // ensure the json data is a string
        if (data['timeOfActivation'] && !(typeof data['timeOfActivation'] === 'string' || data['timeOfActivation'] instanceof String)) {
            throw new Error("Expected the field `timeOfActivation` to be a primitive type in the JSON string but got " + data['timeOfActivation']);
        }

        return true;
    }


}



/**
 * An Id for matching this existingTicket with ticketValidityApiModel in response.
 * @member {String} id
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel.prototype['id'] = undefined;

/**
 * From TicketSuggestionApiModel
 * @member {String} offerSpecification
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel.prototype['offerSpecification'] = undefined;

/**
 * Must be specified in RFC 3339 format
 * @member {String} timeOfIssue
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel.prototype['timeOfIssue'] = undefined;

/**
 * Must be specified in RFC 3339 format
 * @member {String} timeOfActivation
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel.prototype['timeOfActivation'] = undefined;






export default VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel;
