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


import ApiClient from './ApiClient';
import MicrosoftAspNetCoreMvcProblemDetails from './model/MicrosoftAspNetCoreMvcProblemDetails';
import VTApiPlaneraResaCoreModelsDateTimeRelatesToType from './model/VTApiPlaneraResaCoreModelsDateTimeRelatesToType';
import VTApiPlaneraResaCoreModelsLocationType from './model/VTApiPlaneraResaCoreModelsLocationType';
import VTApiPlaneraResaCoreModelsNote from './model/VTApiPlaneraResaCoreModelsNote';
import VTApiPlaneraResaCoreModelsPositionTransportMode from './model/VTApiPlaneraResaCoreModelsPositionTransportMode';
import VTApiPlaneraResaCoreModelsSeverity from './model/VTApiPlaneraResaCoreModelsSeverity';
import VTApiPlaneraResaCoreModelsTimeLimitation from './model/VTApiPlaneraResaCoreModelsTimeLimitation';
import VTApiPlaneraResaCoreModelsTimeValidityType from './model/VTApiPlaneraResaCoreModelsTimeValidityType';
import VTApiPlaneraResaCoreModelsTimeValidityUnit from './model/VTApiPlaneraResaCoreModelsTimeValidityUnit';
import VTApiPlaneraResaCoreModelsTransportMode from './model/VTApiPlaneraResaCoreModelsTransportMode';
import VTApiPlaneraResaCoreModelsTransportSubMode from './model/VTApiPlaneraResaCoreModelsTransportSubMode';
import VTApiPlaneraResaCoreModelsTravellerCategory from './model/VTApiPlaneraResaCoreModelsTravellerCategory';
import VTApiPlaneraResaWebV4ModelsApiError from './model/VTApiPlaneraResaWebV4ModelsApiError';
import VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType from './model/VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType';
import VTApiPlaneraResaWebV4ModelsCoordinateApiModel from './model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel';
import VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType from './model/VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCallDetailsApiModel from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCallDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCoordinateApiModel from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCoordinateApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel from './model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsArrivalAccessLinkApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsArrivalAccessLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsChannelApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsChannelApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsConnectionLinkApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsConnectionLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsDepartureAccessLinkApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsDepartureAccessLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsDestinationLinkApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsDestinationLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyDetailsZoneApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneyDetailsZoneApiModel';
import VTApiPlaneraResaWebV4ModelsJourneyTransportMode from './model/VTApiPlaneraResaWebV4ModelsJourneyTransportMode';
import VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode from './model/VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode';
import VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysCallApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysCallApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse from './model/VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse';
import VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysLineApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysLineApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel';
import VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel from './model/VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel';
import VTApiPlaneraResaWebV4ModelsLinkSegmentManeuver from './model/VTApiPlaneraResaWebV4ModelsLinkSegmentManeuver';
import VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation from './model/VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation';
import VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType from './model/VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType';
import VTApiPlaneraResaWebV4ModelsLocationByTextType from './model/VTApiPlaneraResaWebV4ModelsLocationByTextType';
import VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse from './model/VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse';
import VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel from './model/VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel';
import VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel from './model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel';
import VTApiPlaneraResaWebV4ModelsOccupancyInformationSource from './model/VTApiPlaneraResaWebV4ModelsOccupancyInformationSource';
import VTApiPlaneraResaWebV4ModelsOccupancyLevel from './model/VTApiPlaneraResaWebV4ModelsOccupancyLevel';
import VTApiPlaneraResaWebV4ModelsPaginationLinks from './model/VTApiPlaneraResaWebV4ModelsPaginationLinks';
import VTApiPlaneraResaWebV4ModelsPaginationProperties from './model/VTApiPlaneraResaWebV4ModelsPaginationProperties';
import VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel from './model/VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel';
import VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel from './model/VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel';
import VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel from './model/VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel';
import VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel from './model/VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel';
import VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel from './model/VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel';
import JourneysApi from './api/JourneysApi';
import LocationsApi from './api/LocationsApi';
import PositionsApi from './api/PositionsApi';
import StopAreasApi from './api/StopAreasApi';
import StopPointsApi from './api/StopPointsApi';


