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
import VTApiPlaneraResaCoreModelsDateTimeRelatesToType from '../model/VTApiPlaneraResaCoreModelsDateTimeRelatesToType';
import VTApiPlaneraResaCoreModelsTravellerCategory from '../model/VTApiPlaneraResaCoreModelsTravellerCategory';
import VTApiPlaneraResaWebV4ModelsApiError from '../model/VTApiPlaneraResaWebV4ModelsApiError';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType from '../model/VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel from '../model/VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyTransportMode from '../model/VTApiPlaneraResaWebV4ModelsJourneyTransportMode';
import VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode from '../model/VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode';
import VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse from '../model/VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse';
import VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel from '../model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel';
import VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel from '../model/VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel';

/**
* Journeys service.
* @module api/JourneysApi
* @version v4
*/
export default class JourneysApi {

    /**
    * Constructs a new JourneysApi. 
    * @alias module:api/JourneysApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the journeysDetailsReferenceDetailsGet operation.
     * @callback module:api/JourneysApi~journeysDetailsReferenceDetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns details about a journey.
     * Sample request:        GET /journeys/{detailsReference}/details?includes=ticketsuggestions
     * @param {String} detailsReference The reference to the journey, received from the search journeys query. A detailsReference is only valid during the same day as it was generated.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType>} opts.includes The additional information to include in the response.
     * @param {Array.<Number>} opts.channelIds List of channel ids to include if 'ticketsuggestions' is set in the 'includes' parameter. Optional parameter.
     * @param {Array.<Number>} opts.productTypes List of product type ids to include if 'ticketsuggestions' is set in the 'includes' parameter. Optional parameter.
     * @param {Array.<module:model/VTApiPlaneraResaCoreModelsTravellerCategory>} opts.travellerCategories List of traveller category ids to include if 'ticketsuggestions' is set in the 'includes' parameter. Optional parameter.
     * @param {module:api/JourneysApi~journeysDetailsReferenceDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel}
     */
    journeysDetailsReferenceDetailsGet(detailsReference, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'detailsReference' is set
      if (detailsReference === undefined || detailsReference === null) {
        throw new Error("Missing the required parameter 'detailsReference' when calling journeysDetailsReferenceDetailsGet");
      }

      let pathParams = {
        'detailsReference': detailsReference
      };
      let queryParams = {
        'includes': this.apiClient.buildCollectionParam(opts['includes'], 'multi'),
        'channelIds': this.apiClient.buildCollectionParam(opts['channelIds'], 'multi'),
        'productTypes': this.apiClient.buildCollectionParam(opts['productTypes'], 'multi'),
        'travellerCategories': this.apiClient.buildCollectionParam(opts['travellerCategories'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel;
      return this.apiClient.callApi(
        '/journeys/{detailsReference}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the journeysGet operation.
     * @callback module:api/JourneysApi~journeysGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns journeys matching the specified search parameters.
     * For an origin or destination to be valid, either a gid or a combination of latitude and longitude must be specified. OriginName and destinationName are optional in combination with latitude and longitude.    Sample request:        GET /journeys?originGid=9021014001760000&destinationGid=9021014003980000    or        GET /journeys?originName=Sadelsten,+V%C3%A5rg%C3%A5rda&originLongitude=12.63308&originLatitude=58.028237&destinationLongitude=11.930897&destinationLatitude=57.586085&destinationName=%C3%85sdammsstigen,+427+36+Billdal
     * @param {Object} opts Optional parameters
     * @param {String} opts.originGid The 16-digit Västtrafik gid of the origin location (which could be either a stop area (e.g. '9021014001760000'), a stop point (e.g. '9022014001760004') or meta-station (e.g. '0000000800000022')).
     * @param {String} opts.originName The name of the origin location. The maximum length allowed is 256 characters.
     * @param {Number} opts.originLatitude The latitude of the origin location.
     * @param {Number} opts.originLongitude The longitude of the origin location.
     * @param {String} opts.destinationGid The 16-digit Västtrafik gid of the destination location (which could be either a stop area, stop point or meta-station).
     * @param {String} opts.destinationName The name of the destination location. The maximum length allowed is 256 characters.
     * @param {Number} opts.destinationLatitude The latitude of the destination location.
     * @param {Number} opts.destinationLongitude The longitude of the destination location.
     * @param {Date} opts.dateTime The datetime for which to search journeys. Must be specified in RFC 3339 format or be null which means that the current time on the server is used. The related dateTimeRelatesTo parameter specifies if the time is related to the arrival or departure.
     * @param {module:model/VTApiPlaneraResaCoreModelsDateTimeRelatesToType} opts.dateTimeRelatesTo Specifies if the datetime is related to the departure or arrival of the journey.
     * @param {String} opts.paginationReference Pagination reference from a previous search.
     * @param {Number} opts.limit The number of results to return. Not guaranteed to return the specified number of results and usually not more than 7 results. (default to 10)
     * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyTransportMode>} opts.transportModes The transport modes to include when searching for journeys, if none specified all transport modes are included.
     * @param {Array.<module:model/VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode>} opts.transportSubModes The transport sub modes to include when searching for journeys, if none specified all transport sub modes are included. Only supported in combination with transportMode 'train'.
     * @param {Boolean} opts.onlyDirectConnections Only include direct connections, e.g. journeys with one trip leg. (default to false)
     * @param {Boolean} opts.includeNearbyStopAreas Includes nearby stop areas when searching for a journey to or from a stop area or stop point. This means that the search algorithm will take additional stop points of other stop areas nearby the given start and destination stop area into account. These additional stop points are reachable by walk. E.g when true a journey suggestion may include a departure access link (initial walking leg) to a stop point of a stop area close by the specified origin stop area. (default to false)
     * @param {Number} opts.viaGid The 16-digit Västtrafik gid of the via location (which must be a stop area).
     * @param {String} opts.originWalk Enables/disables using footpaths in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable walk with a minimum distance of 0 meters and a maximum distance of 3 kilometers, set the parameter originWalk=1,0,3000. If default distances should be used, skip the values, e.g 1,,. This will enable walk with the default minimum (0 meters) and the default maximum (2000 meters).
     * @param {String} opts.destWalk Enables/disables using footpaths at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable walk with a minimum distance of 0 meters and a maximum distance of 3 kilometers, set the parameter destWalk=1,0,3000. If default distances should be used, skip the values, e.g 1,,. This will enable walk with the default minimum (0 meters) and the default maximum (2000 meters).
     * @param {String} opts.originBike Enables/disables using bike paths in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable bike with a minimum distance of 1000 meters and a maximum distance of 5 kilometers, set the parameter originBike=1,1000,5000. If default distances should be used, skip the values, e.g 1,,. This will enable bike with the default minimum (0 meters) and the default maximum (3000 meters).
     * @param {String} opts.destBike Enables/disables using bike paths at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable bike with a minimum distance of 1000 meters and a maximum distance of 5 kilometers, set the parameter destBike=1,1000,5000. If default distances should be used, skip the values, e.g 1,,. This will enable bike with the default minimum (0 meters) and the default maximum (3000 meters).
     * @param {String} opts.totalBike Enables/disables using bike routes for the whole trip. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable bike with a minimum distance of 0 meters and a maximum distance of 20 kilometers, set the parameter totalBike=1,0,20000. If default distances should be used, skip the values, e.g 1,,. This will enable bike with the default minimum (0 meters) and the default maximum (25000 meters).
     * @param {String} opts.originCar Enables/disables using car in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable car with a minimum distance of 2000 meters and a maximum distance of 7 kilometers, set the parameter origincar=1,2000,7000. If default distances should be used, skip the values, e.g 1,,. This will enable car with the default minimum (0 meters) and the default maximum (5000 meters).
     * @param {String} opts.destCar Enables/disables using car at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable car with a minimum distance of 2000 meters and a maximum distance of 7 kilometers, set the parameter destCar=1,2000,7000. If default distances should be used, skip the values, e.g 1,,. This will enable car with the default minimum (0 meters) and the default maximum (5000 meters).
     * @param {String} opts.originPark Enables/disables using Park and Ride in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable Park and Ride with a minimum distance of 3000 meters and a maximum distance of 70 kilometers, set the parameter originPark=1,3000,70000. If default distances should be used, skip the values, e.g 1,,. This will enable Park and Ride with the default minimum (2000 meters) and the default maximum (50000 meters).
     * @param {String} opts.destPark Enables/disables using Park and Ride at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable Park and Ride with a minimum distance of 3000 meters and a maximum distance of 70 kilometers, set the parameter destPark=1,3000,70000. If default distances should be used, skip the values, e.g 1,,. This will enable Park and Ride with the default minimum (2000 meters) and the default maximum (50000 meters).
     * @param {Number} opts.interchangeDurationInMinutes The minimum number of minutes between arrival and departure for a connection to be valid and the trip included in the search results, ignoring the default value.
     * @param {Boolean} opts.includeOccupancy Includes occupancy in journey. (default to false)
     * @param {module:api/JourneysApi~journeysGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse}
     */
    journeysGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'originGid': opts['originGid'],
        'originName': opts['originName'],
        'originLatitude': opts['originLatitude'],
        'originLongitude': opts['originLongitude'],
        'destinationGid': opts['destinationGid'],
        'destinationName': opts['destinationName'],
        'destinationLatitude': opts['destinationLatitude'],
        'destinationLongitude': opts['destinationLongitude'],
        'dateTime': opts['dateTime'],
        'dateTimeRelatesTo': opts['dateTimeRelatesTo'],
        'paginationReference': opts['paginationReference'],
        'limit': opts['limit'],
        'transportModes': this.apiClient.buildCollectionParam(opts['transportModes'], 'multi'),
        'transportSubModes': this.apiClient.buildCollectionParam(opts['transportSubModes'], 'multi'),
        'onlyDirectConnections': opts['onlyDirectConnections'],
        'includeNearbyStopAreas': opts['includeNearbyStopAreas'],
        'viaGid': opts['viaGid'],
        'originWalk': opts['originWalk'],
        'destWalk': opts['destWalk'],
        'originBike': opts['originBike'],
        'destBike': opts['destBike'],
        'totalBike': opts['totalBike'],
        'originCar': opts['originCar'],
        'destCar': opts['destCar'],
        'originPark': opts['originPark'],
        'destPark': opts['destPark'],
        'interchangeDurationInMinutes': opts['interchangeDurationInMinutes'],
        'includeOccupancy': opts['includeOccupancy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse;
      return this.apiClient.callApi(
        '/journeys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the journeysReconstructGet operation.
     * @callback module:api/JourneysApi~journeysReconstructGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reconstructs a journey based on the given reconstruction reference, received from the search journeys query.
     * Sample request:        GET /journeys/reconstruct?ref=¶HKI¶T$A=1@O=Brunnsparken, Göteborg@L=1760003@a=128@$A=1@O=Korsvägen, Göteborg@L=3980004@a=128@$202206131358$202206131406$Spå    4$$1$$$$$$¶KRCC¶#VE#1#
     * @param {String} ref The reconstruction reference. A reconstructionReference is valid as long as the original journey search is valid.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeOccupancy Includes occupancy in journey. (default to false)
     * @param {module:api/JourneysApi~journeysReconstructGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel}
     */
    journeysReconstructGet(ref, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ref' is set
      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling journeysReconstructGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'ref': ref,
        'includeOccupancy': opts['includeOccupancy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel;
      return this.apiClient.callApi(
        '/journeys/reconstruct', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the journeysValidTimeIntervalGet operation.
     * @callback module:api/JourneysApi~journeysValidTimeIntervalGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a time interval for when journey data is available.
     * @param {module:api/JourneysApi~journeysValidTimeIntervalGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel}
     */
    journeysValidTimeIntervalGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel;
      return this.apiClient.callApi(
        '/journeys/valid-time-interval', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}