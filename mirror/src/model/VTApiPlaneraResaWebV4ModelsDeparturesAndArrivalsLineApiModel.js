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
 * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel model module.
 * @module model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel
 * @version v4
 */
class VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel {
    /**
     * Constructs a new <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel</code>.
     * Information about a line of a departure or arrival service journey.
     * @alias module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel
     */
    constructor() { 
        
        VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel} obj Optional instance to populate.
     * @return {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel} The populated <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel();

            if (data.hasOwnProperty('gid')) {
                obj['gid'] = ApiClient.convertToType(data['gid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('designation')) {
                obj['designation'] = ApiClient.convertToType(data['designation'], 'String');
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
            if (data.hasOwnProperty('isWheelchairAccessible')) {
                obj['isWheelchairAccessible'] = ApiClient.convertToType(data['isWheelchairAccessible'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['gid'] && !(typeof data['gid'] === 'string' || data['gid'] instanceof String)) {
            throw new Error("Expected the field `gid` to be a primitive type in the JSON string but got " + data['gid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['shortName'] && !(typeof data['shortName'] === 'string' || data['shortName'] instanceof String)) {
            throw new Error("Expected the field `shortName` to be a primitive type in the JSON string but got " + data['shortName']);
        }
        // ensure the json data is a string
        if (data['designation'] && !(typeof data['designation'] === 'string' || data['designation'] instanceof String)) {
            throw new Error("Expected the field `designation` to be a primitive type in the JSON string but got " + data['designation']);
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
 * 16-digit Västtrafik line gid.
 * @member {String} gid
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel.prototype['gid'] = undefined;

/**
 * The line name.
 * @member {String} name
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel.prototype['name'] = undefined;

/**
 * The short name of the line, usually 5 characters or less.
 * @member {String} shortName
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel.prototype['shortName'] = undefined;

/**
 * The designation of the line.
 * @member {String} designation
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel.prototype['designation'] = undefined;

/**
 * The background color of the line symbol.
 * @member {String} backgroundColor
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel.prototype['backgroundColor'] = undefined;

/**
 * The foreground color of the line symbol.
 * @member {String} foregroundColor
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel.prototype['foregroundColor'] = undefined;

/**
 * The border color of the line symbol.
 * @member {String} borderColor
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel.prototype['borderColor'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaCoreModelsTransportMode} transportMode
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel.prototype['transportMode'] = undefined;

/**
 * @member {module:model/VTApiPlaneraResaCoreModelsTransportSubMode} transportSubMode
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel.prototype['transportSubMode'] = undefined;

/**
 * Flag indicating if the line is wheelchair accessible.
 * @member {Boolean} isWheelchairAccessible
 */
VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel.prototype['isWheelchairAccessible'] = undefined;






export default VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel;

