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
* Enum class VTApiPlaneraResaCoreModelsPositionTransportMode.
* @enum {}
* @readonly
*/
export default class VTApiPlaneraResaCoreModelsPositionTransportMode {
    
        /**
         * value: "tram"
         * @const
         */
        "tram" = "tram";

    
        /**
         * value: "bus"
         * @const
         */
        "bus" = "bus";

    
        /**
         * value: "ferry"
         * @const
         */
        "ferry" = "ferry";

    
        /**
         * value: "train"
         * @const
         */
        "train" = "train";

    
        /**
         * value: "taxi"
         * @const
         */
        "taxi" = "taxi";

    

    /**
    * Returns a <code>VTApiPlaneraResaCoreModelsPositionTransportMode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VTApiPlaneraResaCoreModelsPositionTransportMode} The enum <code>VTApiPlaneraResaCoreModelsPositionTransportMode</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

