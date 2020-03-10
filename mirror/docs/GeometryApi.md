# Reseplaneraren.GeometryApi

All URIs are relative to *https://api.vasttrafik.se/bin/rest.exe/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGeometry**](GeometryApi.md#getGeometry) | **GET** /geometry | Returns the polyline for a leg.


<a name="getGeometry"></a>
# **getGeometry**
> Geometry getGeometry(ref)

Returns the polyline for a leg.

Returns the polyline for a leg. This service can not be called directly but only by reference URLs in a result of a trip or JourneyDetail request. The result contains a list of WGS84 coordinates which can be used to display the polyline on a map.If the parameter needItinerary&#x3D;1 is passed in the URL of the trip request that contained the reference to the Geometry service, the geometry reference link will also contain an itinerary for walk, bike and car legs, that can be used to generate turn-by-turn instructions.

### Example
```javascript
var Reseplaneraren = require('reseplaneraren');

var apiInstance = new Reseplaneraren.GeometryApi();

var ref = "ref_example"; // String | the ref query parameter, URL decoded, from a URL retrieved as a result of a trip or JourneyDetail request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGeometry(ref, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ref** | **String**| the ref query parameter, URL decoded, from a URL retrieved as a result of a trip or JourneyDetail request | 

### Return type

[**Geometry**](Geometry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

