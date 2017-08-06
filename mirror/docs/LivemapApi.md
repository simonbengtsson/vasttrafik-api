# Reseplaneraren.LivemapApi

All URIs are relative to *https://api.vasttrafik.se/bin/rest.exe/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**livemap**](LivemapApi.md#livemap) | **GET** /livemap | Returns the positions of all vehicles in a given bounding box


<a name="livemap"></a>
# **livemap**
> LiveMap livemap(minx, maxx, miny, maxy, onlyRealtime)

Returns the positions of all vehicles in a given bounding box

This method will return the positions of all vehicles in a given bounding box.

### Example
```javascript
var Reseplaneraren = require('reseplaneraren');

var apiInstance = new Reseplaneraren.LivemapApi();

var minx = "minx_example"; // String | Left border (longitude) of the bounding box in WGS84 * 1000000

var maxx = "maxx_example"; // String | Right border (longitude) of the bounding box in WGS84 * 1000000

var miny = "miny_example"; // String | Lower border (latitude) of the bounding box in WGS84 * 1000000

var maxy = "maxy_example"; // String | Upper border (latitude) of the bounding box in WGS84 * 1000000

var onlyRealtime = "onlyRealtime_example"; // String | Can be used to define whether all vehicles should be returned or only those  vehicles which have realtime information. If it is set to yes, only vehicles  with realtime information are returned, if it is set to no, all vehicles in the  bounding box are returned.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.livemap(minx, maxx, miny, maxy, onlyRealtime, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minx** | **String**| Left border (longitude) of the bounding box in WGS84 * 1000000 | 
 **maxx** | **String**| Right border (longitude) of the bounding box in WGS84 * 1000000 | 
 **miny** | **String**| Lower border (latitude) of the bounding box in WGS84 * 1000000 | 
 **maxy** | **String**| Upper border (latitude) of the bounding box in WGS84 * 1000000 | 
 **onlyRealtime** | **String**| Can be used to define whether all vehicles should be returned or only those  vehicles which have realtime information. If it is set to yes, only vehicles  with realtime information are returned, if it is set to no, all vehicles in the  bounding box are returned. | 

### Return type

[**LiveMap**](LiveMap.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

