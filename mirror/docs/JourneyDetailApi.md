# Reseplaneraren.JourneyDetailApi

All URIs are relative to *https://api.vasttrafik.se/bin/rest.exe/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJourneyDetail**](JourneyDetailApi.md#getJourneyDetail) | **GET** /journeyDetail | Returns information about the complete route of a trip.


<a name="getJourneyDetail"></a>
# **getJourneyDetail**
> JourneyDetail getJourneyDetail(ref)

Returns information about the complete route of a trip.

Delivers information about the complete route of a trip. This service can not be called directly but only by reference URLs in a result of a trip or departureBoard request. It contains a list of all stops/stations of this journey including all departure and arrival times (with real-time data if available) and additional information like specific attributes about facilities and other texts.

### Example
```javascript
var Reseplaneraren = require('reseplaneraren');

var apiInstance = new Reseplaneraren.JourneyDetailApi();

var ref = "ref_example"; // String | the ref query parameter, URL decoded, from a URL retrieved as a result of a trip or or departureBoard request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJourneyDetail(ref, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ref** | **String**| the ref query parameter, URL decoded, from a URL retrieved as a result of a trip or or departureBoard request | 

### Return type

[**JourneyDetail**](JourneyDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

