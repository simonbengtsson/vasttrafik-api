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
* Enum class VTApiPlaneraResaCoreModelsTimeValidityType.
* @enum {}
* @readonly
*/
export default class VTApiPlaneraResaCoreModelsTimeValidityType {
    
        /**
         * value: "unknown"
         * @const
         */
        "unknown" = "unknown";

    
        /**
         * value: "amountunit"
         * @const
         */
        "amountunit" = "amountunit";

    
        /**
         * value: "fromtodate"
         * @const
         */
        "fromtodate" = "fromtodate";

    
        /**
         * value: "fromtodatetime"
         * @const
         */
        "fromtodatetime" = "fromtodatetime";

    

    /**
    * Returns a <code>VTApiPlaneraResaCoreModelsTimeValidityType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VTApiPlaneraResaCoreModelsTimeValidityType} The enum <code>VTApiPlaneraResaCoreModelsTimeValidityType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

