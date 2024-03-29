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
* Enum class VTApiPlaneraResaCoreModelsTimeLimitation.
* @enum {}
* @readonly
*/
export default class VTApiPlaneraResaCoreModelsTimeLimitation {
    
        /**
         * value: "unknown"
         * @const
         */
        "unknown" = "unknown";

    
        /**
         * value: "heltid"
         * @const
         */
        "heltid" = "heltid";

    
        /**
         * value: "lagtrafik"
         * @const
         */
        "lagtrafik" = "lagtrafik";

    
        /**
         * value: "skolkort04till19"
         * @const
         */
        "skolkort04till19" = "skolkort04till19";

    
        /**
         * value: "skolkort04till22"
         * @const
         */
        "skolkort04till22" = "skolkort04till22";

    
        /**
         * value: "skolkort04till1930"
         * @const
         */
        "skolkort04till1930" = "skolkort04till1930";

    
        /**
         * value: "fritid100"
         * @const
         */
        "fritid100" = "fritid100";

    
        /**
         * value: "fritidkomplement"
         * @const
         */
        "fritidkomplement" = "fritidkomplement";

    
        /**
         * value: "fritidvardag19till22"
         * @const
         */
        "fritidvardag19till22" = "fritidvardag19till22";

    
        /**
         * value: "fritidvardag14till24"
         * @const
         */
        "fritidvardag14till24" = "fritidvardag14till24";

    
        /**
         * value: "fritidkvallhelg"
         * @const
         */
        "fritidkvallhelg" = "fritidkvallhelg";

    
        /**
         * value: "fritidkvallhelglov"
         * @const
         */
        "fritidkvallhelglov" = "fritidkvallhelglov";

    
        /**
         * value: "fritidjulsommarlov"
         * @const
         */
        "fritidjulsommarlov" = "fritidjulsommarlov";

    
        /**
         * value: "fritidale"
         * @const
         */
        "fritidale" = "fritidale";

    

    /**
    * Returns a <code>VTApiPlaneraResaCoreModelsTimeLimitation</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VTApiPlaneraResaCoreModelsTimeLimitation} The enum <code>VTApiPlaneraResaCoreModelsTimeLimitation</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

