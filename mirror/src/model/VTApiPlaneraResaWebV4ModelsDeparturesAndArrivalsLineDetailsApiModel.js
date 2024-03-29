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
import VTApiPlaneraResaCoreModelsTransportMode from './VTApiPlaneraResaCoreModelsTransportMode';
import VTApiPlaneraResaCoreModelsTransportSubMode from './VTApiPlaneraResaCoreModelsTransportSubMode';

/**
 * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel</code>.
     * Information about a line.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('backgroundColor')) {
                obj['backgroundColor'] = ApiClient.convertToType(data['backgroundColor'], 'String');
            }
            if (data.hasOwnProperty('foregroundColor')) {
                obj['foregroundColor'] = ApiClient.convertToType(data['foregroundColor'], 'String');
            }
            if (data.hasOwnProperty('borderColor')) {
                obj['borderColor'] = ApiClient.convertToType(data['borderColor'], 'String');
            }
            if (data.hasOwnProperty('transportMode')) {
                obj['transportMode'] = VTApiPlaneraResaCoreModelsTransportMode.constructFromObject(data['transportMode']);
            }
            if (data.hasOwnProperty('transportSubMode')) {
                obj['transportSubMode'] = VTApiPlaneraResaCoreModelsTransportSubMode.constructFromObject(data['transportSubMode']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['backgroundColor'] && !(typeof data['backgroundColor'] === 'string' || data['backgroundColor'] instanceof String)) {
            throw new Error("Expected the field `backgroundColor` to be a primitive type in the JSON string but got " + data['backgroundColor']);
        }
        // ensure the json data is a string
        if (data['foregroundColor'] && !(typeof data['foregroundColor'] === 'string' || data['foregroundColor'] instanceof String)) {
            throw new Error("Expected the field `foregroundColor` to be a primitive type in the JSON string but got " + data['foregroundColor']);
        }
        // ensure the json data is a string
        if (data['borderColor'] && !(typeof data['borderColor'] === 'string' || data['borderColor'] instanceof String)) {
            throw new Error("Expected the field `borderColor` to be a primitive type in the JSON string but got " + data['borderColor']);
        }

        return true;
    }


}



/**
 * The line name.
 * @member {String} name
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel.prototype['name'] = undefined;

/**
 * The background color of the line symbol.
 * @member {String} backgroundColor
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel.prototype['backgroundColor'] = undefined;

/**
 * The foreground color of the line symbol.
 * @member {String} foregroundColor
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel.prototype['foregroundColor'] = undefined;

/**
 * The border color of the line symbol.
 * @member {String} borderColor
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel.prototype['borderColor'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaCoreModelsTransportMode} transportMode
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel.prototype['transportMode'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaCoreModelsTransportSubMode} transportSubMode
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel.prototype['transportSubMode'] = undefined;






export default VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel;

