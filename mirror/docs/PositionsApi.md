# PlaneraResa.PositionsApi

All URIs are relative to *https://ext-api.vasttrafik.se/pr/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**positionsGet**](PositionsApi.md#positionsGet) | **GET** /positions | Returns journey positions within a bounding box



## positionsGet

> [VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel] positionsGet(lowerLeftLat, lowerLeftLong, upperRightLat, upperRightLong, opts)

Returns journey positions within a bounding box

Sample request:        GET /positions?lowerLeftLat&#x3D;57.721723&amp;lowerLeftLong&#x3D;12.011882&amp;upperRightLat&#x3D;57.737549&amp;upperRightLong&#x3D;12.039268&amp;limit&#x3D;100

### Example

```javascript
import PlaneraResa from 'planera_resa';
let defaultClient = PlaneraResa.ApiClient.instance;
// Configure OAuth2 access token for authorization: auth
let auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new PlaneraResa.PositionsApi();
let lowerLeftLat = 3.4; // Number | Lower left latitude of bounding box.
let lowerLeftLong = 3.4; // Number | Lower left longitude of bounding box.
let upperRightLat = 3.4; // Number | Upper right latitude of bounding box.
let upperRightLong = 3.4; // Number | Upper right longitude of bounding box.
let opts = {
  'transportModes': [new PlaneraResa.VTApiPlaneraResaCoreModelsPositionTransportMode()], // [VTApiPlaneraResaCoreModelsPositionTransportMode] | The transport modes to include when searching for journeys, if none specified all transport modes are included.
  'detailsReferences': ["null"], // [String] | Filter journeys by one or more journey details reference.
  'lineDesignations': ["null"], // [String] | Only journeys running the given lineDesignations (case sensitive) are part of the result.
  'limit': 100 // Number | Maximum number of journeys in response. Range from 1 to 200. Defaults to 100
};
apiInstance.positionsGet(lowerLeftLat, lowerLeftLong, upperRightLat, upperRightLong, opts, (error, data, response) => {
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
 **lowerLeftLat** | **Number**| Lower left latitude of bounding box. | 
 **lowerLeftLong** | **Number**| Lower left longitude of bounding box. | 
 **upperRightLat** | **Number**| Upper right latitude of bounding box. | 
 **upperRightLong** | **Number**| Upper right longitude of bounding box. | 
 **transportModes** | [**[VTApiPlaneraResaCoreModelsPositionTransportMode]**](VTApiPlaneraResaCoreModelsPositionTransportMode.md)| The transport modes to include when searching for journeys, if none specified all transport modes are included. | [optional] 
 **detailsReferences** | [**[String]**](String.md)| Filter journeys by one or more journey details reference. | [optional] 
 **lineDesignations** | [**[String]**](String.md)| Only journeys running the given lineDesignations (case sensitive) are part of the result. | [optional] 
 **limit** | **Number**| Maximum number of journeys in response. Range from 1 to 200. Defaults to 100 | [optional] [default to 100]

### Return type

[**[VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel]**](VTApiPlaneraResaWebV4ModelsPositionsJourneyPositionApiModel.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

