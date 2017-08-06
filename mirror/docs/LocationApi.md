# Reseplaneraren.LocationApi

All URIs are relative to *https://api.vasttrafik.se/bin/rest.exe/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllStops**](LocationApi.md#getAllStops) | **GET** /location.allstops | Returns a list of all stops available in the journey planner.
[**getLocationByName**](LocationApi.md#getLocationByName) | **GET** /location.name | Returns a list of possible matches in the journey planner database
[**getNearbyAddress**](LocationApi.md#getNearbyAddress) | **GET** /location.nearbyaddress | Returns the address nearest a given coordinate.
[**getNearbyStops**](LocationApi.md#getNearbyStops) | **GET** /location.nearbystops | Returns a list of stops around a given center coordinate.


<a name="getAllStops"></a>
# **getAllStops**
> LocationList getAllStops(opts)

Returns a list of all stops available in the journey planner.

Returns a list of all stops available in the journey planner. Be aware that a call of this service is very time consuming and should be only requested when it is really needed.

### Example
```javascript
var Reseplaneraren = require('reseplaneraren');

var apiInstance = new Reseplaneraren.LocationApi();

var opts = { 
  'format': "format_example", // String | the required response format
  'jsonpCallback': "jsonpCallback_example" // String | If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllStops(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**| the required response format | [optional] 
 **jsonpCallback** | **String**| If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name. | [optional] 

### Return type

[**LocationList**](LocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="getLocationByName"></a>
# **getLocationByName**
> LocationList getLocationByName(opts)

Returns a list of possible matches in the journey planner database

Performs a pattern matching of a user input to retrieve a list of possible matches in the journey planner database. Possible matches might be stops/stations, points of interest and addresses.

### Example
```javascript
var Reseplaneraren = require('reseplaneraren');

var apiInstance = new Reseplaneraren.LocationApi();

var opts = { 
  'input': "input_example", // String | a string with the user input
  'format': "format_example", // String | the required response format
  'jsonpCallback': "jsonpCallback_example" // String | If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLocationByName(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | **String**| a string with the user input | [optional] 
 **format** | **String**| the required response format | [optional] 
 **jsonpCallback** | **String**| If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name. | [optional] 

### Return type

[**LocationList**](LocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="getNearbyAddress"></a>
# **getNearbyAddress**
> LocationList getNearbyAddress(originCoordLat, originCoordLong, opts)

Returns the address nearest a given coordinate.



### Example
```javascript
var Reseplaneraren = require('reseplaneraren');

var apiInstance = new Reseplaneraren.LocationApi();

var originCoordLat = 1.2; // Number | latitude of coordinate in the WGS84 system

var originCoordLong = 1.2; // Number | longitude of coordinate in the WGS84 system

var opts = { 
  'format': "format_example", // String | the required response format
  'jsonpCallback': "jsonpCallback_example" // String | If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNearbyAddress(originCoordLat, originCoordLong, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originCoordLat** | **Number**| latitude of coordinate in the WGS84 system | 
 **originCoordLong** | **Number**| longitude of coordinate in the WGS84 system | 
 **format** | **String**| the required response format | [optional] 
 **jsonpCallback** | **String**| If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name. | [optional] 

### Return type

[**LocationList**](LocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="getNearbyStops"></a>
# **getNearbyStops**
> LocationList getNearbyStops(originCoordLat, originCoordLong, opts)

Returns a list of stops around a given center coordinate.

Returns a list of stops around a given center coordinate. The returned results are ordered by their distance to the center coordinate.

### Example
```javascript
var Reseplaneraren = require('reseplaneraren');

var apiInstance = new Reseplaneraren.LocationApi();

var originCoordLat = 1.2; // Number | latitude of center coordinate in the WGS84 system

var originCoordLong = 1.2; // Number | longitude of center coordinate in the WGS84 system

var opts = { 
  'maxNo': 56, // Number | maximum number of returned stops
  'maxDist': 56, // Number | maximum distance from the center coordinate
  'format': "format_example", // String | the required response format
  'jsonpCallback': "jsonpCallback_example" // String | If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNearbyStops(originCoordLat, originCoordLong, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originCoordLat** | **Number**| latitude of center coordinate in the WGS84 system | 
 **originCoordLong** | **Number**| longitude of center coordinate in the WGS84 system | 
 **maxNo** | **Number**| maximum number of returned stops | [optional] 
 **maxDist** | **Number**| maximum distance from the center coordinate | [optional] 
 **format** | **String**| the required response format | [optional] 
 **jsonpCallback** | **String**| If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name. | [optional] 

### Return type

[**LocationList**](LocationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

