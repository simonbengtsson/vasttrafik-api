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
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel from './VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel from './VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel';

/**
 * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel</code>.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel
     * @param stopPoint {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel} 
     * @param plannedTime {String} The planned time of the call in RFC 3339 format.
     */
    constructor(stopPoint, plannedTime) { 
        
        VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel.initialize(this, stopPoint, plannedTime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, stopPoint, plannedTime) { 
        obj['stopPoint'] = stopPoint;
        obj['plannedTime'] = plannedTime;
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel();

            if (data.hasOwnProperty('detailsReference')) {
                obj['detailsReference'] = ApiClient.convertToType(data['detailsReference'], 'String');
            }
            if (data.hasOwnProperty('serviceJourney')) {
                obj['serviceJourney'] = VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel.constructFromObject(data['serviceJourney']);
            }
            if (data.hasOwnProperty('stopPoint')) {
                obj['stopPoint'] = VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel.constructFromObject(data['stopPoint']);
            }
            if (data.hasOwnProperty('plannedTime')) {
                obj['plannedTime'] = ApiClient.convertToType(data['plannedTime'], 'String');
            }
            if (data.hasOwnProperty('estimatedTime')) {
                obj['estimatedTime'] = ApiClient.convertToType(data['estimatedTime'], 'String');
            }
            if (data.hasOwnProperty('estimatedOtherwisePlannedTime')) {
                obj['estimatedOtherwisePlannedTime'] = ApiClient.convertToType(data['estimatedOtherwisePlannedTime'], 'String');
            }
            if (data.hasOwnProperty('isCancelled')) {
                obj['isCancelled'] = ApiClient.convertToType(data['isCancelled'], 'Boolean');
            }
            if (data.hasOwnProperty('isPartCancelled')) {
                obj['isPartCancelled'] = ApiClient.convertToType(data['isPartCancelled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['detailsReference'] && !(typeof data['detailsReference'] === 'string' || data['detailsReference'] instanceof String)) {
            throw new Error("Expected the field `detailsReference` to be a primitive type in the JSON string but got " + data['detailsReference']);
        }
        // validate the optional field `serviceJourney`
        if (data['serviceJourney']) { // data not null
          VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel.validateJSON(data['serviceJourney']);
        }
        // validate the optional field `stopPoint`
        if (data['stopPoint']) { // data not null
          VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel.validateJSON(data['stopPoint']);
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

        return true;
    }


}

VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel.RequiredProperties = ["stopPoint", "plannedTime"];

/**
 * A reference that should be used when getting detailed information about the journey.
 * @member {String} detailsReference
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel.prototype['detailsReference'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel} serviceJourney
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel.prototype['serviceJourney'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel} stopPoint
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel.prototype['stopPoint'] = undefined;

/**
 * The planned time of the call in RFC 3339 format.
 * @member {String} plannedTime
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel.prototype['plannedTime'] = undefined;

/**
 * The estimated time of the call in RFC 3339 format.
 * @member {String} estimatedTime
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel.prototype['estimatedTime'] = undefined;

/**
 * The best known time of the call in RFC 3339 format. Is EstimatedTime if exists, otherwise PlannedTime.
 * @member {String} estimatedOtherwisePlannedTime
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel.prototype['estimatedOtherwisePlannedTime'] = undefined;

/**
 * Flag indicating if the departure or arrival is cancelled.
 * @member {Boolean} isCancelled
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel.prototype['isCancelled'] = undefined;

/**
 * Flag indicating if the departure or arrival is partially cancelled.
 * @member {Boolean} isPartCancelled
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel.prototype['isPartCancelled'] = undefined;






export default VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel;

