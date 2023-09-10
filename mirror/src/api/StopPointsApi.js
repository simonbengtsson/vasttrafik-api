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


import ApiClient from "../ApiClient";
import MicrosoftAspNetCoreMvcProblemDetails from '../model/MicrosoftAspNetCoreMvcProblemDetails';
import VTApiPlaneraResaWebV4ModelsApiError from '../model/VTApiPlaneraResaWebV4ModelsApiError';
import VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType from '../model/VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType';
import VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType from '../model/VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel from '../model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel from '../model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse from '../model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse from '../model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse';

/**
* StopPoints service.
* @module api/StopPointsApi
* @version v4
*/
export default class StopPointsApi {

    /**
    * Constructs a new StopPointsApi. 
    * @alias module:api/StopPointsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet operation.
     * @callback module:api/StopPointsApi~stopPointsStopPointGidArrivalsDetailsReferenceDetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns details about an arrival.
     * Sample request:        GET /stop-points/9022014001760003/arrivals/{detailsReference}/details?includes=servicejourneycalls
     * @param {String} detailsReference The reference to the service journey, received from the arrivals call. A detailsReference is only valid during the same day as it was generated.
     * @param {String} stopPointGid 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType>} opts.includes The additional information to include in the response.
     * @param {module:api/StopPointsApi~stopPointsStopPointGidArrivalsDetailsReferenceDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel}
     */
    stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet(detailsReference, stopPointGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'detailsReference' is set
      if (detailsReference === undefined || detailsReference === null) {
        throw new Error("Missing the required parameter 'detailsReference' when calling stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet");
      }
      // verify the required parameter 'stopPointGid' is set
      if (stopPointGid === undefined || stopPointGid === null) {
        throw new Error("Missing the required parameter 'stopPointGid' when calling stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet");
      }

      let pathParams = {
        'detailsReference': detailsReference,
        'stopPointGid': stopPointGid
      };
      let queryParams = {
        'includes': this.apiClient.buildCollectionParam(opts['includes'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel;
      return this.apiClient.callApi(
        '/stop-points/{stopPointGid}/arrivals/{detailsReference}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stopPointsStopPointGidArrivalsGet operation.
     * @callback module:api/StopPointsApi~stopPointsStopPointGidArrivalsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns arrivals to the specified stop point at the specified time.
     * Sample request:        GET /stop-points/9022014001760003/arrivals
     * @param {String} stopPointGid The 16-digit Västtrafik gid of the stop point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDateTime The start of the time interval for which to get upcoming arrivals. Must be specified in RFC 3339 format or be null which means that the current time on the server is used.
     * @param {Number} opts.timeSpanInMinutes The number of minutes from the start time for which to get upcoming arrivals. Allowed values are between 0 and 1440. (default to 60)
     * @param {Number} opts.maxArrivalsPerLineAndDirection The maximum number of arrivals for a single line in a specific direction. (default to 2)
     * @param {Number} opts.limit The number of results to return. (default to 10)
     * @param {Number} opts.offset The zero-based start offset of the pagination. (default to 0)
     * @param {module:api/StopPointsApi~stopPointsStopPointGidArrivalsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse}
     */
    stopPointsStopPointGidArrivalsGet(stopPointGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'stopPointGid' is set
      if (stopPointGid === undefined || stopPointGid === null) {
        throw new Error("Missing the required parameter 'stopPointGid' when calling stopPointsStopPointGidArrivalsGet");
      }

      let pathParams = {
        'stopPointGid': stopPointGid
      };
      let queryParams = {
        'startDateTime': opts['startDateTime'],
        'timeSpanInMinutes': opts['timeSpanInMinutes'],
        'maxArrivalsPerLineAndDirection': opts['maxArrivalsPerLineAndDirection'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse;
      return this.apiClient.callApi(
        '/stop-points/{stopPointGid}/arrivals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet operation.
     * @callback module:api/StopPointsApi~stopPointsStopPointGidDeparturesDetailsReferenceDetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns details about a departure.
     * Sample request:        GET /stop-points/9022014001760003/departures/{detailsReference}/details?includes=servicejourneycalls
     * @param {String} detailsReference The reference to the service journey, received from the departures call. A detailsReference is only valid during the same day as it was generated.
     * @param {String} stopPointGid 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType>} opts.includes The additional information to include in the response.
     * @param {module:api/StopPointsApi~stopPointsStopPointGidDeparturesDetailsReferenceDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel}
     */
    stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet(detailsReference, stopPointGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'detailsReference' is set
      if (detailsReference === undefined || detailsReference === null) {
        throw new Error("Missing the required parameter 'detailsReference' when calling stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet");
      }
      // verify the required parameter 'stopPointGid' is set
      if (stopPointGid === undefined || stopPointGid === null) {
        throw new Error("Missing the required parameter 'stopPointGid' when calling stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet");
      }

      let pathParams = {
        'detailsReference': detailsReference,
        'stopPointGid': stopPointGid
      };
      let queryParams = {
        'includes': this.apiClient.buildCollectionParam(opts['includes'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel;
      return this.apiClient.callApi(
        '/stop-points/{stopPointGid}/departures/{detailsReference}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the stopPointsStopPointGidDeparturesGet operation.
     * @callback module:api/StopPointsApi~stopPointsStopPointGidDeparturesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns departures from the specified stop point at the specified time.
     * Sample request:        GET /stop-points/9022014001760003/departures
     * @param {String} stopPointGid The 16-digit Västtrafik gid of the stop point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDateTime The start of the time interval for which to get upcoming departures. Must be specified in RFC 3339 format or be null which means that the current time on the server is used.
     * @param {Number} opts.timeSpanInMinutes The number of minutes from the start time for which to get upcoming departures. Allowed values are between 0 and 1440. (default to 60)
     * @param {Number} opts.maxDeparturesPerLineAndDirection The maximum number of departures for a single line in a specific direction. (default to 2)
     * @param {Number} opts.limit The number of results to return. (default to 10)
     * @param {Number} opts.offset The zero-based start offset of the pagination. (default to 0)
     * @param {Boolean} opts.includeOccupancy Includes occupancy in departure. (default to false)
     * @param {module:api/StopPointsApi~stopPointsStopPointGidDeparturesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse}
     */
    stopPointsStopPointGidDeparturesGet(stopPointGid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'stopPointGid' is set
      if (stopPointGid === undefined || stopPointGid === null) {
        throw new Error("Missing the required parameter 'stopPointGid' when calling stopPointsStopPointGidDeparturesGet");
      }

      let pathParams = {
        'stopPointGid': stopPointGid
      };
      let queryParams = {
        'startDateTime': opts['startDateTime'],
        'timeSpanInMinutes': opts['timeSpanInMinutes'],
        'maxDeparturesPerLineAndDirection': opts['maxDeparturesPerLineAndDirection'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'includeOccupancy': opts['includeOccupancy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse;
      return this.apiClient.callApi(
        '/stop-points/{stopPointGid}/departures', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}