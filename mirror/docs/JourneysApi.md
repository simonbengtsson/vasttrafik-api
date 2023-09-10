# PlaneraResa.JourneysApi

All URIs are relative to *https://ext-api.vasttrafik.se/pr/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**journeysDetailsReferenceDetailsGet**](JourneysApi.md#journeysDetailsReferenceDetailsGet) | **GET** /journeys/{detailsReference}/details | Returns details about a journey.
[**journeysGet**](JourneysApi.md#journeysGet) | **GET** /journeys | Returns journeys matching the specified search parameters.
[**journeysReconstructGet**](JourneysApi.md#journeysReconstructGet) | **GET** /journeys/reconstruct | Reconstructs a journey based on the given reconstruction reference, received from the search journeys query.
[**journeysValidTimeIntervalGet**](JourneysApi.md#journeysValidTimeIntervalGet) | **GET** /journeys/valid-time-interval | Returns a time interval for when journey data is available.



## journeysDetailsReferenceDetailsGet

> VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel journeysDetailsReferenceDetailsGet(detailsReference, opts)

Returns details about a journey.

Sample request:        GET /journeys/{detailsReference}/details?includes&#x3D;ticketsuggestions

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.JourneysApi();
let detailsReference = "detailsReference_example"; // String | The reference to the journey, received from the search journeys query. A detailsReference is only valid during the same day as it was generated.
let opts = {
  'includes': [new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType()], // [VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType] | The additional information to include in the response.
  'channelIds': [null], // [Number] | List of channel ids to include if 'ticketsuggestions' is set in the 'includes' parameter. Optional parameter.
  'productTypes': [null], // [Number] | List of product type ids to include if 'ticketsuggestions' is set in the 'includes' parameter. Optional parameter.
  'travellerCategories': [new PlaneraResa.VTApiPlaneraResaCoreModelsTravellerCategory()] // [VTApiPlaneraResaCoreModelsTravellerCategory] | List of traveller category ids to include if 'ticketsuggestions' is set in the 'includes' parameter. Optional parameter.
};
apiInstance.journeysDetailsReferenceDetailsGet(detailsReference, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detailsReference** | **String**| The reference to the journey, received from the search journeys query. A detailsReference is only valid during the same day as it was generated. | 
 **includes** | [**[VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType]**](VTApiPlaneraResaWebV4ModelsJourneyDetailsIncludeType.md)| The additional information to include in the response. | [optional] 
 **channelIds** | [**[Number]**](Number.md)| List of channel ids to include if &#39;ticketsuggestions&#39; is set in the &#39;includes&#39; parameter. Optional parameter. | [optional] 
 **productTypes** | [**[Number]**](Number.md)| List of product type ids to include if &#39;ticketsuggestions&#39; is set in the &#39;includes&#39; parameter. Optional parameter. | [optional] 
 **travellerCategories** | [**[VTApiPlaneraResaCoreModelsTravellerCategory]**](VTApiPlaneraResaCoreModelsTravellerCategory.md)| List of traveller category ids to include if &#39;ticketsuggestions&#39; is set in the &#39;includes&#39; parameter. Optional parameter. | [optional] 

### Return type

[**VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel**](VTApiPlaneraResaWebV4ModelsJourneyDetailsJourneyDetailsApiModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## journeysGet

> VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse journeysGet(opts)

Returns journeys matching the specified search parameters.

For an origin or destination to be valid, either a gid or a combination of latitude and longitude must be specified. OriginName and destinationName are optional in combination with latitude and longitude.    Sample request:        GET /journeys?originGid&#x3D;9021014001760000&amp;destinationGid&#x3D;9021014003980000    or        GET /journeys?originName&#x3D;Sadelsten,+V%C3%A5rg%C3%A5rda&amp;originLongitude&#x3D;12.63308&amp;originLatitude&#x3D;58.028237&amp;destinationLongitude&#x3D;11.930897&amp;destinationLatitude&#x3D;57.586085&amp;destinationName&#x3D;%C3%85sdammsstigen,+427+36+Billdal

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.JourneysApi();
let opts = {
  'originGid': "originGid_example", // String | The 16-digit Västtrafik gid of the origin location (which could be either a stop area (e.g. '9021014001760000'), a stop point (e.g. '9022014001760004') or meta-station (e.g. '0000000800000022')).
  'originName': "originName_example", // String | The name of the origin location. The maximum length allowed is 256 characters.
  'originLatitude': 3.4, // Number | The latitude of the origin location.
  'originLongitude': 3.4, // Number | The longitude of the origin location.
  'destinationGid': "destinationGid_example", // String | The 16-digit Västtrafik gid of the destination location (which could be either a stop area, stop point or meta-station).
  'destinationName': "destinationName_example", // String | The name of the destination location. The maximum length allowed is 256 characters.
  'destinationLatitude': 3.4, // Number | The latitude of the destination location.
  'destinationLongitude': 3.4, // Number | The longitude of the destination location.
  'dateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The datetime for which to search journeys. Must be specified in RFC 3339 format or be null which means that the current time on the server is used. The related dateTimeRelatesTo parameter specifies if the time is related to the arrival or departure.
  'dateTimeRelatesTo': new PlaneraResa.VTApiPlaneraResaCoreModelsDateTimeRelatesToType(), // VTApiPlaneraResaCoreModelsDateTimeRelatesToType | Specifies if the datetime is related to the departure or arrival of the journey.
  'paginationReference': "paginationReference_example", // String | Pagination reference from a previous search.
  'limit': 10, // Number | The number of results to return. Not guaranteed to return the specified number of results and usually not more than 7 results.
  'transportModes': [new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyTransportMode()], // [VTApiPlaneraResaWebV4ModelsJourneyTransportMode] | The transport modes to include when searching for journeys, if none specified all transport modes are included.
  'transportSubModes': [new PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode()], // [VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode] | The transport sub modes to include when searching for journeys, if none specified all transport sub modes are included. Only supported in combination with transportMode 'train'.
  'onlyDirectConnections': false, // Boolean | Only include direct connections, e.g. journeys with one trip leg.
  'includeNearbyStopAreas': false, // Boolean | Includes nearby stop areas when searching for a journey to or from a stop area or stop point. This means that the search algorithm will take additional stop points of other stop areas nearby the given start and destination stop area into account. These additional stop points are reachable by walk. E.g when true a journey suggestion may include a departure access link (initial walking leg) to a stop point of a stop area close by the specified origin stop area.
  'viaGid': 789, // Number | The 16-digit Västtrafik gid of the via location (which must be a stop area).
  'originWalk': "originWalk_example", // String | Enables/disables using footpaths in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable walk with a minimum distance of 0 meters and a maximum distance of 3 kilometers, set the parameter originWalk=1,0,3000. If default distances should be used, skip the values, e.g 1,,. This will enable walk with the default minimum (0 meters) and the default maximum (2000 meters).
  'destWalk': "destWalk_example", // String | Enables/disables using footpaths at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable walk with a minimum distance of 0 meters and a maximum distance of 3 kilometers, set the parameter destWalk=1,0,3000. If default distances should be used, skip the values, e.g 1,,. This will enable walk with the default minimum (0 meters) and the default maximum (2000 meters).
  'originBike': "originBike_example", // String | Enables/disables using bike paths in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable bike with a minimum distance of 1000 meters and a maximum distance of 5 kilometers, set the parameter originBike=1,1000,5000. If default distances should be used, skip the values, e.g 1,,. This will enable bike with the default minimum (0 meters) and the default maximum (3000 meters).
  'destBike': "destBike_example", // String | Enables/disables using bike paths at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable bike with a minimum distance of 1000 meters and a maximum distance of 5 kilometers, set the parameter destBike=1,1000,5000. If default distances should be used, skip the values, e.g 1,,. This will enable bike with the default minimum (0 meters) and the default maximum (3000 meters).
  'totalBike': "totalBike_example", // String | Enables/disables using bike routes for the whole trip. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable bike with a minimum distance of 0 meters and a maximum distance of 20 kilometers, set the parameter totalBike=1,0,20000. If default distances should be used, skip the values, e.g 1,,. This will enable bike with the default minimum (0 meters) and the default maximum (25000 meters).
  'originCar': "originCar_example", // String | Enables/disables using car in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable car with a minimum distance of 2000 meters and a maximum distance of 7 kilometers, set the parameter origincar=1,2000,7000. If default distances should be used, skip the values, e.g 1,,. This will enable car with the default minimum (0 meters) and the default maximum (5000 meters).
  'destCar': "destCar_example", // String | Enables/disables using car at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable car with a minimum distance of 2000 meters and a maximum distance of 7 kilometers, set the parameter destCar=1,2000,7000. If default distances should be used, skip the values, e.g 1,,. This will enable car with the default minimum (0 meters) and the default maximum (5000 meters).
  'originPark': "originPark_example", // String | Enables/disables using Park and Ride in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable Park and Ride with a minimum distance of 3000 meters and a maximum distance of 70 kilometers, set the parameter originPark=1,3000,70000. If default distances should be used, skip the values, e.g 1,,. This will enable Park and Ride with the default minimum (2000 meters) and the default maximum (50000 meters).
  'destPark': "destPark_example", // String | Enables/disables using Park and Ride at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable Park and Ride with a minimum distance of 3000 meters and a maximum distance of 70 kilometers, set the parameter destPark=1,3000,70000. If default distances should be used, skip the values, e.g 1,,. This will enable Park and Ride with the default minimum (2000 meters) and the default maximum (50000 meters).
  'interchangeDurationInMinutes': 56, // Number | The minimum number of minutes between arrival and departure for a connection to be valid and the trip included in the search results, ignoring the default value.
  'includeOccupancy': false // Boolean | Includes occupancy in journey.
};
apiInstance.journeysGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originGid** | **String**| The 16-digit Västtrafik gid of the origin location (which could be either a stop area (e.g. &#39;9021014001760000&#39;), a stop point (e.g. &#39;9022014001760004&#39;) or meta-station (e.g. &#39;0000000800000022&#39;)). | [optional] 
 **originName** | **String**| The name of the origin location. The maximum length allowed is 256 characters. | [optional] 
 **originLatitude** | **Number**| The latitude of the origin location. | [optional] 
 **originLongitude** | **Number**| The longitude of the origin location. | [optional] 
 **destinationGid** | **String**| The 16-digit Västtrafik gid of the destination location (which could be either a stop area, stop point or meta-station). | [optional] 
 **destinationName** | **String**| The name of the destination location. The maximum length allowed is 256 characters. | [optional] 
 **destinationLatitude** | **Number**| The latitude of the destination location. | [optional] 
 **destinationLongitude** | **Number**| The longitude of the destination location. | [optional] 
 **dateTime** | **Date**| The datetime for which to search journeys. Must be specified in RFC 3339 format or be null which means that the current time on the server is used. The related dateTimeRelatesTo parameter specifies if the time is related to the arrival or departure. | [optional] 
 **dateTimeRelatesTo** | [**VTApiPlaneraResaCoreModelsDateTimeRelatesToType**](.md)| Specifies if the datetime is related to the departure or arrival of the journey. | [optional] 
 **paginationReference** | **String**| Pagination reference from a previous search. | [optional] 
 **limit** | **Number**| The number of results to return. Not guaranteed to return the specified number of results and usually not more than 7 results. | [optional] [default to 10]
 **transportModes** | [**[VTApiPlaneraResaWebV4ModelsJourneyTransportMode]**](VTApiPlaneraResaWebV4ModelsJourneyTransportMode.md)| The transport modes to include when searching for journeys, if none specified all transport modes are included. | [optional] 
 **transportSubModes** | [**[VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode]**](VTApiPlaneraResaWebV4ModelsJourneyTransportSubMode.md)| The transport sub modes to include when searching for journeys, if none specified all transport sub modes are included. Only supported in combination with transportMode &#39;train&#39;. | [optional] 
 **onlyDirectConnections** | **Boolean**| Only include direct connections, e.g. journeys with one trip leg. | [optional] [default to false]
 **includeNearbyStopAreas** | **Boolean**| Includes nearby stop areas when searching for a journey to or from a stop area or stop point. This means that the search algorithm will take additional stop points of other stop areas nearby the given start and destination stop area into account. These additional stop points are reachable by walk. E.g when true a journey suggestion may include a departure access link (initial walking leg) to a stop point of a stop area close by the specified origin stop area. | [optional] [default to false]
 **viaGid** | **Number**| The 16-digit Västtrafik gid of the via location (which must be a stop area). | [optional] 
 **originWalk** | **String**| Enables/disables using footpaths in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable walk with a minimum distance of 0 meters and a maximum distance of 3 kilometers, set the parameter originWalk&#x3D;1,0,3000. If default distances should be used, skip the values, e.g 1,,. This will enable walk with the default minimum (0 meters) and the default maximum (2000 meters). | [optional] 
 **destWalk** | **String**| Enables/disables using footpaths at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable walk with a minimum distance of 0 meters and a maximum distance of 3 kilometers, set the parameter destWalk&#x3D;1,0,3000. If default distances should be used, skip the values, e.g 1,,. This will enable walk with the default minimum (0 meters) and the default maximum (2000 meters). | [optional] 
 **originBike** | **String**| Enables/disables using bike paths in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable bike with a minimum distance of 1000 meters and a maximum distance of 5 kilometers, set the parameter originBike&#x3D;1,1000,5000. If default distances should be used, skip the values, e.g 1,,. This will enable bike with the default minimum (0 meters) and the default maximum (3000 meters). | [optional] 
 **destBike** | **String**| Enables/disables using bike paths at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable bike with a minimum distance of 1000 meters and a maximum distance of 5 kilometers, set the parameter destBike&#x3D;1,1000,5000. If default distances should be used, skip the values, e.g 1,,. This will enable bike with the default minimum (0 meters) and the default maximum (3000 meters). | [optional] 
 **totalBike** | **String**| Enables/disables using bike routes for the whole trip. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable bike with a minimum distance of 0 meters and a maximum distance of 20 kilometers, set the parameter totalBike&#x3D;1,0,20000. If default distances should be used, skip the values, e.g 1,,. This will enable bike with the default minimum (0 meters) and the default maximum (25000 meters). | [optional] 
 **originCar** | **String**| Enables/disables using car in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable car with a minimum distance of 2000 meters and a maximum distance of 7 kilometers, set the parameter origincar&#x3D;1,2000,7000. If default distances should be used, skip the values, e.g 1,,. This will enable car with the default minimum (0 meters) and the default maximum (5000 meters). | [optional] 
 **destCar** | **String**| Enables/disables using car at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable car with a minimum distance of 2000 meters and a maximum distance of 7 kilometers, set the parameter destCar&#x3D;1,2000,7000. If default distances should be used, skip the values, e.g 1,,. This will enable car with the default minimum (0 meters) and the default maximum (5000 meters). | [optional] 
 **originPark** | **String**| Enables/disables using Park and Ride in the beginning of a trip when searching from an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable Park and Ride with a minimum distance of 3000 meters and a maximum distance of 70 kilometers, set the parameter originPark&#x3D;1,3000,70000. If default distances should be used, skip the values, e.g 1,,. This will enable Park and Ride with the default minimum (2000 meters) and the default maximum (50000 meters). | [optional] 
 **destPark** | **String**| Enables/disables using Park and Ride at the end of a trip when searching to an address. To fine-tune the minimum and/or maximum distance to the next public transport station, provide these values separated by comma. The values are expressed in meters. To enable Park and Ride with a minimum distance of 3000 meters and a maximum distance of 70 kilometers, set the parameter destPark&#x3D;1,3000,70000. If default distances should be used, skip the values, e.g 1,,. This will enable Park and Ride with the default minimum (2000 meters) and the default maximum (50000 meters). | [optional] 
 **interchangeDurationInMinutes** | **Number**| The minimum number of minutes between arrival and departure for a connection to be valid and the trip included in the search results, ignoring the default value. | [optional] 
 **includeOccupancy** | **Boolean**| Includes occupancy in journey. | [optional] [default to false]

### Return type

[**VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse**](VTApiPlaneraResaWebV4ModelsJourneysGetJourneysResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## journeysReconstructGet

> VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel journeysReconstructGet(ref, opts)

Reconstructs a journey based on the given reconstruction reference, received from the search journeys query.

Sample request:        GET /journeys/reconstruct?ref&#x3D;¶HKI¶T$A&#x3D;1@O&#x3D;Brunnsparken, Göteborg@L&#x3D;1760003@a&#x3D;128@$A&#x3D;1@O&#x3D;Korsvägen, Göteborg@L&#x3D;3980004@a&#x3D;128@$202206131358$202206131406$Spå    4$$1$$$$$$¶KRCC¶#VE#1#

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.JourneysApi();
let ref = "ref_example"; // String | The reconstruction reference. A reconstructionReference is valid as long as the original journey search is valid.
let opts = {
  'includeOccupancy': false // Boolean | Includes occupancy in journey.
};
apiInstance.journeysReconstructGet(ref, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ref** | **String**| The reconstruction reference. A reconstructionReference is valid as long as the original journey search is valid. | 
 **includeOccupancy** | **Boolean**| Includes occupancy in journey. | [optional] [default to false]

### Return type

[**VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel**](VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## journeysValidTimeIntervalGet

> VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel journeysValidTimeIntervalGet()

Returns a time interval for when journey data is available.

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.JourneysApi();
apiInstance.journeysValidTimeIntervalGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel**](VTApiPlaneraResaWebV4ModelsValidTimeIntervalApiModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

