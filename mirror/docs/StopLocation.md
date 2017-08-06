# Reseplaneraren.StopLocation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | This ID can either be used as originId or destId to perform a trip request or to call a departure  board | 
**lon** | **String** | The WGS84 longitude | 
**idx** | **String** | This index can be used to reorder the StopLocations and CoordLocations in JSON format response to their correct order. IN JSON you can receive two arrays, one for Stops and one for Addresses. This attribute is only contained in reponses to the location.name request. The location with idx&#x3D;1 is the best fitting location | 
**weight** | **String** | This value specifies some kind of importance of this stop. The more traffic at this stop the higher the weight. The range is between 0 and 32767. This attribute is just contained in the location.allstops response | [optional] 
**name** | **String** | Contains the output name of this stop or station | 
**track** | **String** | Track information, if available | [optional] 
**lat** | **String** | The WGS84 latitude | 


