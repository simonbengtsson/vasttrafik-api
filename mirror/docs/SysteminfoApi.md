# Reseplaneraren.SysteminfoApi

All URIs are relative to *https://api.vasttrafik.se/bin/rest.exe/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSystemInfo**](SysteminfoApi.md#getSystemInfo) | **GET** /systeminfo | Provides information about the journey planner and the underlying data


<a name="getSystemInfo"></a>
# **getSystemInfo**
> SystemInfo getSystemInfo(opts)

Provides information about the journey planner and the underlying data

Provides information about the journey planner and underlying data. It will return the begin of end of the timetable period and the creation date of the timetable data.

### Example
```javascript
var Reseplaneraren = require('reseplaneraren');

var apiInstance = new Reseplaneraren.SysteminfoApi();

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
apiInstance.getSystemInfo(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **String**| the required response format | [optional] 
 **jsonpCallback** | **String**| If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name. | [optional] 

### Return type

[**SystemInfo**](SystemInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

