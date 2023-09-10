# PlaneraResa.LocationsApi

All URIs are relative to *https://ext-api.vasttrafik.se/pr/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationsByCoordinatesGet**](LocationsApi.md#locationsByCoordinatesGet) | **GET** /locations/by-coordinates | Returns the locations nearest the specified coordinates. Currently only stop areas, stop points and meta-stations are supported.
[**locationsByTextGet**](LocationsApi.md#locationsByTextGet) | **GET** /locations/by-text | Returns locations matching the specified text. Currently only stop areas, addresses, points of interest and meta-stations are supported.



## locationsByCoordinatesGet

> VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse locationsByCoordinatesGet(latitude, longitude, opts)

Returns the locations nearest the specified coordinates. Currently only stop areas, stop points and meta-stations are supported.

Sample request:        GET /locations/by-coordinates?latitude&#x3D;57.708734&amp;longitude&#x3D;11.974764&amp;radiusInMeters&#x3D;500&amp;limit&#x3D;10&amp;offset&#x3D;0

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.LocationsApi();
let latitude = 3.4; // Number | The latitude.
let longitude = 3.4; // Number | The longitude.
let opts = {
  'radiusInMeters': 500, // Number | The search radius from the coordinates specified in meters. Must be a positive integer > 0.
  'types': [new PlaneraResa.VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType()], // [VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType] | The location types to include in the response, if none specified all locations types are included.
  'limit': 10, // Number | The number of results to return.
  'offset': 0 // Number | The zero-based start offset of the pagination.
};
apiInstance.locationsByCoordinatesGet(latitude, longitude, opts, (error, data, response) => {
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
 **latitude** | **Number**| The latitude. | 
 **longitude** | **Number**| The longitude. | 
 **radiusInMeters** | **Number**| The search radius from the coordinates specified in meters. Must be a positive integer &gt; 0. | [optional] [default to 500]
 **types** | [**[VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType]**](VTApiPlaneraResaWebV4ModelsLocationByCoordinatesType.md)| The location types to include in the response, if none specified all locations types are included. | [optional] 
 **limit** | **Number**| The number of results to return. | [optional] [default to 10]
 **offset** | **Number**| The zero-based start offset of the pagination. | [optional] [default to 0]

### Return type

[**VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse**](VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## locationsByTextGet

> VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse locationsByTextGet(q, opts)

Returns locations matching the specified text. Currently only stop areas, addresses, points of interest and meta-stations are supported.

Sample request:        GET /locations/by-text?q&#x3D;brunnsparken&amp;limit&#x3D;10&amp;offset&#x3D;0

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.LocationsApi();
let q = "q_example"; // String | The search text (e.g. 'brunn', 'cent' or 'Kungsgatan'). The maximum length allowed is 256 characters.
let opts = {
  'types': [new PlaneraResa.VTApiPlaneraResaWebV4ModelsLocationByTextType()], // [VTApiPlaneraResaWebV4ModelsLocationByTextType] | The location types to include in the response, if none specified all locations types are included.
  'limit': 10, // Number | The number of results to return.
  'offset': 0 // Number | The zero-based start offset of the pagination.
};
apiInstance.locationsByTextGet(q, opts, (error, data, response) => {
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
 **q** | **String**| The search text (e.g. &#39;brunn&#39;, &#39;cent&#39; or &#39;Kungsgatan&#39;). The maximum length allowed is 256 characters. | 
 **types** | [**[VTApiPlaneraResaWebV4ModelsLocationByTextType]**](VTApiPlaneraResaWebV4ModelsLocationByTextType.md)| The location types to include in the response, if none specified all locations types are included. | [optional] 
 **limit** | **Number**| The number of results to return. | [optional] [default to 10]
 **offset** | **Number**| The zero-based start offset of the pagination. | [optional] [default to 0]

### Return type

[**VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse**](VTApiPlaneraResaWebV4ModelsLocationsGetLocationsResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

