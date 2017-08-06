# Reseplaneraren.ArrivalBoardApi

All URIs are relative to *https://api.vasttrafik.se/bin/rest.exe/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getArrivalBoard**](ArrivalBoardApi.md#getArrivalBoard) | **GET** /arrivalBoard | Return the next 20 arrivals (or less if not existing) from a given point in time or the next arrivals in a given timespan.


<a name="getArrivalBoard"></a>
# **getArrivalBoard**
> ArrivalBoard getArrivalBoard(id, _date, time, direction, opts)

Return the next 20 arrivals (or less if not existing) from a given point in time or the next arrivals in a given timespan.

This method will return the next 20 arrivals (or less if not existing) from a given point in time or the next arrivals in a given timespan. The service can only be called for stops/stations by using according ID retrieved by the location method. The parameter is called id. The time and date are defined with the parameters date and time.

### Example
```javascript
var Reseplaneraren = require('reseplaneraren');

var apiInstance = new Reseplaneraren.ArrivalBoardApi();

var id = 789; // Number | stop id

var _date = new Date("2013-10-20"); // Date | the date

var time = "time_example"; // String | the time in format HH:MM

var direction = 789; // Number | stop id in order to get only departures of vehicles with a specified direction

var opts = { 
  'useVas': "useVas_example", // String | to exclude trips with Västtågen, set this parameter to 0.
  'useLDTrain': "useLDTrain_example", // String | to exclude trips with long distance trains, set this parameter to 0.
  'useRegTrain': "useRegTrain_example", // String | to exclude trips with regional trains, set this parameter to 0.
  'useBus': "useBus_example", // String | to exclude trips with buses, set this parameter to 0.
  'useBoat': "useBoat_example", // String | to exclude trips with boats, set this parameter to 0.
  'useTram': "useTram_example", // String | to exclude trips with trams, set this parameter to 0.
  'excludeDR': "excludeDR_example", // String | to exclude journeys which require tel. registration, set this parameter to 0.
  'timeSpan': 56, // Number | to get the next departures in a specified timespan of up to 24 hours (unit: minutes). If this parameter is not set, the result will contain the next 20 departures.
  'maxDeparturesPerLine': 56, // Number | if timeSpan is set you can further reduce the number of returned journeys by adding this parameter, which will cause only the given number of journeys for every combination of line and direction.
  'needJourneyDetail': "needJourneyDetail_example", // String | if the reference URL for the journey detail service is not needed in the result, set this parameter to 0
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
apiInstance.getArrivalBoard(id, _date, time, direction, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| stop id | 
 **_date** | **Date**| the date | 
 **time** | **String**| the time in format HH:MM | 
 **direction** | **Number**| stop id in order to get only departures of vehicles with a specified direction | 
 **useVas** | **String**| to exclude trips with Västtågen, set this parameter to 0. | [optional] 
 **useLDTrain** | **String**| to exclude trips with long distance trains, set this parameter to 0. | [optional] 
 **useRegTrain** | **String**| to exclude trips with regional trains, set this parameter to 0. | [optional] 
 **useBus** | **String**| to exclude trips with buses, set this parameter to 0. | [optional] 
 **useBoat** | **String**| to exclude trips with boats, set this parameter to 0. | [optional] 
 **useTram** | **String**| to exclude trips with trams, set this parameter to 0. | [optional] 
 **excludeDR** | **String**| to exclude journeys which require tel. registration, set this parameter to 0. | [optional] 
 **timeSpan** | **Number**| to get the next departures in a specified timespan of up to 24 hours (unit: minutes). If this parameter is not set, the result will contain the next 20 departures. | [optional] 
 **maxDeparturesPerLine** | **Number**| if timeSpan is set you can further reduce the number of returned journeys by adding this parameter, which will cause only the given number of journeys for every combination of line and direction. | [optional] 
 **needJourneyDetail** | **String**| if the reference URL for the journey detail service is not needed in the result, set this parameter to 0 | [optional] 
 **format** | **String**| the required response format | [optional] 
 **jsonpCallback** | **String**| If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name. | [optional] 

### Return type

[**ArrivalBoard**](ArrivalBoard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