/**
* Sök och planera resor med Västtrafik.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PlaneraResa = require('index'); // See note below*.
* var xxxSvc = new PlaneraResa.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PlaneraResa.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PlaneraResa.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PlaneraResa.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v4
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The MicrosoftAspNetCoreMvcProblemDetails model constructor.
     * @property {module:model/MicrosoftAspNetCoreMvcProblemDetails}
     */
    MicrosoftAspNetCoreMvcProblemDetails,

    /**
     * The VTApiPlaneraResaCoreModelsDateTimeRelatesToType model constructor.
     * @property {module:model/VTApiPlaneraResaCoreModelsDateTimeRelatesToType}
     */
    VTApiPlaneraResaCoreModelsDateTimeRelatesToType,

    /**
     * The VTApiPlaneraResaCoreModelsLocationType model constructor.
     * @property {module:model/VTApiPlaneraResaCoreModelsLocationType}
     */
    VTApiPlaneraResaCoreModelsLocationType,

    /**
     * The VTApiPlaneraResaCoreModelsNote model constructor.
     * @property {module:model/VTApiPlaneraResaCoreModelsNote}
     */
    VTApiPlaneraResaCoreModelsNote,

    /**
     * The VTApiPlaneraResaCoreModelsPositionTransportMode model constructor.
     * @property {module:model/VTApiPlaneraResaCoreModelsPositionTransportMode}
     */
    VTApiPlaneraResaCoreModelsPositionTransportMode,

    /**
     * The VTApiPlaneraResaCoreModelsSeverity model constructor.
     * @property {module:model/VTApiPlaneraResaCoreModelsSeverity}
     */
    VTApiPlaneraResaCoreModelsSeverity,

    /**
     * The VTApiPlaneraResaCoreModelsTimeLimitation model constructor.
     * @property {module:model/VTApiPlaneraResaCoreModelsTimeLimitation}
     */
    VTApiPlaneraResaCoreModelsTimeLimitation,

    /**
     * The VTApiPlaneraResaCoreModelsTimeValidityType model constructor.
     * @property {module:model/VTApiPlaneraResaCoreModelsTimeValidityType}
     */
    VTApiPlaneraResaCoreModelsTimeValidityType,

    /**
     * The VTApiPlaneraResaCoreModelsTimeValidityUnit model constructor.
     * @property {module:model/VTApiPlaneraResaCoreModelsTimeValidityUnit}
     */
    VTApiPlaneraResaCoreModelsTimeValidityUnit,

    /**
     * The VTApiPlaneraResaCoreModelsTransportMode model constructor.
     * @property {module:model/VTApiPlaneraResaCoreModelsTransportMode}
     */
    VTApiPlaneraResaCoreModelsTransportMode,

    /**
     * The VTApiPlaneraResaCoreModelsTransportSubMode model constructor.
     * @property {module:model/VTApiPlaneraResaCoreModelsTransportSubMode}
     */
    VTApiPlaneraResaCoreModelsTransportSubMode,

    /**
     * The VTApiPlaneraResaCoreModelsTravellerCategory model constructor.
     * @property {module:model/VTApiPlaneraResaCoreModelsTravellerCategory}
     */
    VTApiPlaneraResaCoreModelsTravellerCategory,

    /**
     * The VTApiPlaneraResaWebV4ModelsApiError model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsApiError}
     */
    VTApiPlaneraResaWebV4ModelsApiError,

    /**
     * The VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType}
     */
    VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType,

    /**
     * The VTApiPlaneraResaWebV4ModelsCoordinateApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsCoordinateApiModel}
     */
    VTApiPlaneraResaWebV4ModelsCoordinateApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType}
     */
    VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCallDetailsApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCallDetailsApiModel}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCallDetailsApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCoordinateApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCoordinateApiModel}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsCoordinateApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsLineDetailsApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyDetailsApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel}
     */
    VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsArrivalAccessLinkApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsArrivalAccessLinkApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsArrivalAccessLinkApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsChannelApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsChannelApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsChannelApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsConnectionLinkApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsConnectionLinkApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsConnectionLinkApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsDepartureAccessLinkApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsDepartureAccessLinkApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsDepartureAccessLinkApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsDestinationLinkApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsDestinationLinkApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsDestinationLinkApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsExistingTicketApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsLineDetailsApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsPunchConfigurationDurationApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsServiceJourneyApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsStopAreaApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTimeValidityApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsTripLegDetailsApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyDetailsZoneApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyDetailsZoneApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneyDetailsZoneApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyTransportMode model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyTransportMode}
     */
    VTApiPlaneraResaWebV4ModelsJourneyTransportMode,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode}
     */
    VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysCallApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysCallApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysCallApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse}
     */
    VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysLineApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysLineApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysLineApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysStopAreaApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysTariffZoneApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel}
     */
    VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsLinkSegmentManeuver model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsLinkSegmentManeuver}
     */
    VTApiPlaneraResaWebV4ModelsLinkSegmentManeuver,

    /**
     * The VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation}
     */
    VTApiPlaneraResaWebV4ModelsLinkSegmentOrientation,

    /**
     * The VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType}
     */
    VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType,

    /**
     * The VTApiPlaneraResaWebV4ModelsLocationByTextType model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsLocationByTextType}
     */
    VTApiPlaneraResaWebV4ModelsLocationByTextType,

    /**
     * The VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse}
     */
    VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse,

    /**
     * The VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel}
     */
    VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel}
     */
    VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsOccupancyInformationSource model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsOccupancyInformationSource}
     */
    VTApiPlaneraResaWebV4ModelsOccupancyInformationSource,

    /**
     * The VTApiPlaneraResaWebV4ModelsOccupancyLevel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsOccupancyLevel}
     */
    VTApiPlaneraResaWebV4ModelsOccupancyLevel,

    /**
     * The VTApiPlaneraResaWebV4ModelsPaginationLinks model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsPaginationLinks}
     */
    VTApiPlaneraResaWebV4ModelsPaginationLinks,

    /**
     * The VTApiPlaneraResaWebV4ModelsPaginationProperties model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsPaginationProperties}
     */
    VTApiPlaneraResaWebV4ModelsPaginationProperties,

    /**
     * The VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel}
     */
    VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel}
     */
    VTApiPlaneraResaWebV4ModelsPositionsLineDetailsApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel}
     */
    VTApiPlaneraResaWebV4ModelsProductInstanceTypeApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel}
     */
    VTApiPlaneraResaWebV4ModelsPunchConfigurationDurationUnitApiModel,

    /**
     * The VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel model constructor.
     * @property {module:model/VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel}
     */
    VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel,

    /**
    * The JourneysApi service constructor.
    * @property {module:api/JourneysApi}
    */
    JourneysApi,

    /**
    * The LocationsApi service constructor.
    * @property {module:api/LocationsApi}
    */
    LocationsApi,

    /**
    * The PositionsApi service constructor.
    * @property {module:api/PositionsApi}
    */
    PositionsApi,

    /**
    * The StopAreasApi service constructor.
    * @property {module:api/StopAreasApi}
    */
    StopAreasApi,

    /**
    * The StopPointsApi service constructor.
    * @property {module:api/StopPointsApi}
    */
    StopPointsApi
};
