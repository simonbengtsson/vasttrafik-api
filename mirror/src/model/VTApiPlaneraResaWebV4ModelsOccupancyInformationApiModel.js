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
import VTApiPlaneraResaWebV4ModelsOccupancyInformationSource from './VTApiPlaneraResaWebV4ModelsOccupancyInformationSource';
import VTApiPlaneraResaWebV4ModelsOccupancyLevel from './VTApiPlaneraResaWebV4ModelsOccupancyLevel';

/**
 * The VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel</code>.
     * Contains information about occupancy.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel();

            if (data.hasOwnProperty('level')) {
                obj['level'] = VTApiPlaneraResaWebV4ModelsOccupancyLevel.constructFromObject(data['level']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = VTApiPlaneraResaWebV4ModelsOccupancyInformationSource.constructFromObject(data['source']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsOccupancyLevel} level
 */
VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel.prototype['level'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationSource} source
 */
VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel.prototype['source'] = undefined;






export default VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel;
