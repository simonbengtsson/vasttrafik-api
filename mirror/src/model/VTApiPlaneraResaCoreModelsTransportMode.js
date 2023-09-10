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
* Enum class VTApiPlaneraResaCoreModelsTransportMode.
* @enum {}
* @readonly
*/
export default class VTApiPlaneraResaCoreModelsTransportMode {
    
        /**
         * value: "unknown"
         * @const
         */
        "unknown" = "unknown";

    
        /**
         * value: "none"
         * @const
         */
        "none" = "none";

    
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
         * value: "walk"
         * @const
         */
        "walk" = "walk";

    
        /**
         * value: "bike"
         * @const
         */
        "bike" = "bike";

    
        /**
         * value: "car"
         * @const
         */
        "car" = "car";

    

    /**
    * Returns a <code>VTApiPlaneraResaCoreModelsTransportMode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VTApiPlaneraResaCoreModelsTransportMode} The enum <code>VTApiPlaneraResaCoreModelsTransportMode</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
