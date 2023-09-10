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
import VTApiPlaneraResaCoreModelsNote from './VTApiPlaneraResaCoreModelsNote';
import VTApiPlaneraResaCoreModelsTransportMode from './VTApiPlaneraResaCoreModelsTransportMode';
import VTApiPlaneraResaCoreModelsTransportSubMode from './VTApiPlaneraResaCoreModelsTransportSubMode';
import VTApiPlaneraResaWebV4ModelsCoordinateApiModel from './VTApiPlaneraResaWebV4ModelsCoordinateApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysCallApiModel from './VTApiPlaneraResaWebV4ModelsJourneysCallApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel from './VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel';

/**
 * The VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel</code>.
     * Information about a walk, bike or car link between two public transport trip legs.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel();

            if (data.hasOwnProperty('transportMode')) {
                obj['transportMode'] = VTApiPlaneraResaCoreModelsTransportMode.constructFromObject(data['transportMode']);
            }
            if (data.hasOwnProperty('transportSubMode')) {
                obj['transportSubMode'] = VTApiPlaneraResaCoreModelsTransportSubMode.constructFromObject(data['transportSubMode']);
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = VTApiPlaneraResaWebV4ModelsJourneysCallApiModel.constructFromObject(data['origin']);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = VTApiPlaneraResaWebV4ModelsJourneysCallApiModel.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], [VTApiPlaneraResaCoreModelsNote]);
            }
            if (data.hasOwnProperty('distanceInMeters')) {
                obj['distanceInMeters'] = ApiClient.convertToType(data['distanceInMeters'], 'Number');
            }
            if (data.hasOwnProperty('plannedDepartureTime')) {
                obj['plannedDepartureTime'] = ApiClient.convertToType(data['plannedDepartureTime'], 'String');
            }
            if (data.hasOwnProperty('plannedArrivalTime')) {
                obj['plannedArrivalTime'] = ApiClient.convertToType(data['plannedArrivalTime'], 'String');
            }
            if (data.hasOwnProperty('plannedDurationInMinutes')) {
                obj['plannedDurationInMinutes'] = ApiClient.convertToType(data['plannedDurationInMinutes'], 'Number');
            }
            if (data.hasOwnProperty('estimatedDepartureTime')) {
                obj['estimatedDepartureTime'] = ApiClient.convertToType(data['estimatedDepartureTime'], 'String');
            }
            if (data.hasOwnProperty('estimatedArrivalTime')) {
                obj['estimatedArrivalTime'] = ApiClient.convertToType(data['estimatedArrivalTime'], 'String');
            }
            if (data.hasOwnProperty('estimatedDurationInMinutes')) {
                obj['estimatedDurationInMinutes'] = ApiClient.convertToType(data['estimatedDurationInMinutes'], 'Number');
            }
            if (data.hasOwnProperty('estimatedNumberOfSteps')) {
                obj['estimatedNumberOfSteps'] = ApiClient.convertToType(data['estimatedNumberOfSteps'], 'Number');
            }
            if (data.hasOwnProperty('linkCoordinates')) {
                obj['linkCoordinates'] = ApiClient.convertToType(data['linkCoordinates'], [VTApiPlaneraResaWebV4ModelsCoordinateApiModel]);
            }
            if (data.hasOwnProperty('segments')) {
                obj['segments'] = ApiClient.convertToType(data['segments'], [VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel]);
            }
            if (data.hasOwnProperty('journeyLegIndex')) {
                obj['journeyLegIndex'] = ApiClient.convertToType(data['journeyLegIndex'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel</code>.
     */
    static validateJSON(data) {
        // validate the optional field `origin`
        if (data['origin']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneysCallApiModel.validateJSON(data['origin']);
        }
        // validate the optional field `destination`
        if (data['destination']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneysCallApiModel.validateJSON(data['destination']);
        }
        if (data['notes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['notes'])) {
                throw new Error("Expected the field `notes` to be an array in the JSON data but got " + data['notes']);
            }
            // validate the optional field `notes` (array)
            for (const item of data['notes']) {
                VTApiPlaneraResaCoreModelsNote.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['plannedDepartureTime'] && !(typeof data['plannedDepartureTime'] === 'string' || data['plannedDepartureTime'] instanceof String)) {
            throw new Error("Expected the field `plannedDepartureTime` to be a primitive type in the JSON string but got " + data['plannedDepartureTime']);
        }
        // ensure the json data is a string
        if (data['plannedArrivalTime'] && !(typeof data['plannedArrivalTime'] === 'string' || data['plannedArrivalTime'] instanceof String)) {
            throw new Error("Expected the field `plannedArrivalTime` to be a primitive type in the JSON string but got " + data['plannedArrivalTime']);
        }
        // ensure the json data is a string
        if (data['estimatedDepartureTime'] && !(typeof data['estimatedDepartureTime'] === 'string' || data['estimatedDepartureTime'] instanceof String)) {
            throw new Error("Expected the field `estimatedDepartureTime` to be a primitive type in the JSON string but got " + data['estimatedDepartureTime']);
        }
        // ensure the json data is a string
        if (data['estimatedArrivalTime'] && !(typeof data['estimatedArrivalTime'] === 'string' || data['estimatedArrivalTime'] instanceof String)) {
            throw new Error("Expected the field `estimatedArrivalTime` to be a primitive type in the JSON string but got " + data['estimatedArrivalTime']);
        }
        if (data['linkCoordinates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['linkCoordinates'])) {
                throw new Error("Expected the field `linkCoordinates` to be an array in the JSON data but got " + data['linkCoordinates']);
            }
            // validate the optional field `linkCoordinates` (array)
            for (const item of data['linkCoordinates']) {
                VTApiPlaneraResaWebV4ModelsCoordinateApiModel.validateJSON(item);
            };
        }
        if (data['segments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['segments'])) {
                throw new Error("Expected the field `segments` to be an array in the JSON data but got " + data['segments']);
            }
            // validate the optional field `segments` (array)
            for (const item of data['segments']) {
                VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/VTApiPlaneraResaCoreModelsTransportMode} transportMode
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['transportMode'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaCoreModelsTransportSubMode} transportSubMode
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['transportSubMode'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysCallApiModel} origin
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['origin'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneysCallApiModel} destination
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['destination'] = undefined;

/**
 * An ordered list (most important first) of notes related to the access link.
 * @member {Array.<module:model/VTApiPlaneraResaCoreModelsNote>} notes
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['notes'] = undefined;

/**
 * Distance in meters.
 * @member {Number} distanceInMeters
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['distanceInMeters'] = undefined;

/**
 * The planned departure time in RFC 3339 format.
 * @member {String} plannedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['plannedDepartureTime'] = undefined;

/**
 * The planned arrival time in RFC 3339 format.
 * @member {String} plannedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['plannedArrivalTime'] = undefined;

/**
 * The planned duration in minutes.
 * @member {Number} plannedDurationInMinutes
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['plannedDurationInMinutes'] = undefined;

/**
 * The estimated departure time in RFC 3339 format, if available.
 * @member {String} estimatedDepartureTime
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['estimatedDepartureTime'] = undefined;

/**
 * The estimated arrival time in RFC 3339 format, if available.
 * @member {String} estimatedArrivalTime
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['estimatedArrivalTime'] = undefined;

/**
 * The estimated duration in minutes, if available.
 * @member {Number} estimatedDurationInMinutes
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['estimatedDurationInMinutes'] = undefined;

/**
 * Number of steps based on the distance and an estimated step length of 0.65 meters.
 * @member {Number} estimatedNumberOfSteps
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['estimatedNumberOfSteps'] = undefined;

/**
 * The coordinates for the link.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel>} linkCoordinates
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['linkCoordinates'] = undefined;

/**
 * The segments that make up this link.
 * @member {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel>} segments
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['segments'] = undefined;

/**
 * Index of Leg in Journey
 * @member {Number} journeyLegIndex
 */
VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.prototype['journeyLegIndex'] = undefined;






export default VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel;

