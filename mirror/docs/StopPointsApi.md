# PlaneraResa.StopPointsApi

All URIs are relative to *https://ext-api.vasttrafik.se/pr/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet**](StopPointsApi.md#stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet) | **GET** /stop-points/{stopPointGid}/arrivals/{detailsReference}/details | Returns details about an arrival.
[**stopPointsStopPointGidArrivalsGet**](StopPointsApi.md#stopPointsStopPointGidArrivalsGet) | **GET** /stop-points/{stopPointGid}/arrivals | Returns arrivals to the specified stop point at the specified time.
[**stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet**](StopPointsApi.md#stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet) | **GET** /stop-points/{stopPointGid}/departures/{detailsReference}/details | Returns details about a departure.
[**stopPointsStopPointGidDeparturesGet**](StopPointsApi.md#stopPointsStopPointGidDeparturesGet) | **GET** /stop-points/{stopPointGid}/departures | Returns departures from the specified stop point at the specified time.



## stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet

> VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet(detailsReference, stopPointGid, opts)

Returns details about an arrival.

Sample request:        GET /stop-points/9022014001760003/arrivals/{detailsReference}/details?includes&#x3D;servicejourneycalls

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.StopPointsApi();
let detailsReference = "detailsReference_example"; // String | The reference to the service journey, received from the arrivals call. A detailsReference is only valid during the same day as it was generated.
let stopPointGid = "stopPointGid_example"; // String | 
let opts = {
  'includes': [new PlaneraResa.VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType()] // [VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType] | The additional information to include in the response.
};
apiInstance.stopPointsStopPointGidArrivalsDetailsReferenceDetailsGet(detailsReference, stopPointGid, opts, (error, data, response) => {
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
 **stopPointGid** | **String**|  | 
 **includes** | [**[VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType]**](VTApiPlaneraResaWebV4ModelsArrivalDetailsIncludeType.md)| The additional information to include in the response. | [optional] 

### Return type

[**VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel**](VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsArrivalDetailsApiModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stopPointsStopPointGidArrivalsGet

> VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetArrivalsResponse stopPointsStopPointGidArrivalsGet(stopPointGid, opts)

Returns arrivals to the specified stop point at the specified time.

Sample request:        GET /stop-points/9022014001760003/arrivals

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.StopPointsApi();
let stopPointGid = "stopPointGid_example"; // String | The 16-digit Västtrafik gid of the stop point.
let opts = {
  'startDateTime': "startDateTime_example", // String | The start of the time interval for which to get upcoming arrivals. Must be specified in RFC 3339 format or be null which means that the current time on the server is used.
  'timeSpanInMinutes': 60, // Number | The number of minutes from the start time for which to get upcoming arrivals. Allowed values are between 0 and 1440.
  'maxArrivalsPerLineAndDirection': 2, // Number | The maximum number of arrivals for a single line in a specific direction.
  'limit': 10, // Number | The number of results to return.
  'offset': 0 // Number | The zero-based start offset of the pagination.
};
apiInstance.stopPointsStopPointGidArrivalsGet(stopPointGid, opts, (error, data, response) => {
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
 **stopPointGid** | **String**| The 16-digit Västtrafik gid of the stop point. | 
 **startDateTime** | **String**| The start of the time interval for which to get upcoming arrivals. Must be specified in RFC 3339 format or be null which means that the current time on the server is used. | [optional] 
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


## stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet

> VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet(detailsReference, stopPointGid, opts)

Returns details about a departure.

Sample request:        GET /stop-points/9022014001760003/departures/{detailsReference}/details?includes&#x3D;servicejourneycalls

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.StopPointsApi();
let detailsReference = "detailsReference_example"; // String | The reference to the service journey, received from the departures call. A detailsReference is only valid during the same day as it was generated.
let stopPointGid = "stopPointGid_example"; // String | 
let opts = {
  'includes': [new PlaneraResa.VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType()] // [VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType] | The additional information to include in the response.
};
apiInstance.stopPointsStopPointGidDeparturesDetailsReferenceDetailsGet(detailsReference, stopPointGid, opts, (error, data, response) => {
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
 **stopPointGid** | **String**|  | 
 **includes** | [**[VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType]**](VTApiPlaneraResaWebV4ModelsDepartureDetailsIncludeType.md)| The additional information to include in the response. | [optional] 

### Return type

[**VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel**](VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureDetailsApiModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## stopPointsStopPointGidDeparturesGet

> VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsGetDeparturesResponse stopPointsStopPointGidDeparturesGet(stopPointGid, opts)

Returns departures from the specified stop point at the specified time.

Sample request:        GET /stop-points/9022014001760003/departures

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.StopPointsApi();
let stopPointGid = "stopPointGid_example"; // String | The 16-digit Västtrafik gid of the stop point.
let opts = {
  'startDateTime': "startDateTime_example", // String | The start of the time interval for which to get upcoming departures. Must be specified in RFC 3339 format or be null which means that the current time on the server is used.
  'timeSpanInMinutes': 60, // Number | The number of minutes from the start time for which to get upcoming departures. Allowed values are between 0 and 1440.
  'maxDeparturesPerLineAndDirection': 2, // Number | The maximum number of departures for a single line in a specific direction.
  'limit': 10, // Number | The number of results to return.
  'offset': 0, // Number | The zero-based start offset of the pagination.
  'includeOccupancy': false // Boolean | Includes occupancy in departure.
};
apiInstance.stopPointsStopPointGidDeparturesGet(stopPointGid, opts, (error, data, response) => {
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
 **stopPointGid** | **String**| The 16-digit Västtrafik gid of the stop point. | 
 **startDateTime** | **String**| The start of the time interval for which to get upcoming departures. Must be specified in RFC 3339 format or be null which means that the current time on the server is used. | [optional] 
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

