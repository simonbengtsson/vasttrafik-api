# PlaneraResa.StopAreasApi

All URIs are relative to *https://ext-api.vasttrafik.se/pr/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGet**](StopAreasApi.md#stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGet) | **GET** /stop-areas/{stopAreaGid}/arrivals/{detailsReference}/details | Returns details about an arrival.
[**stopAreasStopAreaGidArrivalsGet**](StopAreasApi.md#stopAreasStopAreaGidArrivalsGet) | **GET** /stop-areas/{stopAreaGid}/arrivals | Returns arrivals to the specified stop area at the specified time.
[**stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGet**](StopAreasApi.md#stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGet) | **GET** /stop-areas/{stopAreaGid}/departures/{detailsReference}/details | Returns details about a departure.
[**stopAreasStopAreaGidDeparturesGet**](StopAreasApi.md#stopAreasStopAreaGidDeparturesGet) | **GET** /stop-areas/{stopAreaGid}/departures | Returns departures from the specified stop area at the specified time.



## stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGet

> VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGet(detailsReference, stopAreaGid, opts)

Returns details about an arrival.

Sample request:        GET /stop-areas/9021014001760000/arrivals/{detailsReference}/details?includes&#x3D;servicejourneycalls

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.StopAreasApi();
let detailsReference = "detailsReference_example"; // String | The reference to the service journey, received from the arrivals call. A detailsReference is only valid during the same day as it was generated.
let stopAreaGid = "stopAreaGid_example"; // String | 
let opts = {
  'includes': [new PlaneraResa.VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType()] // [VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType] | The additional information to include in the response.
};
apiInstance.stopAreasStopAreaGidArrivalsDetailsReferenceDetailsGet(detailsReference, stopAreaGid, opts, (error, data, response) => {
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
 **detailsReference** | **String**| The reference to the service journey, received from the arrivals call. A detailsReference is only valid during the same day as it was generated. | 
 **stopAreaGid** | **String**|  | 
 **includes** | [**[VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType]**](VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType.md)| The additional information to include in the response. | [optional] 

### Return type

[**VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel**](VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stopAreasStopAreaGidArrivalsGet

> VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse stopAreasStopAreaGidArrivalsGet(stopAreaGid, opts)

Returns arrivals to the specified stop area at the specified time.

Sample request:        GET /stop-areas/9021014003980000/arrivals

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.StopAreasApi();
let stopAreaGid = "stopAreaGid_example"; // String | The 16-digit Västtrafik gid of the stop area.
let opts = {
  'startDateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The start of the time interval for which to get upcoming arrivals. Must be specified in RFC 3339 format or be null which means that the current time on the server is used.
  'platforms': "platforms_example", // String | Filter results by platform. Multiple platforms are separated by comma. Case sensitive.
  'timeSpanInMinutes': 60, // Number | The number of minutes from the start time for which to get upcoming arrivals. Allowed values are between 0 and 1440.
  'maxArrivalsPerLineAndDirection': 2, // Number | The maximum number of arrivals for a single line in a specific direction.
  'limit': 10, // Number | The number of results to return.
  'offset': 0 // Number | The zero-based start offset of the pagination.
};
apiInstance.stopAreasStopAreaGidArrivalsGet(stopAreaGid, opts, (error, data, response) => {
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
 **stopAreaGid** | **String**| The 16-digit Västtrafik gid of the stop area. | 
 **startDateTime** | **Date**| The start of the time interval for which to get upcoming arrivals. Must be specified in RFC 3339 format or be null which means that the current time on the server is used. | [optional] 
 **platforms** | **String**| Filter results by platform. Multiple platforms are separated by comma. Case sensitive. | [optional] 
 **timeSpanInMinutes** | **Number**| The number of minutes from the start time for which to get upcoming arrivals. Allowed values are between 0 and 1440. | [optional] [default to 60]
 **maxArrivalsPerLineAndDirection** | **Number**| The maximum number of arrivals for a single line in a specific direction. | [optional] [default to 2]
 **limit** | **Number**| The number of results to return. | [optional] [default to 10]
 **offset** | **Number**| The zero-based start offset of the pagination. | [optional] [default to 0]

### Return type

[**VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse**](VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGet

> VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGet(detailsReference, stopAreaGid, opts)

Returns details about a departure.

Sample request:        GET /stop-areas/9021014001760000/departures/{detailsReference}/details?includes&#x3D;servicejourneycalls

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.StopAreasApi();
let detailsReference = "detailsReference_example"; // String | The reference to the service journey, received from the departures call. A detailsReference is only valid during the same day as it was generated.
let stopAreaGid = "stopAreaGid_example"; // String | 
let opts = {
  'includes': [new PlaneraResa.VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType()] // [VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType] | The additional information to include in the response.
};
apiInstance.stopAreasStopAreaGidDeparturesDetailsReferenceDetailsGet(detailsReference, stopAreaGid, opts, (error, data, response) => {
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
 **detailsReference** | **String**| The reference to the service journey, received from the departures call. A detailsReference is only valid during the same day as it was generated. | 
 **stopAreaGid** | **String**|  | 
 **includes** | [**[VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType]**](VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType.md)| The additional information to include in the response. | [optional] 

### Return type

[**VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel**](VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stopAreasStopAreaGidDeparturesGet

> VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse stopAreasStopAreaGidDeparturesGet(stopAreaGid, opts)

Returns departures from the specified stop area at the specified time.

Sample request:        GET /stop-areas/9021014003980000/departures

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.StopAreasApi();
let stopAreaGid = "stopAreaGid_example"; // String | The 16-digit Västtrafik gid of the stop area.
let opts = {
  'startDateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The start of the time interval for which to get upcoming departures. Must be specified in RFC 3339 format or be null which means that the current time on the server is used.
  'platforms': "platforms_example", // String | Filter results by platform. Multiple platforms are separated by comma. Case sensitive.
  'timeSpanInMinutes': 60, // Number | The number of minutes from the start time for which to get upcoming departures. Allowed values are between 0 and 1440.
  'maxDeparturesPerLineAndDirection': 2, // Number | The maximum number of departures for a single line in a specific direction.
  'limit': 10, // Number | The number of results to return.
  'offset': 0, // Number | The zero-based start offset of the pagination.
  'includeOccupancy': false // Boolean | Includes occupancy in departure.
};
apiInstance.stopAreasStopAreaGidDeparturesGet(stopAreaGid, opts, (error, data, response) => {
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
 **stopAreaGid** | **String**| The 16-digit Västtrafik gid of the stop area. | 
 **startDateTime** | **Date**| The start of the time interval for which to get upcoming departures. Must be specified in RFC 3339 format or be null which means that the current time on the server is used. | [optional] 
 **platforms** | **String**| Filter results by platform. Multiple platforms are separated by comma. Case sensitive. | [optional] 
 **timeSpanInMinutes** | **Number**| The number of minutes from the start time for which to get upcoming departures. Allowed values are between 0 and 1440. | [optional] [default to 60]
 **maxDeparturesPerLineAndDirection** | **Number**| The maximum number of departures for a single line in a specific direction. | [optional] [default to 2]
 **limit** | **Number**| The number of results to return. | [optional] [default to 10]
 **offset** | **Number**| The zero-based start offset of the pagination. | [optional] [default to 0]
 **includeOccupancy** | **Boolean**| Includes occupancy in departure. | [optional] [default to false]

### Return type

[**VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse**](VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

