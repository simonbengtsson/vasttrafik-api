# Reseplaneraren.TripApi

All URIs are relative to *https://api.vasttrafik.se/bin/rest.exe/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTrip**](TripApi.md#getTrip) | **GET** /trip | Calculates a trip from a specified origin to a specified destination.


<a name="getTrip"></a>
# **getTrip**
> TripList getTrip(opts)

Calculates a trip from a specified origin to a specified destination.

Calculates a trip from a specified origin to a specified destination. These might be stop/station IDs or coordinates based on addresses and points of interest validated by the location service or coordinates freely defined by the client. Parameters specifying both origin and destination are mandatory in calls to the trip service. When specifying a stop as origin, the parameter originId is used, while originCoordLat, originCoordLong, and originCoordName are used to specify a (named) coordinate. For the destination, the corresponding parameters are named either destId or destCoordLat, destCoordLong and destCoordName. It is also possible to define a via-stop/station. This forces the journey planner to search for trips which pass the defined station. The parameter is called viaId. When searching for a trip that goes via a coordinate, rather than a stop, two separate trip requests need to be combined into one.

### Example
```javascript
var Reseplaneraren = require('reseplaneraren');

var apiInstance = new Reseplaneraren.TripApi();

var opts = { 
  'originId': 789, // Number | origin stop id
  'originCoordLat': 1.2, // Number | origin latitude of center coordinate in the WGS84 system
  'originCoordLong': 1.2, // Number | origin longitude of center coordinate in the WGS84 system
  'originCoordName': "originCoordName_example", // String | name of the address at the specified origin coordinate
  'destId': 789, // Number | destination stop id
  'destCoordLat': 1.2, // Number | destination latitude of center coordinate in the WGS84 system
  'destCoordLong': 1.2, // Number | destination longitude of center coordinate in the WGS84 system
  'destCoordName': "destCoordName_example", // String | name of the address at the specified destination coordinate
  'viaId': 789, // Number | via stop/station id
  '_date': new Date("2013-10-20"), // Date | date of the trip
  'time': "time_example", // String | time of the trip in format HH:MM
  'searchForArrival': "searchForArrival_example", // String | to specify that the given time and date is not the departure time but the latest time to arrive at the destination, set this parameter to the value 1.
  'useVas': "useVas_example", // String | to exclude trips with Västtågen, set this parameter to 0.
  'useLDTrain': "useLDTrain_example", // String | to exclude trips with long distance trains, set this parameter to 0.
  'useRegTrain': "useRegTrain_example", // String | to exclude trips with regional trains, set this parameter to 0.
  'useBus': "useBus_example", // String | to exclude trips with buses, set this parameter to 0.
  'useMedical': "useMedical_example", // String | to include medical transport lines trips with buses, set this parameter to 1.
  'originMedicalCon': "originMedicalCon_example", // String | to search for medical transport connections from the origin, set this parameter to 1.
  'destMedicalCon': "destMedicalCon_example", // String | to search for medical transport connections from the destination, set this parameter to 1.
  'wheelChairSpace': "wheelChairSpace_example", // String | to search for trips where at least one wheelchair space is present in the vehicle, set this parameter to 1.
  'strollerSpace': "strollerSpace_example", // String | to search for trips with space for stroller, baby carriage or rollator in the vehicle, set this parameter to 1.
  'lowFloor': "lowFloor_example", // String | to search for trips where the vehicle is equipped with a low floor section, but not necessarily a ramp or lift, set this parameter to 1.
  'rampOrLift': "rampOrLift_example", // String | to search for trips where the vehicle is equipped with ramp or lift that allows fully barrier-free boarding and alighting, set this parameter to 1.
  'useBoat': "useBoat_example", // String | to exclude trips with boats, set this parameter to 0.
  'useTram': "useTram_example", // String | to exclude trips with trams, set this parameter to 0.
  'usePT': "usePT_example", // String | to exclude trips with public transportation, set this parameter to 0.
  'excludeDR': "excludeDR_example", // String | to exclude journeys which require tel. registration, set this parameter to 1.
  'maxWalkDist': 56, // Number | maximum walking distance from/to the coordinate in meters
  'walkSpeed': "walkSpeed_example", // String | walking speed given in percent of normal speed
  'originWalk': "originWalk_example", // String | to exclude trips with walks from/to coordinates, set this to 0
  'destWalk': "destWalk_example", // String | to exclude trips with walks from/to coordinates, set this to 0
  'onlyWalk': "onlyWalk_example", // String | to search for walk-only trips, set this to 1
  'originBike': "originBike_example", // String | to search for trips with a bike ride from the origin to a nearby stop, where the journey continues using public transport, set this to 1.
  'maxBikeDist': 56, // Number | maximum biking distance from/to the coordinate in meters
  'bikeCriterion': "bikeCriterion_example", // String | optimize for either the fastest route or a route that is made up of a larger percentage of bike road, where 'F' is used to indicate tha fastest route with mimimized travel time, and 'D' is used to indicate dedicated bike roads to maximize use of bike roads.
  'bikeProfile': "bikeProfile_example", // String | determines the altitude profile of the route, based on a setting for how fast the user can bike when it is steep, where 'E' is used to indicate easy with minimized steepnes, 'N' is used to indicate normal, and 'P' is used to indicate powerful to allow more steepness.
  'onlyBike': "onlyBike_example", // String | to search for bike-only trips, set this to 1
  'originCar': "originCar_example", // String | to search for trips where customer travels by car from the origin and is dropped off at a stop to continue the trip using public transport, set this to 1.
  'originCarWithParking': "originCarWithParking_example", // String | to search for trips where the customer travels by car from the origin, parks at a commuter parking and walks to a nearby stop to continue the trip using public transport, set this to 1.
  'maxCarDist': 56, // Number | maximum car distance from/to the coordinate in meters
  'onlyCar': "onlyCar_example", // String | to search for car-only trips, set this to 1
  'maxChanges': 56, // Number | maximum number of changes in the trip
  'additionalChangeTime': 56, // Number | to prolong the minimal change times in minutes between the public transport legs of the returned journeys
  'disregardDefaultChangeMargin': "disregardDefaultChangeMargin_example", // String | to ignore the default change margin, set this to 1
  'needJourneyDetail': "needJourneyDetail_example", // String | if the reference URL for the journey detail service is not needed in the re, set this to 0
  'needGeo': "needGeo_example", // String | if a reference link for each leg of the resulting trips, which can be used to request the geometry, is needed, set this to 1
  'needItinerary': "needItinerary_example", // String | if a reference link for each leg of the resulting trips, which can be used to request the itinerary, is needed, set this to 1
  'numTrips': 56, // Number | the number of trips in the returned result
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
apiInstance.getTrip(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originId** | **Number**| origin stop id | [optional] 
 **originCoordLat** | **Number**| origin latitude of center coordinate in the WGS84 system | [optional] 
 **originCoordLong** | **Number**| origin longitude of center coordinate in the WGS84 system | [optional] 
 **originCoordName** | **String**| name of the address at the specified origin coordinate | [optional] 
 **destId** | **Number**| destination stop id | [optional] 
 **destCoordLat** | **Number**| destination latitude of center coordinate in the WGS84 system | [optional] 
 **destCoordLong** | **Number**| destination longitude of center coordinate in the WGS84 system | [optional] 
 **destCoordName** | **String**| name of the address at the specified destination coordinate | [optional] 
 **viaId** | **Number**| via stop/station id | [optional] 
 **_date** | **Date**| date of the trip | [optional] 
 **time** | **String**| time of the trip in format HH:MM | [optional] 
 **searchForArrival** | **String**| to specify that the given time and date is not the departure time but the latest time to arrive at the destination, set this parameter to the value 1. | [optional] 
 **useVas** | **String**| to exclude trips with Västtågen, set this parameter to 0. | [optional] 
 **useLDTrain** | **String**| to exclude trips with long distance trains, set this parameter to 0. | [optional] 
 **useRegTrain** | **String**| to exclude trips with regional trains, set this parameter to 0. | [optional] 
 **useBus** | **String**| to exclude trips with buses, set this parameter to 0. | [optional] 
 **useMedical** | **String**| to include medical transport lines trips with buses, set this parameter to 1. | [optional] 
 **originMedicalCon** | **String**| to search for medical transport connections from the origin, set this parameter to 1. | [optional] 
 **destMedicalCon** | **String**| to search for medical transport connections from the destination, set this parameter to 1. | [optional] 
 **wheelChairSpace** | **String**| to search for trips where at least one wheelchair space is present in the vehicle, set this parameter to 1. | [optional] 
 **strollerSpace** | **String**| to search for trips with space for stroller, baby carriage or rollator in the vehicle, set this parameter to 1. | [optional] 
 **lowFloor** | **String**| to search for trips where the vehicle is equipped with a low floor section, but not necessarily a ramp or lift, set this parameter to 1. | [optional] 
 **rampOrLift** | **String**| to search for trips where the vehicle is equipped with ramp or lift that allows fully barrier-free boarding and alighting, set this parameter to 1. | [optional] 
 **useBoat** | **String**| to exclude trips with boats, set this parameter to 0. | [optional] 
 **useTram** | **String**| to exclude trips with trams, set this parameter to 0. | [optional] 
 **usePT** | **String**| to exclude trips with public transportation, set this parameter to 0. | [optional] 
 **excludeDR** | **String**| to exclude journeys which require tel. registration, set this parameter to 1. | [optional] 
 **maxWalkDist** | **Number**| maximum walking distance from/to the coordinate in meters | [optional] 
 **walkSpeed** | **String**| walking speed given in percent of normal speed | [optional] 
 **originWalk** | **String**| to exclude trips with walks from/to coordinates, set this to 0 | [optional] 
 **destWalk** | **String**| to exclude trips with walks from/to coordinates, set this to 0 | [optional] 
 **onlyWalk** | **String**| to search for walk-only trips, set this to 1 | [optional] 
 **originBike** | **String**| to search for trips with a bike ride from the origin to a nearby stop, where the journey continues using public transport, set this to 1. | [optional] 
 **maxBikeDist** | **Number**| maximum biking distance from/to the coordinate in meters | [optional] 
 **bikeCriterion** | **String**| optimize for either the fastest route or a route that is made up of a larger percentage of bike road, where &#39;F&#39; is used to indicate tha fastest route with mimimized travel time, and &#39;D&#39; is used to indicate dedicated bike roads to maximize use of bike roads. | [optional] 
 **bikeProfile** | **String**| determines the altitude profile of the route, based on a setting for how fast the user can bike when it is steep, where &#39;E&#39; is used to indicate easy with minimized steepnes, &#39;N&#39; is used to indicate normal, and &#39;P&#39; is used to indicate powerful to allow more steepness. | [optional] 
 **onlyBike** | **String**| to search for bike-only trips, set this to 1 | [optional] 
 **originCar** | **String**| to search for trips where customer travels by car from the origin and is dropped off at a stop to continue the trip using public transport, set this to 1. | [optional] 
 **originCarWithParking** | **String**| to search for trips where the customer travels by car from the origin, parks at a commuter parking and walks to a nearby stop to continue the trip using public transport, set this to 1. | [optional] 
 **maxCarDist** | **Number**| maximum car distance from/to the coordinate in meters | [optional] 
 **onlyCar** | **String**| to search for car-only trips, set this to 1 | [optional] 
 **maxChanges** | **Number**| maximum number of changes in the trip | [optional] 
 **additionalChangeTime** | **Number**| to prolong the minimal change times in minutes between the public transport legs of the returned journeys | [optional] 
 **disregardDefaultChangeMargin** | **String**| to ignore the default change margin, set this to 1 | [optional] 
 **needJourneyDetail** | **String**| if the reference URL for the journey detail service is not needed in the re, set this to 0 | [optional] 
 **needGeo** | **String**| if a reference link for each leg of the resulting trips, which can be used to request the geometry, is needed, set this to 1 | [optional] 
 **needItinerary** | **String**| if a reference link for each leg of the resulting trips, which can be used to request the itinerary, is needed, set this to 1 | [optional] 
 **numTrips** | **Number**| the number of trips in the returned result | [optional] 
 **format** | **String**| the required response format | [optional] 
 **jsonpCallback** | **String**| If JSONP response format is needed, you can append an additional parameter to specify the name of a callback function, and the JSON object will be wrapped by a function call with this name. | [optional] 

### Return type

[**TripList**](TripList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

