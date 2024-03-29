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
import VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel from './VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel from './VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel from './VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel from './VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel from './VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel';
import VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel from './VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel';

/**
 * The VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel</code>.
     * Information about a journey.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel();

            if (data.hasOwnProperty('reconstructionReference')) {
                obj['reconstructionReference'] = ApiClient.convertToType(data['reconstructionReference'], 'String');
            }
            if (data.hasOwnProperty('detailsReference')) {
                obj['detailsReference'] = ApiClient.convertToType(data['detailsReference'], 'String');
            }
            if (data.hasOwnProperty('departureAccessLink')) {
                obj['departureAccessLink'] = VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.constructFromObject(data['departureAccessLink']);
            }
            if (data.hasOwnProperty('tripLegs')) {
                obj['tripLegs'] = ApiClient.convertToType(data['tripLegs'], [VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel]);
            }
            if (data.hasOwnProperty('connectionLinks')) {
                obj['connectionLinks'] = ApiClient.convertToType(data['connectionLinks'], [VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel]);
            }
            if (data.hasOwnProperty('arrivalAccessLink')) {
                obj['arrivalAccessLink'] = VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel.constructFromObject(data['arrivalAccessLink']);
            }
            if (data.hasOwnProperty('destinationLink')) {
                obj['destinationLink'] = VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.constructFromObject(data['destinationLink']);
            }
            if (data.hasOwnProperty('isDeparted')) {
                obj['isDeparted'] = ApiClient.convertToType(data['isDeparted'], 'Boolean');
            }
            if (data.hasOwnProperty('occupancy')) {
                obj['occupancy'] = VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel.constructFromObject(data['occupancy']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['reconstructionReference'] && !(typeof data['reconstructionReference'] === 'string' || data['reconstructionReference'] instanceof String)) {
            throw new Error("Expected the field `reconstructionReference` to be a primitive type in the JSON string but got " + data['reconstructionReference']);
        }
        // ensure the json data is a string
        if (data['detailsReference'] && !(typeof data['detailsReference'] === 'string' || data['detailsReference'] instanceof String)) {
            throw new Error("Expected the field `detailsReference` to be a primitive type in the JSON string but got " + data['detailsReference']);
        }
        // validate the optional field `departureAccessLink`
        if (data['departureAccessLink']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.validateJSON(data['departureAccessLink']);
        }
        if (data['tripLegs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tripLegs'])) {
                throw new Error("Expected the field `tripLegs` to be an array in the JSON data but got " + data['tripLegs']);
            }
            // validate the optional field `tripLegs` (array)
            for (const item of data['tripLegs']) {
                VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.validateJSON(item);
            };
        }
        if (data['connectionLinks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['connectionLinks'])) {
                throw new Error("Expected the field `connectionLinks` to be an array in the JSON data but got " + data['connectionLinks']);
            }
            // validate the optional field `connectionLinks` (array)
            for (const item of data['connectionLinks']) {
                VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.validateJSON(item);
            };
        }
        // validate the optional field `arrivalAccessLink`
        if (data['arrivalAccessLink']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel.validateJSON(data['arrivalAccessLink']);
        }
        // validate the optional field `destinationLink`
        if (data['destinationLink']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.validateJSON(data['destinationLink']);
        }
        // validate the optional field `occupancy`
        if (data['occupancy']) { // data not null
          VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel.validateJSON(data['occupancy']);
        }

        return true;
    }


}



/**
 * A reference that can be used to reconstruct this journey at a later time.
 * @member {String} reconstructionReference
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['reconstructionReference'] = undefined;

/**
 * A reference that should be used when getting detailed information about the journey.
 * @member {String} detailsReference
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['detailsReference'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel} departureAccessLink
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['departureAccessLink'] = undefined;

/**
 * A list of trip legs on a journey, when applicable. A journey has either one or more trip legs or one  destination link.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel>} tripLegs
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['tripLegs'] = undefined;

/**
 * A list of ConnectionLinks between TripLegs, when applicable. The internal order of TripLegs and ConnectionLinks is defined by Index-property on the objects.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel>} connectionLinks
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['connectionLinks'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel} arrivalAccessLink
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['arrivalAccessLink'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel} destinationLink
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['destinationLink'] = undefined;

/**
 * Flag indicating if the first trip leg of the journey is departed.
 * @member {Boolean} isDeparted
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['isDeparted'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel} occupancy
 */
VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.prototype['occupancy'] = undefined;






export default VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel;

