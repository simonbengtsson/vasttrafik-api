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
import VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel from './VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel';

/**
 * The VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel</code>.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel
     * @param gid {String} The 16-digit Västtrafik gid of the stop point.
     * @param name {String} The stop point name.
     */
    constructor(gid, name) { 
        
        VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.initialize(this, gid, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gid, name) { 
        obj['gid'] = gid;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('stopArea')) {
                obj['stopArea'] = VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel.constructFromObject(data['stopArea']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['gid'] && !(typeof data['gid'] === 'string' || data['gid'] instanceof String)) {
            throw new Error("Expected the field `gid` to be a primitive type in the JSON string but got " + data['gid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['platform'] && !(typeof data['platform'] === 'string' || data['platform'] instanceof String)) {
            throw new Error("Expected the field `platform` to be a primitive type in the JSON string but got " + data['platform']);
        }
        // validate the optional field `stopArea`
        if (data['stopArea']) { // data not null
          VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel.validateJSON(data['stopArea']);
        }

        return true;
    }


}

VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.RequiredProperties = ["gid", "name"];

/**
 * The 16-digit Västtrafik gid of the stop point.
 * @member {String} gid
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.prototype['gid'] = undefined;

/**
 * The stop point name.
 * @member {String} name
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.prototype['name'] = undefined;

/**
 * The platform of the stop point.
 * @member {String} platform
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.prototype['platform'] = undefined;

/**
 * The latitude coordinate of the stop point.
 * @member {Number} latitude
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.prototype['latitude'] = undefined;

/**
 * The longitude coordinate of the stop point.
 * @member {Number} longitude
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.prototype['longitude'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel} stopArea
 */
VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.prototype['stopArea'] = undefined;






export default VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel;

